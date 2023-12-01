'use client'
import MyAppBar from "@/app/components/MyAppBar/MyAppBar"
import SimpleCard from "@/app/components/SimpleCard/SimpleCard"
import { useEffect, useState } from "react";
import libroApi from '../../../api/libro'
import reservaApi from '../../../api/reserva'
import { Link } from "react-router-dom";

function InicioAdmin() {

    const user = 'Juliana'

    const [ultimasReservas, setUltimasReservas] = useState([]);

    const [masPedidos, setMasPedidos] = useState([]);

    useEffect(() => {
        cargarUltimasReservas()
        cargarMasPedidos()
    }, [])

    const cargarUltimasReservas = () => {

        reservaApi.findAllComplete()
            .then(promise => {
                const reservas = promise.data || []
                //const reservasActuales = reservas.filter((reserva) => reserva.estado === '1')
                console.log(promise.data)
                const reservasOrdenadas = reservas.sort((a, b) => {
                    const fechaA = new Date(a.fechaReserva)
                    const fechaB = new Date(b.fechaReserva)
                    return fechaB - fechaA
                })

                setUltimasReservas(reservasOrdenadas.slice(0, 3))

            })
    }

    const cargarMasPedidos = () => {
        libroApi.findAll()
            .then(promise => {
                const libros = promise.data || []
                const librosOrdenados = libros.sort((a, b) => {
                    return b.vecesReservado - a.vecesReservado;
                });
                setMasPedidos(librosOrdenados.slice(0, 3))
            })
    }

    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8 pt-16">
            <div className="grid grid-cols-2">
                <h1 className="pt-10 text-4xl">{`Bienvenido, ${user}!`}</h1>
                <a href={'/insertarRecurso'} className="justify-self-end bg-purple-500 hover:bg-purple-700 text-white py-2 px-10 mt-10 mr-12 rounded-3xl focus:ring-0">Insertar recurso</a>
            </div>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
                <div className="bg-[#F3EDF7] p-10">
                    <h2 className="text-xl font-medium mb-5">Últimas reservas</h2>
                    <div className="flex space-x-4">
                    {   
                        ultimasReservas.map((reserva) => 
                            <SimpleCard id={reserva.libro.id} key={reserva.libro.id} titulo={reserva.libro.titulo} fecha={reserva.libro.fechaReserva} imagen={reserva.libro.imagenPortadaUrl}></SimpleCard>
                        )
                    }
                    </div>
                </div>
                <div className="bg-[#F3EDF7] p-10 mt-10">
                    <h2 className="text-xl font-medium mb-5">Los más pedidos</h2>
                    <div className="flex space-x-4">
                    {
                        masPedidos.map((libro) => 
                            <SimpleCard id={libro.id} key={libro.id} titulo={libro.titulo} fecha={libro.fechaReserva} imagen={libro.imagenPortadaUrl}></SimpleCard>
                        )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default InicioAdmin