import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

function FormInsertarRecurso(props) {

    const libroInicial = {
        id: 0,
        serie: "",
        autor: "",
        ISBN: "",
        imagenPortadaURL: "",
        titulo: "",
        reserva: false,
        fechaReserva: "",
        fechaRetorno: "",
    }

    
    const [libros, setLibros] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("libros"));
        return localData || [];
    });

    const [libro, setLibro] = useState(libros[props.indice]);

    useEffect(() => {
        // Actualizar el LocalStorage cuando la lista de libros cambie
        localStorage.setItem("libros", JSON.stringify(libros));
    }, [libros]);

    const handleModificar = () => {
        const nuevosLibros = [...libros];

        if (nuevosLibros[props.indice]) {
            nuevosLibros[props.indice] = libro;
        }

        setLibros(nuevosLibros);
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
                        label='Título'
                        value={libro.titulo}
                        color='secondary'
                        variant="outlined"
                        onChange={(e) => handleChange("titulo", e.target.value)}
                        focused
                    ></TextField>
                </li>
                <li className='p-4'>
                    <TextField
                        label='Autor, autores'
                        value={libro.autor}
                        color='secondary'
                        variant="outlined"
                        onChange={(e) => handleChange("autor", e.target.value)}
                        focused
                    ></TextField>
                </li>
                <li className='p-4'>
                    <TextField
                        label='ISBN'
                        value={libro.ISBN}
                        color='secondary'
                        variant="outlined"
                        onChange={(e) => handleChange("ISBN", e.target.value)}
                        focused
                    ></TextField>
                </li>
                <li className='p-4'>
                    <TextField
                        label='Serie, tipo'
                        value={libro.serie}
                        color='secondary'
                        variant="outlined"
                        onChange={(e) => handleChange("serie", e.target.value)}
                        focused
                    ></TextField>
                </li>
            </ul>
            <button onClick={handleModificar} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0">
                Modificar
            </button>
        </div>
    );
}

export default FormInsertarRecurso;