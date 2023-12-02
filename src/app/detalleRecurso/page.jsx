'use client'
import MyAppBar from "../components/MyAppBar/MyAppBar";
import { useEffect, useState } from "react";
import AlertDialog from "../components/AlertDialog/AlertDialog";
import { Router } from 'next/router';
import Link from "next/link";
import libroApi from '../../api/libro'

function DetalleRecurso({ searchParams }) {

    const user = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem('user')) || {} : {};

    const [alertDialog, setAlertDialog] = useState(false);
    const [libro, setLibro] = useState(null);

    useEffect(() => {
        cargarLibro()
    }, []);

    const cargarLibro = () => {
        libroApi.findOneComplete(searchParams.id)
            .then(promise => {
                if(promise != null) {
                    setLibro(promise.data)
                    console.log(promise.data)
                }
                
            })
    }

    const handleEliminar = () => {
        libroApi.remove(searchParams.id)
            .then(() => {
                setAlertDialog(true);
            })
        
    }

    const handleAlert = () => {
        setAlertDialog(false);
        window.location.replace('/inicio/admin');
    }


    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8 pt-16">
                {
                    (libro !== null) ? (
                        <div>
                            <h1 className="p-10 font-bold text-4xl">{libro.titulo}</h1>
                            <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2 content-center items-center">
                                <img className="min-w-300px object-cover" src={libro.imagenPortadaUrl}></img>
                                <div className="w-max p-10 grid gap-20 md:grid-cols-3">
                                    <div>
                                        <h2 className="font-regular text-2xl">Autor:</h2>
                                        <p>{libro.autor}</p>
                                        <br></br>
                                        <h2 className="font-regular text-2xl">Serie:</h2>
                                        <p>{libro.serie}</p>
                                        <br></br>
                                        <h2 className="font-regular text-2xl">ISBN:</h2>
                                        <p>{libro.isbn13}</p>
                                        <br></br>
                                        <h2 className="font-regular text-2xl">Estado:</h2>
                                        <p>{libro.available ? 'Disponible' : 'Reservado'}</p>
                                        <br></br>
                                        <Link href={{
                                            pathname: '/modificarRecurso',
                                            query: {
                                                id: libro.id,
                                            }
                                        }} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0 mr-5">Modificar</Link>
                                        <button onClick={handleEliminar} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0">Eliminar</button>
                                        <AlertDialog title='Eliminación Completa' text='El recurso ha sido eliminado con éxito.' open={alertDialog} onClose={handleAlert}></AlertDialog>
                                    </div>
                                    <div>
                                        <h2 className="font-regular text-2xl">Título:</h2>
                                        <p>{libro.titulo}</p>
                                        <br></br>
                                        <h2 className="font-regular text-2xl">Encuadernación:</h2>
                                        <p>{libro.encuadernacion}</p>
                                        <br></br>
                                        <h2 className="font-regular text-2xl">Veces reservado:</h2>
                                        <p>{libro.vecesReservado}</p>
                                        <br></br>
                                    </div>
                                    {
                                        !libro.available ? (
                                            <div>
                                                <h2 className="font-regular text-2xl">Fecha Reserva:</h2>
                                                <p>{libro.reserva.fechaReserva.substring(0,10)}</p>
                                                <br></br>
                                                <h2 className="font-regular text-2xl">Fecha Retorno:</h2>
                                                <p>{libro.reserva.fechaDevolucion.substring(0,10)}</p>
                                                <br></br>
                                                <h2 className="font-regular text-2xl">Estudiante:</h2>
                                                <p>{libro.reserva.usuario.nombres}</p>
                                                <br></br>
                                            </div>
                                        ) : (
                                            false
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1 className="p-10 font-bold text-4xl">No se encontró el recurso</h1>
                            <Link href="/inicio/admin" className="bg-purple-500 hover:bg-purple-700 text-white font-semibold ml-10 py-2 px-4 rounded-lg focus:ring-0">Volver a inicio</Link>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default DetalleRecurso