import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import libroApi from '../../../api/libro'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FormInsertarRecurso() {

    const [alertDialog, setAlertDialog] = useState(false);
    const [libro, setLibro] = useState({
        vecesReservado: 0,
        available: true
    });


    const handleAgregar = (e) => {
        e.preventDefault();
        libroApi.create(libro)
            .then(promise => {
                console.log(promise.data)
                setAlertDialog(true)
            })
    }

    const handleChange = (field, value) => {
        setLibro({ ...libro, [field]: value});
    }

    const handleAlert = () => {
        setAlertDialog(false);
        window.location.replace('/inicio/admin');
    }

    return (
        <>
            <form className='text-center' onSubmit={handleAgregar}>
                <div className='flex gap-4'>
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
                                value={libro.isbn13}
                                onChange={(e) => handleChange("isbn13", e.target.value)}
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
                    <ul>
                    <li className='p-4'>
                        <TextField
                            label='Encuadernación'
                            defaultValue={libro.encuadernacion}
                            color='secondary'
                            variant="outlined"
                            onChange={(e) => handleChange("encuadernacion", e.target.value)}
                            focused
                        ></TextField>
                    </li>
                    <li className='p-4'>
                        <TextField
                            label='Imagen de portada'
                            defaultValue={libro.imagenPortadaUrl}
                            color='secondary'
                            variant="outlined"
                            onChange={(e) => handleChange("imagenPortadaUrl", e.target.value)}
                            focused
                        ></TextField>
                    </li>
                    <li className='p-4'>
                        <TextField
                            label='Categorías'
                            defaultValue={libro.categorias}
                            color='secondary'
                            variant="outlined"
                            maxRows={3}
                            onChange={(e) => handleChange("categorias", e.target.value)}
                            focused
                            multiline
                        ></TextField>
                    </li>
                </ul>
                </div>
                <input type='submit' value='Guardar' className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0"></input>
            </form>
            <Dialog
            open={alertDialog}
            onClose={handleAlert}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
            Registro Completo
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                El recurso ha sido grabado con éxito.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAlert}>OK</Button>
            </DialogActions>
            </Dialog>
        </>
    );
}

export default FormInsertarRecurso;