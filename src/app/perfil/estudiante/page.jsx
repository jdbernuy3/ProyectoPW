'use client';
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import MyTabPanel from "@/app/components/MyTabPanel/MyTabPanel";

const PerfilEstudiante = () => {
    
    const tabs = [
        {
            id: 0,
            text: 'Datos Personales',
            contenido: <h1>Datos Personales</h1>
        },
        {
            id: 1,
            text: 'Cuenta',
            contenido: <h1>Cuenta</h1>
        },
    ]
    
    
    return (
        <>
            <MyAppBar text='Biblioteca'></MyAppBar>
            <MyTabPanel tabs={tabs}></MyTabPanel>
            </>
        )
} 

export default PerfilEstudiante