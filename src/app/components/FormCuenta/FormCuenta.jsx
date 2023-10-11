import TextField from '@mui/material/TextField';

function FormCuenta() {
    return (
        <><div className='text-center'>
            <ul>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Correo" variant="outlined" />
                </li>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
                </li>
            </ul>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0">
                Guardar
            </button>
        </div>
        </>
    )
}

export default FormCuenta