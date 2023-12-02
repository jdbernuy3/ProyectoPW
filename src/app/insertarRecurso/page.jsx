'use client'
import MyAppBar from "../components/MyAppBar/MyAppBar"
import MyTabPanel from "../components/MyTabPanel/MyTabPanel"
import FormInsertarRecurso from "../components/FormInsertarRecurso/FormInsertarRecurso"

function InsertarRecurso() {

    const user = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem('user')) || {} : {};

    const tabs = [
        {
            id: 0,
            text: 'INSERTAR NUEVO LIBRO',
            contenido: <FormInsertarRecurso></FormInsertarRecurso>
        },
    ]

    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8 pt-16">
                <h1 className="pt-10 text-4xl">Hola, {user.nombres}</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />

                <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
                    <img className='px-20 pt-10 max-h-96'src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/ULIMA_2019.jpg/1200px-ULIMA_2019.jpg"></img>
                    <div className="">
                        <MyTabPanel tabs={tabs}></MyTabPanel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InsertarRecurso