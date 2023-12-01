import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import libroApi from '../../../api/libro'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function FormModificarRecurso(props) {

    
    const [alertDialog, setAlertDialog] = useState(false);
    const [libro, setLibro] = useState({})

    useEffect(() => {
        libroApi.findOne(props.id)
            .then(promise => {
                setLibro(promise.data)
            })
    }, []);

    const handleModificar = (e) => {
        e.preventDefault();
        libroApi.update(libro)
            .then(() => {
                setAlertDialog(true)
            })
    }

    const handleChange = (field, value) => {
        setLibro({ ...libro, [field]: value });
    }

    const handleAlert = () => {
        window.location.replace('/detalleRecurso?id=' + props.id);
        setAlertDialog(false);
    }

    return (
        <>
        <form className='text-center' onSubmit={handleModificar}>
            <div className='flex gap-4'>
                <ul>
                    <li className='p-4'>
                        <TextField
                            label='Título'
                            defaultValue={libro.titulo}
                            color='secondary'
                            variant="outlined"
                            onChange={(e) => handleChange("titulo", e.target.value)}
                            focused
                        ></TextField>
                    </li>
                    <li className='p-4'>
                        <TextField
                            label='Autor, autores'
                            defaultValue={libro.autor}
                            color='secondary'
                            variant="outlined"
                            onChange={(e) => handleChange("autor", e.target.value)}
                            focused
                        ></TextField>
                    </li>
                    <li className='p-4'>
                        <TextField
                            label='ISBN'
                            defaultValue={libro.isbn13}
                            color='secondary'
                            variant="outlined"
                            onChange={(e) => handleChange("ISBN", e.target.value)}
                            focused
                        ></TextField>
                    </li>
                    <li className='p-4'>
                        <TextField
                            label='Serie, tipo'
                            defaultValue={libro.serie}
                            color='secondary'
                            variant="outlined"
                            onChange={(e) => handleChange("serie", e.target.value)}
                            focused
                        ></TextField>
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
            <input type='submit' value='Modificar' className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0"></input>
        </form>
            <Dialog
            open={alertDialog}
            onClose={handleAlert}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
                Modificación Completa
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                El recurso ha sido modificado con éxito.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAlert}>OK</Button>
            </DialogActions>
            </Dialog>
        </>
    );
}

export default FormModificarRecurso;