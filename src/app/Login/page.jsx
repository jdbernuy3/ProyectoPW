'use client'
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";
import users from "src/data/users";

function Login() {
    const [formData, setFormData] = useState({
        correo: "",
        contraseña: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const { correo, contraseña } = formData;
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const user = storedUsers.find((user) => user.correo === correo && user.contraseña === contraseña);

        if (user) {
            if (user.tipo === "alumno") {
                window.location.href = "/inicio/alumno";
            } else if (user.tipo === "admin") {
                window.location.href = "/inicio/admin";
            }

            window.localStorage.setItem('user', JSON.stringify(user));

        } else {
            alert("Correo o contraseña incorrectos");
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
                            name="contraseña"
                            value={formData.contraseña}
                            onChange={handleInputChange}
                        />
                    </li>
                </ul>
                <div>
                    <a href="#" className="font-semibold m-1 hover:text-indigo-500 text-xs text-[#5E2B6D]" style={{ marginLeft: "110px", marginBottom:"50px" }}>
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

