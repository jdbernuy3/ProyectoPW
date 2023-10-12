import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FormDatosPersonales() {
  const [formData, setFormData] = useState({
    nombre: '',
    tdoc: '', // Inicializamos tdoc en un valor vacío
    apellido: '',
    nroDoc: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'tdoc') {
      setFormData({ ...formData, tdoc: value }); // Actualizamos tdoc
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí puedes enviar los datos a través de una solicitud o realizar cualquier otra acción que necesites.
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='text-center'>
          <ul>
            <li className='p-4'>
              <TextField
                label="Nombre"
                variant="outlined"
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </li>
            <li className='p-4'>
              <FormControl sx={{ minWidth: 220 }}>
                <InputLabel id="demo-simple-select-label">Tipo de Documento</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="tdoc"
                  name="tdoc"
                  value={formData.tdoc}
                  label="Tipo de Documento"
                  variant="outlined"
                  onChange={handleChange}
                >
                  <MenuItem value="DNI">DNI</MenuItem>
                  <MenuItem value="Pasaporte">Pasaporte</MenuItem>
                </Select>
              </FormControl>
            </li>
            <li className='p-4'>
              <TextField
                label="Apellido"
                variant="outlined"
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
              />
            </li>
            <li className='p-4'>
              <TextField
                label="Nro. Documento"
                variant="outlined"
                type="text"
                id="nroDoc"
                name="nroDoc"
                value={formData.nroDoc}
                onChange={handleChange}
              />
            </li>
          </ul>
          <input type='submit' value='Guardar' className="bg-purple-500 hover-bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus-ring-0" />
        </div>
      </form>
    </>
  );
}

export default FormDatosPersonales;
