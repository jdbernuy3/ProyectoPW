const users = [
    {
        id: 1,
        nombre: "Juan",
        apellidos: "Carranza",
        correo: "Juan@gmail.com",
        TipoDocumento: "DNI",
        NroDocumento: 12345678,
        contraseña: "123",
        tipo: "alumno"
    },
    {
        id: 2, // ID único para el segundo usuario
        nombre: "Juliana",
        apellidos: "Carranza",
        correo: "admin@gmail.com",
        TipoDocumento: "DNI", // Agrega el tipo de documento aquí
        NroDocumento: 87654321, // Agrega el número de documento aquí
        contraseña: "123",
        tipo: "admin"
    }
];

export default users;