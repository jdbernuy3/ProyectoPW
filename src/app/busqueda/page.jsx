'use client'
import MyAppBar from "../components/MyAppBar/MyAppBar"
import MyTabPanel from "../components/MyTabPanel/MyTabPanel"
import FormInsertarRecurso from "../components/FormInsertarRecurso/FormInsertarRecurso"


function busquedaAdm() {


    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8">
                <h1 className="pt-10 text-4xl">Busqueda</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />

                <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
                    <div className="">
                        <MyTabPanel tabs={tabs}></MyTabPanel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default busquedaAdm