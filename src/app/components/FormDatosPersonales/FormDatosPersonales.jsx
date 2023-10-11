import TextField from '@mui/material/TextField';

function FormDatosPersonales() {
    return (
        <><div className='text-center'>
            <ul>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Nombres" variant="outlined" />
                </li>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Tipo de Documento" variant="outlined" />
                </li>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Apellidos" variant="outlined" />
                </li>
                <li className='p-4'>
                    <TextField id="outlined-basic" label="Nro de Documento" variant="outlined" />
                </li>
            </ul>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0">
                Button
            </button>
        </div>
        </>
    )
}

export default FormDatosPersonales