'use client';

import styleL from '../src/app/Login/styleL.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Login = () => {
    Inicio("/Login");
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleClick = () => {

        const data = JSON.parse(window.localStorage.getItem('personas')) //cambio
        let foundusuario = null
        if (data) {
            foundusuario = data.find(
                (item) => item.correo === usuario && item.contrasena === password //cambio
            )
            
            //cambio
            if(foundusuario){
                //Conseguir el dato de nombres
                window.localStorage.setItem('nombreUsuario', foundusuario.nombres);
                //Conseguir el dato de rol
                window.localStorage.setItem('rol', foundusuario.rol);
                window.localStorage.setItem("recargar", "true");
                //window.location.replace("/UsuarioPrincipal")
                router.push('/UsuarioPrincipal')
            }else{
                alert("Correo o contraseña incorrectos");
            }
            //cambio
                
        }else{
            alert("Actualmente no existen cuentas");
        }
}

} 
