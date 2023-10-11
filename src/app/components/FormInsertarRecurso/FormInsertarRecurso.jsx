import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

function FormInsertarRecurso() {
    const libroInicial = {
        serie: "",
        autor: "",
        ISBN: "",
        imagenPortadaURL: "",
        titulo: "",
        reserva: false,
        fechaReserva: "",
        fechaRetorno: "",
    }

    const [libro, setLibro] = useState(libroInicial);
    const [libros, setLibros] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("libros"));
        return localData || [];
    });

    /*
    useEffect(() => {
        // Recuperar libros almacenados en el LocalStorage al cargar el componente
        const librosInicial = JSON.parse(localStorage.getItem("libros")) || [];
        setLibros(librosInicial);
    }, []);
    */

    useEffect(() => {
        // Actualizar el LocalStorage cuando la lista de libros cambie
        localStorage.setItem("libros", JSON.stringify(libros));
    }, [libros]);
    
    const handleAgregar = () => {
        // Agregar el libro actual a la lista de libros y reiniciar el formulario
        setLibros([...libros, libro]);
        setLibro(libroInicial);
    }

    const handleChange = (field, value) => {
        // Actualizar el estado del libro con el valor del campo correspondiente
        setLibro({ ...libro, [field]: value });
    }

    return (
        <div className='text-center'>
            <ul>
                <li className='p-4'>
                    <TextField
                        id="outlined-basic"
                        label="TÍTULO"
                        variant="outlined"
                        value={libro.titulo}
                        onChange={(e) => handleChange("titulo", e.target.value)}
                    />
                </li>
                <li className='p-4'>
                    <TextField
                        id="outlined-basic"
                        label="Autor, autores"
                        variant="outlined"
                        value={libro.autor}
                        onChange={(e) => handleChange("autor", e.target.value)}
                    />
                </li>
                <li className='p-4'>
                    <TextField
                        id="outlined-basic"
                        label="ISBN"
                        variant="outlined"
                        value={libro.ISBN}
                        onChange={(e) => handleChange("ISBN", e.target.value)}
                    />
                </li>
                <li className='p-4'>
                    <TextField
                        id="outlined-basic"
                        label="Serie, tipo"
                        variant="outlined"
                        value={libro.serie}
                        onChange={(e) => handleChange("serie", e.target.value)}
                    />
                </li>
            </ul>
            <button onClick={handleAgregar} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0">
                Guardar
            </button>
        </div>
    );
}

export default FormInsertarRecurso;