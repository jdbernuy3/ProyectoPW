'use client';
import FormDatosPersonales from "@/app/components/FormDatosPersonales/FormDatosPersonales";
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import MyTabPanel from "@/app/components/MyTabPanel/MyTabPanel";
import FormCuenta from "@/app/components/FormCuenta/FormCuenta";
import FormPreferencias from "@/app/components/FormPreferencias/FormPreferencias";
import React, { useState } from 'react';





const PerfilAdmin = () => {

    const [userData, setUserData] = useState({
        nombre: 'jd',
        tdoc: 'DNI',
        apellido: 'br',
        nroDoc: '12',
      });
    
    const [cuentaData, setCuentaData] = useState({
        correo: '2',
        contraseña: '2',
    });
    
    const [preferencias, setPreferencias] = useState({
        idioma: '3',
        prefijo: '3', 
        color: '3', 
      });
      

    const tabs = [
        {
            id: 0,
            text: 'Datos Personales',
            contenido: <FormDatosPersonales userData={userData} setUserData={setUserData}></FormDatosPersonales> //cambio
        },
        {
            id: 1,
            text: 'Cuenta',
            contenido: <FormCuenta cuentaData={cuentaData} setCuentaData={setCuentaData}></FormCuenta>
        },
        {
            id: 2,
            text: 'Preferencias',
            contenido: <FormPreferencias preferencias={preferencias} setPreferencias={setPreferencias}></FormPreferencias>
        },
    ]

    return (
        <>
            <MyAppBar text='Administración de bibliotecas'></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8">
                <h1 className="pt-10 text-4xl">Hola, Juliana</h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
                <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
                    <img className='h-96 w-96' src="https://c0.klipartz.com/pngpicture/320/858/gratis-png-administrador-de-iconos-de-computadora-director-ejecutivo-thumbnail.png"></img>
                    <MyTabPanel tabs={tabs}></MyTabPanel>
                </div>
            </div>
        </>
    )
} 

export default PerfilAdmin