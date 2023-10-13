'use client';
import FormCuenta from "@/app/components/FormCuenta/FormCuenta";
import FormDatosPersonales from "@/app/components/FormDatosPersonales/FormDatosPersonales";
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import MyTabPanel from "@/app/components/MyTabPanel/MyTabPanel";
import React, { useState } from 'react';




const PerfilEstudiante = () => {

    const [userData, setUserData] = useState({
        nombre: '',
        tdoc: 'DNI',
        apellido: '',
        nroDoc: '2131',
      });
    
    const [cuentaData, setCuentaData] = useState({
        correo: '',
        contraseña: '',
    });
    
    const tabs = [
        {
            id: 0,
            text: 'Datos Personales',
            contenido: <FormDatosPersonales userData={userData} setUserData={setUserData}></FormDatosPersonales>
        },
        {
            id: 1,
            text: 'Cuenta',
            contenido: <FormCuenta cuentaData={cuentaData} setCuentaData={setCuentaData}></FormCuenta>
        },
    ]
    
    
    return (
        <>
            <MyAppBar text='Administración de bibliotecas'></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8">
                <h1 className="pt-10 text-4xl">Mi Perfil</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
                <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
                    <img className='h-96 w-96' src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49420/man-student-emoji-clipart-md.png"></img>
                    <MyTabPanel tabs={tabs}></MyTabPanel>
                </div>
            </div>
            
            
            </>
        )
} 

export default PerfilEstudiante