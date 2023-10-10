'use client'
import MyAppBar from "../components/MyAppBar/MyAppBar"
import MyTabPanel from "../components/MyTabPanel/MyTabPanel"

function EliminarRecurso() {

    const tabs = [
        {
            id: 0,
            text: 'INSERTAR NUEVO LIBRO',
            contenido:  <><h1>asdasdasdasd</h1></>   
        },
    ]

    return (
        <>
        <MyAppBar></MyAppBar>
        <div className="bg-white h-100v w-100v">
            <h1>Hola, Juliana</h1>
            <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
            <div className="h-100v w-100v bg-[#F3EDF7]">
            <MyTabPanel tabs={tabs} contenido></MyTabPanel>
            </div>
        </div>
        </>
    )
}

export default EliminarRecurso