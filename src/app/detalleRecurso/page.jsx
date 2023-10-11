'use client'
import MyAppBar from "../components/MyAppBar/MyAppBar";
import { useEffect, useState } from "react";
import AlertDialog from "../components/AlertDialog/AlertDialog";
import { Router } from 'next/router';
import Link from "next/link";

function DetalleRecurso({ searchParams }) {

    
    const [alertDialog, setAlertDialog] = useState(false);
    const [libros, setLibros] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("libros"));
        return localData || [];
    });

    const [ind, setIndice] = useState(() => {
        const lista = [...libros];
        const ind = lista.findIndex((element) => element.id == searchParams.id);
        console.log(ind);
        return ind;
    });

    const [libro, setLibro] = useState(() => {
        const id = parseInt(searchParams.id);

        const libro = libros.find((libro) => libro.id === id);

        return libro;
    });

    useEffect(() => {
        localStorage.setItem("libros", JSON.stringify(libros));
    }, [libros]);

    const handleEliminar = () => {
        let nuevosLibros = [...libros];
        nuevosLibros.splice(ind,1);
        setLibros(nuevosLibros);
        setAlertDialog(true);
    }

    const handleAlert = () => {
        setAlertDialog(false);
    }


    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8">
                <h1 className="p-10 font-bold text-4xl">{libro.titulo}</h1>
                <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"></img>
                    <div className="w-max p-10">
                        <h2 className="font-regular text-2xl">Autor:</h2>
                        <p>{libro.autor}</p>
                        <br></br>
                        <h2 className="font-regular text-2xl">Serie:</h2>
                        <p>{libro.serie}</p>
                        <br></br>
                        <h2 className="font-regular text-2xl">ISBN:</h2>
                        <p>{libro.ISBN}</p>
                        <br></br>
                        <h2 className="font-regular text-2xl">Estado:</h2>
                        <p>{libro.reserva ? 'Reservado' : 'Disponible'}</p>
                        <br></br>
                        <Link href={{
                            pathname: '/modificarRecurso',
                            query: {
                                id: libro.id,
                            }
                        }} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0 mr-5">Modificar</Link>
                        <Link onClick={handleEliminar} href="/inicio/admin" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0">Eliminar</Link>
                        <AlertDialog title='Eliminación Completa' text='El recurso ha sido eliminado con éxito.' open={alertDialog} onClose={handleAlert}></AlertDialog>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalleRecurso