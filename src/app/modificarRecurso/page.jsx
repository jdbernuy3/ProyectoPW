'use client'
import MyAppBar from "../components/MyAppBar/MyAppBar"
import MyTabPanel from "../components/MyTabPanel/MyTabPanel"
import FormModificarRecurso from "../components/FormModificarRecurso/FormModificarRecurso"
import { useEffect, useState } from "react"
import libroApi from '../../api/libro'

function ModificarRecurso({ searchParams }) {

    const user = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem('user')) || {} : {};

    const tabs = [
        {
            id: 0,
            text: 'MODIFICAR LIBRO',
            contenido: <FormModificarRecurso id={parseInt(searchParams.id)}></FormModificarRecurso>
        },
    ]

    const [libro, setLibro] = useState({});

    const cargarLibro = () => {
        libroApi.findOne(searchParams.id)
            .then(promise => {
                setLibro(promise.data)
            })
    }

    useEffect(() => {
        cargarLibro()
    }, [])


    

    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8 pt-16">
                <h1 className="pt-10 text-4xl">{`Hola, ${user.nombres}!`}</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />

                <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
                    <img className='pr-20 w-80 h-fit' src={libro.imagenPortadaUrl} alt="Imagen portada"></img>
                    <div>
                        <MyTabPanel tabs={tabs}></MyTabPanel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModificarRecurso