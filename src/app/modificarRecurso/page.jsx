'use client'
import MyAppBar from "../components/MyAppBar/MyAppBar"
import MyTabPanel from "../components/MyTabPanel/MyTabPanel"
import FormModificarRecurso from "../components/FormModificarRecurso/FormModificarRecurso"
import { useState } from "react"

function ModificarRecurso({ searchParams }) {

    const user = 'Juliana'

    const tabs = [
        {
            id: 0,
            text: 'MODIFICAR LIBRO',
            contenido: <FormModificarRecurso id={parseInt(searchParams.id)}></FormModificarRecurso>
        },
    ]

    const [libros, setLibros] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("libros"));
        return localData || [];
    });
    
    const [indice, setIndice] = useState(() => {
        const lista = [...libros];
        const ind = lista.findIndex((element) => element.id == searchParams.id);
        return ind;
    });


    const [libro, setLibro] = useState(libros[indice]);

    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8">
                <h1 className="pt-10 text-4xl">{`Hola, ${user}!`}</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />

                <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
                    <img className='pr-20 w-80 h-fit' src={libro.imagenPortadaURL != '' ? libro.imagenPortadaURL : 'https://elcomercio.pe/resizer/k3JQ9nQAHSY_xqle1DBrrSgYgGI=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7OQEQHOSPZEDVMAAJFQLXCCYQE.jpg'}></img>
                    <div>
                        <MyTabPanel tabs={tabs}></MyTabPanel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModificarRecurso