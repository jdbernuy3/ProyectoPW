'use client';
import FormCuenta from "@/app/components/FormCuenta/FormCuenta";
import FormDatosPersonales from "@/app/components/FormDatosPersonales/FormDatosPersonales";
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import MyTabPanel from "@/app/components/MyTabPanel/MyTabPanel";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import YouTube from 'react-youtube'; 
import React, { useState, useEffect } from 'react';
import usuarioApi from '../../../api/usuario'; //update.



const PerfilEstudiante = () => {

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

        if(fotoUrl!=null){
            setProfileImage(fotoUrl);
        }

    }, []);

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

    const [openDialog, setOpenDialog] = useState(false);
    const [profileImage, setProfileImage] = useState('https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49420/man-student-emoji-clipart-md.png');
    //cambiar la de arriba para que ponga la imagen del usuario logeado, y si no tiene una ponga una por defecto.
    const [favoriteMusicLink, setFavoriteMusicLink] = useState(''); // Estado para el enlace de música favorita

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    
    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
      
          reader.onload = (e) => {
            const base64String = e.target.result;
            console.log("Cadena base64 de la imagen:", base64String);
            setProfileImage(base64String);
            handleCloseDialog();
          };
      
          reader.readAsDataURL(file);
        }
      };

      const HandleguardarimagenBD = (event) =>{
        const userFromStorage = JSON.parse(localStorage.getItem("user")) || {};
        userFromStorage.fotoUrl=profileImage;
        console.log(userFromStorage);
        localStorage.setItem('user', JSON.stringify(userFromStorage));
        usuarioApi.update(userFromStorage)

      }



    // Función para manejar el cambio en el enlace de música favorita
    function getVideoId(url) {
        const videoId = url.split('v=')[1];
        return videoId ? videoId : url;
    }

    const handleFavoriteMusicChange = (event) => {
        setFavoriteMusicLink(event.target.value);
    };

    const [player, setPlayer] = useState(null);

    const onPlayerReady = (event) => {
        setPlayer(event.target);
    };

    useEffect(() => {
        if (player) {
            player.cueVideoById(getVideoId(favoriteMusicLink)); // Inicializa el video
        }
    }, [player, favoriteMusicLink]);

    
    
    return (
        <>
          <MyAppBar text='Administración de bibliotecas'></MyAppBar>
          <div className="bg-white h-100v w-100v pl-52 pr-8 pt-16">
            <h1 className="pt-10 text-4xl">Mi Perfil</h1>
            <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
            <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2 relative">
              <img className='h-96 w-96' src={profileImage} alt="Imagen de perfil"></img>
              <MyTabPanel tabs={tabs}></MyTabPanel>
              <IconButton onClick={handleOpenDialog} style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <PhotoCameraIcon />
              </IconButton>
              <Button onClick={HandleguardarimagenBD} variant="contained" color="primary" style={{ position: 'absolute', bottom: 0, left: 0, margin: '8px' }}>
                Guardar Imagen
              </Button>
            </div>
            <div className="p-4">
              <div className="text-center">
                <h1 className="text-2xl">Música Favorita del Estudiante</h1>
                {/* Campo de entrada para la música favorita */}
                <input
                  type="text"
                  className="block mx-auto" // Estilo para centrar el campo de entrada
                  placeholder="Enlace de YouTube de tu música favorita"
                  value={favoriteMusicLink}
                  onChange={handleFavoriteMusicChange}
                />
              </div>
            </div>
            {favoriteMusicLink && (
              <div className="flex items-center justify-center">
                <YouTube videoId={getVideoId(favoriteMusicLink)} />
              </div>
            )}
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
      );
      
} 

export default PerfilEstudiante