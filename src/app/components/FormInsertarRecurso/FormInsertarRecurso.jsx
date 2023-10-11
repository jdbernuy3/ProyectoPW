import TextField from '@mui/material/TextField';

function FormInsertarRecurso() {
    return (
        <><div className='text-center'>
            <ul>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="TÍTULO" variant="outlined" />
                </li>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Autor, autores" variant="outlined" />
                </li>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="ISBN" variant="outlined" />
                </li>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Serie, tipo" variant="outlined" />
                </li>
            </ul>
            <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0">Guardar</button>
        </div>
        </>
    )
}

export default FormInsertarRecurso