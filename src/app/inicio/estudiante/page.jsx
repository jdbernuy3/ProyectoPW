'use client'
import MyAppBar from "@/app/components/MyAppBar/MyAppBar"
import SimpleCardAlumno from "@/app/components/SimpleCard/SimpleCardAlumno"
import { useState, useEffect } from "react";
import reservaApi from '../../../api/reserva'

function InicioEstudiante() {


    //const user = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem('user')) || {} : {};
    const user = JSON.parse(localStorage.getItem('user')) || {}

    const [masFrecuentes, setMasFrecuentes] = useState([]);
    const [prontasAVencer, setProntasAVencer] = useState([]);

    useEffect(() => {
        cargarmasFrecuentes()
        cargarProntasAVencer()
    }, [])

    const cargarmasFrecuentes = () => {

        reservaApi.findAllComplete()
            .then(promise => {
                const reservas = promise.data || []
                const reservasAlumno = reservas.filter((reserva) => reserva.idUsuario === user.id)


                const conteo = {}
                reservasAlumno.forEach(item => {
                    const { libro } = item;
                    const libroString = JSON.stringify(libro);
                    conteo[libroString] = (conteo[libroString] || 0) + 1;
                });
                
                const conteoLibros = Object.keys(conteo).map(libroString => ({ libro: JSON.parse(libroString), vecesReservado: conteo[libroString] }));

                conteoLibros.sort((a, b) => b.vecesReservado - a.vecesReservado);
                const top3Libros = conteoLibros.slice(0, 3).map(item => item.libro);

                setMasFrecuentes(top3Libros)

            })
    }

    const cargarProntasAVencer = () => {

        reservaApi.findAllComplete()
            .then(promise => {
                const reservas = promise.data || []
                const reservasAlumno = reservas.filter((reserva) => reserva.idUsuario === user.id)
                const reservasActuales = reservasAlumno.filter((reserva) => reserva.estado === '1')

                const reservasOrdenadas = reservasActuales.sort((a, b) => {
                    const fechaA = new Date(a.fechaDevolucion)
                    const fechaB = new Date(b.fechaDevolucion)
                    return fechaA - fechaB
                })
                setProntasAVencer(reservasOrdenadas)

            })
    }


    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8 pt-16">
                <h1 className="pt-10 text-4xl">{`Bienvenido, ${user.nombres}!`}</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
                <div className="bg-[#F3EDF7] p-10">
                    <h2 className="text-xl font-medium mb-5">Más frecuentes</h2>
                    <div className="flex space-x-4">
                    {   
                        masFrecuentes.map((libro) => 
                            <SimpleCardAlumno id={libro.id} key={libro.id} titulo={libro.titulo} fecha={libro.fecha} imagen={libro.imagenPortadaUrl}></SimpleCardAlumno>
                        )
                    }
                    </div>
                </div>
                <div className="bg-[#F3EDF7] p-10 mt-10">
                    <h2 className="text-xl font-medium mb-5">Prontas a vencer</h2>
                    <div className="flex space-x-4">
                    {
                        prontasAVencer.map((reserva) => 
                            <SimpleCardAlumno id={reserva.libro.id} key={reserva.libro.id} titulo={reserva.libro.titulo} fecha={reserva.fechaDevolucion.substring(0,10)} imagen={reserva.libro.imagenPortadaUrl}></SimpleCardAlumno>
                        )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default InicioEstudiante