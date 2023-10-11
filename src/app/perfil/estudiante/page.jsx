'use client';
import FormCuenta from "@/app/components/FormCuenta/FormCuenta";
import FormDatosPersonales from "@/app/components/FormDatosPersonales/FormDatosPersonales";
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import MyTabPanel from "@/app/components/MyTabPanel/MyTabPanel";

const PerfilEstudiante = () => {
    
    const tabs = [
        {
            id: 0,
            text: 'Datos Personales',
            contenido: <FormDatosPersonales></FormDatosPersonales>
        },
        {
            id: 1,
            text: 'Cuenta',
            contenido: <FormCuenta></FormCuenta>
        },
    ]
    
    
    return (
        <>
            <MyAppBar text='Administración de bibliotecas'></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8">
                <h1 className="Titulo">Mi Perfil</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
                <div className="h-100v w-100v bg-[#F3EDF7]">
                <MyTabPanel tabs={tabs}></MyTabPanel>
                </div>
            </div>
            
            
            </>
        )
} 

export default PerfilEstudiante