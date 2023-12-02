'use client';
import React, { useState, useEffect } from 'react';
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import reservaApi from '../../api/reserva'
import CardReservaAlumno from '../components/CardReseva/CardReservaAlumno';

const Prestamos = () => {

    const user = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem('user')) || {} : {};
    //const user = JSON.parse(localStorage.getItem('user')) || {}
    const [reservas, setReservas] = useState(null)

    useEffect(() => {
        reservaApi.findAllComplete()
            .then(promise => {
                const reservas = promise.data
                const reservasActuales = reservas.filter(x => x.estado === '1')
                const reservasAlumno = reservasActuales.filter(x => x.idUsuario === user.id)
                
                console.log(reservasAlumno)
                setReservas(reservasAlumno)
            })
    }, [])

    return(
        <>
        <MyAppBar></MyAppBar>
        <div className="bg-white h-100v w-100v pl-52 pr-8 pt-16">
        <h1 className="pt-10 text-4xl"> Tus reservas </h1>
        <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
        <div className="flex flex-wrap justify-center">
        {
            reservas ? (
                (
                    reservas.map(reserva => (
                        <CardReservaAlumno 
                            key={reserva.id} 
                            id={reserva.libro.id} 
                            imagenPortadaUrl={reserva.libro.imagenPortadaUrl}
                            isbn13={reserva.libro.isbn13}
                            autor={reserva.libro.autor}
                            titulo={reserva.libro.titulo}
                            fechaDevolucion={reserva.fechaDevolucion.substring(0,10)}
                        ></CardReservaAlumno>
                    ))
                )
            ) : 'No tienes reservas en este momento.'
        }
        </div>
        </div>
        </>
    )

}

export default Prestamos