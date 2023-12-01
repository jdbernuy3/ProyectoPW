import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import AlertDialog from '../AlertDialog/AlertDialog';
import libroApi from '../../../api/libro'

function FormModificarRecurso(props) {

    
    const [alertDialog, setAlertDialog] = useState(false);
    const [libro, setLibro] = useState({})

    useEffect(() => {
        libroApi.findOne(props.id)
            .then(promise => {
                setLibro(promise.data)
                console.log(promise.data)
            })
    }, []);

    const handleModificar = (e) => {
        e.preventDefault();

    }

    const handleChange = (field, value) => {
        setLibro({ ...libro, [field]: value });
    }

    const handleAlert = () => {
        setAlertDialog(false);
    }

    return (
        <>
        <form className='text-center' onSubmit={handleModificar}>
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
            <input type='submit' value='Modificar' className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0"></input>
            <AlertDialog title='Modificación Completa' text='El recurso ha sido modificado con éxito.' open={alertDialog} onClose={handleAlert}></AlertDialog>
        </form>
        </>
    );
}

export default FormModificarRecurso;