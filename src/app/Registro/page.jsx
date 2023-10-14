'use client'
import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Link from "next/link";
import users from "src/data/users";

const initialFormData = {
    nombre: "",
    apellidos: "",
    TipoDocumento: "",
    NroDocumento: "",
    correo: "",
    contraseña: "",
};

function Registro() {
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        // Cargar datos desde el localStorage cuando se monta el componente
        const storedFormData = JSON.parse(localStorage.getItem("formData"));
        if (storedFormData) {
            setFormData(storedFormData);
        }

        // Guardar datos en localStorage cuando la página se está cerrando o recargando
        window.addEventListener("beforeunload", handleBeforeUnload);

        // Limpiar el evento antes de que el componente se desmonte
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []); // El segundo argumento [] asegura que este efecto se ejecute solo una vez al montar el componente

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBeforeUnload = () => {
        // Guardar datos en localStorage antes de cerrar o recargar la página
        localStorage.setItem("formData", JSON.stringify(formData));
    };

    const handleRegistro = () => {
        const newUser = {
            id: users.length + 1,
            nombre: formData.nombres,
            apellido: formData.apellidos,
            TipoDocumento: formData.tipoDocumento,
            NroDocumento: formData.numeroDocumento,
            correo: formData.correo,
            contraseña: formData.contraseña,
            tipo: "alumno",
        };

        // Actualizar el estado del array de usuarios
        const updatedUsers = [...users, newUser];
        // Almacenar en localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        // Actualizar el archivo users.js (opcional, dependiendo de tu configuración)

        // Restablecer el formulario después del registro
        setFormData(initialFormData);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center" style={{ marginBottom: "10px" }}>
                Sistema de reserva de libros
            </h1>
            <h2 className="text-2xl font-semibold text-center">Registro de usuario</h2>
            <form className="text-left flex justify-center">
                <div className="w-1/2 p-4" style={{ marginRight: "-300px" }}>
                    {/* Columna de Datos Personales */}
                    <h3 className="font-bold text-[#5D2388]">Datos Personales</h3>
                    <TextField
                        style={{ width: "500px" }}
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
                        style={{ width: "500px" }}
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
                    <TextField
                        style={{ width: "500px" }}
                        label="Tipo de Documento"
                        name="tipoDocumento"
                        color="secondary"
                        variant="outlined"
                        focused
                        fullWidth
                        margin="normal"
                        value={formData.tipoDocumento}
                        onChange={handleInputChange}
                    />
                    <TextField
                        style={{ width: "500px" }}
                        label="Nro de Documento"
                        name="numeroDocumento"
                        color="secondary"
                        variant="outlined"
                        focused
                        fullWidth
                        margin="normal"
                        value={formData.numeroDocumento}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-1/2 p-4" style={{ marginRight: "-300px" }}>
                    {/* Columna de Datos de Cuenta */}
                    <h3 className="font-bold text-[#5D2388]">Datos de Cuenta</h3>
                    <TextField
                        style={{ width: "500px" }}
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
                        style={{ width: "500px" }}
                        label="Password"
                        name="contraseña"
                        color="secondary"
                        variant="outlined"
                        focused
                        type="password"
                        fullWidth
                        margin="normal"
                        value={formData.contraseña}
                        onChange={handleInputChange}
                    />
                    <TextField
                        style={{ width: "500px" }}
                        label="Ingresar Password nuevamente"
                        color="secondary"
                        variant="outlined"
                        focused
                        type="password"
                        fullWidth
                        margin="normal"
                        value={formData.contraseña}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <Link href="/Login">
                <input
                    type="button"
                    value="Registrar"
                    style={{ marginLeft: "1050px", width: "400px" }}
                    className="bg-[#EBC7F5] hover:bg-[#DD96F1] text-black font-bold py-2 px-4 rounded-full focus:ring-0"
                    onClick={handleRegistro}
                />
            </Link>
        </div>
    );
}

export default Registro;
