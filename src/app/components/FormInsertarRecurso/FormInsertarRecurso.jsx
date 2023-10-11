import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import AlertDialog from '../AlertDialog/AlertDialog';

function FormInsertarRecurso() {
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
        vecesReservado: 0,
    }

    const [alertDialog, setAlertDialog] = useState(false);
    const [libro, setLibro] = useState(libroInicial);
    const [libros, setLibros] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("libros"));
        return localData || [];
    });

    useEffect(() => {
        // Actualizar el LocalStorage cuando la lista de libros cambie
        localStorage.setItem("libros", JSON.stringify(libros));
    }, [libros]);

    const handleAgregar = (e) => {
        // Agregar el libro actual a la lista de libros y reiniciar el formulario

        e.preventDefault();

        setLibros([...libros, libro]);
        setLibro(libroInicial);
        setAlertDialog(true);
    }

    const handleChange = (field, value) => {
        // Actualizar el estado del libro con el valor del campo correspondiente
        setLibro({ ...libro, [field]: value, id: libros.length+1});
        setAlertDialog(false);
    }

    const handleAlert = () => {
        setAlertDialog(false);
    }

    return (
        <>
            <form className='text-center' onSubmit={handleAgregar}>
                <ul>
                    <li className='p-4'>
                        <TextField
                            id="titulo"
                            label="TÍTULO"
                            color='secondary'
                            variant="outlined"
                            value={libro.titulo}
                            onChange={(e) => handleChange("titulo", e.target.value)}
                            focused
                            required
                        />
                    </li>
                    <li className='p-4'>
                        <TextField
                            id="autor"
                            label="Autor, autores"
                            variant="outlined"
                            value={libro.autor}
                            onChange={(e) => handleChange("autor", e.target.value)}
                            color='secondary'
                            focused
                        />
                    </li>
                    <li className='p-4'>
                        <TextField
                            id="ISBN"
                            label="ISBN"
                            variant="outlined"
                            value={libro.ISBN}
                            onChange={(e) => handleChange("ISBN", e.target.value)}
                            color='secondary'
                            focused
                        />
                    </li>
                    <li className='p-4'>
                        <TextField
                            id="serie"
                            label="Serie, tipo"
                            variant="outlined"
                            value={libro.serie}
                            onChange={(e) => handleChange("serie", e.target.value)}
                            color='secondary'
                            focused
                        />
                    </li>
                </ul>
                <input type='submit' value='Guardar' className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0"></input>
                <AlertDialog title='Registro Completa' text='El recurso ha sido grabado con éxito.' open={alertDialog} onClose={handleAlert}></AlertDialog>
            </form>
        </>
    );
}

export default FormInsertarRecurso;