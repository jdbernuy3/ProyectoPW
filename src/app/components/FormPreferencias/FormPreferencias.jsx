import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function FormPreferencias({ preferencias, setPreferencias }) {
  const [formPref, setFormPref] = useState({
    idioma: preferencias.idioma || '',
    prefijo: preferencias.prefijo || '', 
    color: preferencias.color || ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormPref({ ...formPref, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userFromStorage = JSON.parse(localStorage.getItem('user')) || {};

    console.log('Datos antiguos:', preferencias);
    console.log('Nuevos Datos:', formPref);

    setPreferencias(formPref);
   
    userFromStorage.idioma = formPref.idioma || userFromStorage.idioma;
    userFromStorage.prefijo = formPref.prefijo || userFromStorage.prefijo;
    userFromStorage.color = formPref.color || userFromStorage.color;
  
    localStorage.setItem('user', JSON.stringify(userFromStorage));

    await usuarioApi.update(userFromStorage); 

    // MANDAR A BD
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
                value={formPref.idioma}
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
                value={formPref.prefijo}
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
                value={formPref.color}
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
