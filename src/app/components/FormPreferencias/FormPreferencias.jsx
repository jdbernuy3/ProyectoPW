import TextField from '@mui/material/TextField';

function FormPreferencias() {
    return (
        <><div className='text-center'>
            <ul>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Idioma" variant="outlined" />
                </li>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Prefijo" variant="outlined" />
                </li>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Color" variant="outlined" />
                </li>
            </ul>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0">
                Guardar
            </button>
        </div>
        </>
    )
}

export default FormPreferencias