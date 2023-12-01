'use client';
import React, { useState } from "react";
import { TextField } from "@mui/material";
import api from "@/api/usuario";

function Registro() {
    
    function navigate() {
        window.location.href = '/Login';
      }

    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        idTipoDoc: "", // Cambié el nombre de TipoDocumento a idTipoDoc para coincidir con el formulario
        nroDoc: "",
        correo: "",
        contrasena: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleRegistro = async () => {
        // Validar que todos los campos estén llenos
        if (
            !formData.nombres ||
            !formData.apellidos ||
            !formData.idTipoDoc ||
            !formData.nroDoc ||
            !formData.correo ||
            !formData.contrasena
        ) {
            alert('Por favor, completa todos los campos');
            return;
        }
    
        try {
            // Llamada a la API para crear un nuevo usuario
            const response = await api.create({
                nombres: formData.nombres,
                apellidos: formData.apellidos,
                idTipoUsuario: 1,
                idTipoDoc: formData.idTipoDoc,
                nroDoc: formData.nroDoc,
                correo: formData.correo,
                contrasena: formData.contrasena,
                tipo: 'alumno',
            });
    
            if (!response) {
                throw new Error('Error al registrar usuario');
            }
    
            // Restablecer el formulario después del registro
            setFormData({
                nombres: '',
                apellidos: '',
                idTipoDoc: '',
                nroDoc: '',
                correo: '',
                contrasena: '',
            });
    
            // Redirigir a la página de login
            alert('Registro Exitoso');
            navigate();
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };
    

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Sistema de reserva de libros</h1>
            <h2 className="text-2xl font-semibold">Registro de usuario</h2>
            <form className="flex flex-wrap justify-center">
                <div className="flex-1 p-4">
                    {/* Columna de Datos Personales */}
                    <h3 className="font-bold text-[#5D2388]">Datos Personales</h3>
                    <TextField
                        style={{ width: '80%' }}
                        label="Nombres"
                        name="nombres"
                        color="secondary"
                        variant="outlined"
                        focused
                        fullWidth
                        margin="normal"
                        value={formData.nombres}
                        onChange={handleInputChange}
                    />
                    <TextField
                        style={{ width: '80%' }}
                        label="Apellidos"
                        name="apellidos"
                        color="secondary"
                        variant="outlined"
                        focused
                        fullWidth
                        margin="normal"
                        value={formData.apellidos}
                        onChange={handleInputChange}
                    />
                    <select
                        style={{ width: '80%' }}
                        id="TipoDocumento"
                        className="border-2 border-[#9C27B0] text-[#9C27B0] text-sm rounded-md focus:ring-[#9C27B0] focus:border-[#9C27B0] mt-2 "
                        name="idTipoDoc"
                        value={formData.idTipoDoc}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled defaultValue>
                            Tipo de Documento
                        </option>
                        <option value="1">DNI</option>
                        <option value="2">Pasaporte</option>
                    </select>

                    <TextField
                        style={{ width: "80%" }}
                        label="Nro de Documento"
                        name="nroDoc"
                        color="secondary"
                        variant="outlined"
                        focused
                        fullWidth
                        type="number"
                        margin="normal"
                        value={formData.nroDoc}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex-1 p-4">
                    {/* Columna de Datos de Cuenta */}
                    <h3 className="font-bold text-[#5D2388]">Datos de Cuenta</h3>
                    <TextField
                        style={{ width: '80%' }}
                        label="Correo Electrónico"
                        name="correo"
                        color="secondary"
                        variant="outlined"
                        focused
                        fullWidth
                        margin="normal"
                        value={formData.correo}
                        onChange={handleInputChange}
                    />
                    <TextField
                        style={{ width: '80%' }}
                        label="Password"
                        name="contrasena"
                        color="secondary"
                        variant="outlined"
                        focused
                        type="password"
                        fullWidth
                        margin="normal"
                        value={formData.contrasena}
                        onChange={handleInputChange}
                    />
                    <TextField
                        style={{ width: '80%' }}
                        label="Ingresar Password nuevamente"
                        color="secondary"
                        variant="outlined"
                        focused
                        type="password"
                        fullWidth
                        margin="normal"
                        value={formData.contrasena}
                        onChange={handleInputChange}
                    />
                    {/* Otros campos TextField para Datos de Cuenta */}
                </div>
            </form>
            <div className="flex justify-center mt-4">
                <input
                    type="button"
                    value="Registrar"
                    className="bg-[#EBC7F5] hover:bg-[#DD96F1] text-black font-bold py-2 px-4 rounded-full focus:ring-0"
                    onClick={handleRegistro}
                />
            </div>
        </div>
    );
}

export default Registro;
