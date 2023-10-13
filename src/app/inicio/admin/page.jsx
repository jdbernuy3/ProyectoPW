'use client'
import MyAppBar from "@/app/components/MyAppBar/MyAppBar"
import SimpleCard from "@/app/components/SimpleCard/SimpleCard"
import { useState } from "react";

function InicioAdmin() {

    const user = 'Juliana'

    const [ultimasReservas, setUltimasReservas] = useState(() => {
        const libros = JSON.parse(localStorage.getItem("libros"));
        const librosReservados = libros.filter((libro) => libro.reserva === true)

        const librosOrdenados = librosReservados.sort((a, b) => {
            const fechaA = new Date(a.fechaReserva);
            const fechaB = new Date(b.fechaReserva);
            return fechaB - fechaA;
        });
        return librosOrdenados.slice(0, 3);
    });

    const [masPedidos, setMasPedidos] = useState(() => {
        const libros = JSON.parse(localStorage.getItem("libros"));

        const librosOrdenados = libros.sort((a, b) => {
            return b.vecesReservado - a.vecesReservado;
        });
        return librosOrdenados.slice(0, 3);
    });

    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8">
                <h1 className="pt-10 text-4xl">{`Bienvenido, ${user}!`}</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
                <div className="bg-[#F3EDF7] p-10">
                    <h2 className="text-xl font-medium mb-5">Últimas reservas</h2>
                    <div className="flex space-x-4">
                    {
                        ultimasReservas.map((libro) => 
                            <SimpleCard id={libro.id} key={libro.id} titulo={libro.titulo} fecha={libro.fechaReserva} imagen={libro.imagenPortadaURL}></SimpleCard>
                        )
                    }
                    </div>
                </div>
                <div className="bg-[#F3EDF7] p-10 mt-10">
                    <h2 className="text-xl font-medium mb-5">Los más pedidos</h2>
                    <div className="flex space-x-4">
                    {
                        masPedidos.map((libro) => 
                            <SimpleCard id={libro.id} key={libro.id} titulo={libro.titulo} fecha={libro.fechaReserva} imagen={libro.imagenPortadaURL}></SimpleCard>
                        )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default InicioAdmin