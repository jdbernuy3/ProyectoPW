
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import FormHelperText from '@mui/material/FormHelperText';
import SearchIcon from '@mui/icons-material/Search';


function FormInsertarRecursoBusqueda() {
    return (
        <>
        <div className='text-left'>
            <ul>
        <li className='p-4'>
        <TextField
          label="Ingresa la palabra clave"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start" ><SearchIcon /></InputAdornment>,
          }}
          variant="outlined"
        />
                    </li>

                <li className='p-4'>
                <TextField
          label="Tipo de recurso"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start" ><SearchIcon /></InputAdornment>,
          }}
          variant="outlined"
        />
                </li>
             
            </ul>
           
        </div>
        <div className='text-right'>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0" >Limpiar</button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0">Buscar</button>

        </div>
        </>
    )
}

export default FormInsertarRecursoBusqueda



{/*
<FormControl fullWidth  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">icono</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>

        

<FormControl fullWidth  variant="outlined" >
             <FilledInput
            id="filled-adornment-weight"
            startAdornment={<InputAdornment position="start">icono</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            />
            <FormHelperText id="filled-weight-helper-text">Ingrese la palabra clave</FormHelperText>
          </FormControl>

*/}