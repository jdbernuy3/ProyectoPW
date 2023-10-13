import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function FormPreferencias() {
  const [formData, setFormData] = useState({
    idioma: '',
    prefijo: '', 
    color: '',  
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
                label="Idioma"
                variant="outlined"
                type="text"
                id="idioma"
                name="idioma"
                value={formData.idioma}
                onChange={handleChange}
              />
            </li>
            <li className='p-4'>
              <TextField
                label="Prefijo"
                variant="outlined"
                type="text"
                id="prefijo"
                name="prefijo"
                value={formData.prefijo}
                onChange={handleChange} 
              />
            </li>
            <li className='p-4'>
              <TextField
                label="Color"
                variant="outlined"
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange} 
              />
            </li>
          </ul>
          <input type='submit' value='Guardar' className="bg-white hover-bg-purple-700 text-gray font-bold py-2 px-4 rounded-full focus-ring-0" />
        </div>
      </form>
    </>
  );
}

export default FormPreferencias;
