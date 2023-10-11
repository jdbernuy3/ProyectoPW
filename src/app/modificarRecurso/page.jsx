'use client'
import MyAppBar from "../components/MyAppBar/MyAppBar"
import MyTabPanel from "../components/MyTabPanel/MyTabPanel"
import FormModificarRecurso from "../components/FormModificarRecurso/FormModificarRecurso"

function ModificarRecurso({ searchParams }) {

    const tabs = [
        {
            id: 0,
            text: 'MODIFICAR LIBRO',
            contenido: <FormModificarRecurso id={parseInt(searchParams.id)}></FormModificarRecurso>
        },
    ]

    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8">
                <h1 className="pt-10 text-4xl">Hola, Juliana</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />

                <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
                    <img className='pr-20'src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"></img>
                    <div className="">
                        <MyTabPanel tabs={tabs}></MyTabPanel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModificarRecurso