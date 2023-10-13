import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function FormCuenta() {
  const [formData, setFormData] = useState({
    correo: '',
    contraseña: ''
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
                label="Correo"
                variant="outlined"
                type="text"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
              />
            </li>
            <li className='p-4'>
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                id="contraseña"
                name="contraseña"
                value={formData.contraseña}
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

export default FormCuenta;
