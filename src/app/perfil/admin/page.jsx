'use client';
import FormDatosPersonales from "@/app/components/FormDatosPersonales/FormDatosPersonales";
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import MyTabPanel from "@/app/components/MyTabPanel/MyTabPanel";
import FormCuenta from "@/app/components/FormCuenta/FormCuenta";
import FormPreferencias from "@/app/components/FormPreferencias/FormPreferencias";
import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import users from "@/data/users";



const PerfilAdmin = () => {

    const [loggedUser, setLoggedUser] = useState(null);
    const [userData, setUserData] = useState({
        nombre: '',
        tdoc: '',
        apellido: '',
        nroDoc: '',
    });
    
    const [cuentaData, setCuentaData] = useState({
        correo: '',
        contraseña: '',
    });
    
    const [preferencias, setPreferencias] = useState({
        idioma: '',
        prefijo: '',
        color: '',
    });
    

    useEffect(() => {
        const userFromStorage = JSON.parse(localStorage.getItem("user")) || {};
        setLoggedUser(userFromStorage);
    
        const { id, nombres, apellidos, fotoUrl, idTipoUsuario, idTipoDoc, nroDoc, correo, contrasena, idioma, prefijo, color} = userFromStorage;
    
        setUserData({
            nombre: nombres || '',
            tdoc: idTipoDoc || '',
            apellido: apellidos || '',
            nroDoc: nroDoc || '',
        });
    
        setCuentaData({
            correo: correo || '',
            contraseña: contrasena || '',
        });
    
        setPreferencias({
            idioma: idioma || '',
            prefijo: prefijo || '',
            color: color || '',
        });

        /*if(fotoUrl!=null){
            setProfileImage(fotoUrl);
        }*/
    }, []);
    
        

      const [openDialog, setOpenDialog] = useState(false);
      const [profileImage, setProfileImage] = useState('https://c0.klipartz.com/pngpicture/320/858/gratis-png-administrador-de-iconos-de-computadora-director-ejecutivo-thumbnail.png');
      //cambiar la de arriba para que ponga la imagen del usuario logeado, y si no tiene una ponga una por defecto.

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

    

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProfileImage(URL.createObjectURL(file));
        handleCloseDialog();
    };


    return (
        <>
            <MyAppBar text='Administración de bibliotecas'></MyAppBar>
            <div className="bg-white h-100v w-100v pl-52 pr-8 pt-16">
                <h1 className="pt-10 text-4xl">Hola, {userData.nombre} </h1>
                <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
                <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
                <img className='h-96 w-96' src={profileImage} alt="Imagen de perfil"></img>
                    <MyTabPanel tabs={tabs}></MyTabPanel>
                    <IconButton onClick={handleOpenDialog} style={{ position: 'absolute', bottom: 0, right: 0 }}>
                        <PhotoCameraIcon />
                    </IconButton>
                </div>
            </div>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Subir nueva imagen de perfil</DialogTitle>
                <DialogContent>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="image-upload"
                        type="file"
                        onChange={handleImageUpload}
                    />
                    <label htmlFor="image-upload">
                        <Button component="span">
                            Seleccionar archivo
                        </Button>
                    </label>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
} 

export default PerfilAdmin