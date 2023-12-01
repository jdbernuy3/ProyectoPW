'use client'
import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { guardarInformacionUsuario } from "@/utils/localStorage.utils";

function Login() {
    const [formData, setFormData] = useState({
        correo: "",
        contrasena: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://ggranda-20232-prograweb-as-api.azurewebsites.net/usuario/login', {
                correo: formData.correo,
                contrasena: formData.contrasena,
            });

            if (response.data.success) {
                // Usuario autenticado con éxito
                alert('Inicio de sesión exitoso');
                // Guardar información del usuario en localStorage
                guardarInformacionUsuario(
                    formData.correo,
                    formData.contrasena,
                );
                // Aquí puedes redirigir a la página de inicio correspondiente
                window.location.href = '/inicio/alumno'; // Ajusta la ruta según tus necesidades
            } else {
                // Autenticación fallida
                alert('Correo o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            alert('Error en el inicio de sesión');
        }
    };



    return (
        <div>
            <div style={{ marginTop: "100px" }}>
                <h1 className="text-3xl font-bold text-center">Sistema de reserva de libros</h1>
            </div>
            <form className='text-center' onSubmit={handleLogin}>
                <ul>
                    <li className='p-4 '>
                        <TextField
                            label='Usuario/Correo'
                            color='secondary'
                            variant="outlined"
                            focused
                            name="correo"
                            value={formData.correo}
                            onChange={handleInputChange}
                        />
                    </li>
                    <li className='p-4'>
                        <TextField
                            label='Contraseña'
                            color='secondary'
                            variant="outlined"
                            focused
                            type="password"
                            name="contrasena"
                            value={formData.contrasena}
                            onChange={handleInputChange}
                        />
                    </li>
                </ul>
                <div>
                    <a href="#" className="font-semibold m-1 hover:text-indigo-500 text-xs text-[#5E2B6D]" style={{ marginLeft: "110px", marginBottom: "50px" }}>
                        Forgot password?
                    </a>
                </div>
                <Link href='/Registro'>
                    <input type='button' value='Registro usuario' className="bg-white-500 hover:bg-[#DD96F1] text-[#5E2B6D] font-bold py-2 px-4 rounded-full focus:ring-0 mr-4" />
                </Link>
                <input type='submit' value='Ingresar' className="bg-[#EBC7F5] hover:bg-[#DD96F1] text-black font-bold py-2 px-4 rounded-full focus:ring-0" />
            </form>
        </div>
    );
}


export default Login;
