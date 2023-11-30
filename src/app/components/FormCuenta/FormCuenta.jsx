import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import usuarioApi from '../../../api/usuario'; //update.

function FormCuenta({cuentaData, setCuentaData} ) {
  const [formAccount, setFormAccount] = useState({
    correo: '',
    contraseña: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormAccount({ ...formAccount, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userFromStorage = JSON.parse(localStorage.getItem('user')) || {};

    console.log('Datos antiguos', cuentaData);
    console.log('Nuevos Datos:', formAccount);

    setCuentaData(formAccount);

    userFromStorage.correo = formAccount.correo || userFromStorage.correo;
    userFromStorage.contrasena = formAccount.contraseña || userFromStorage.contrasena;
  
    localStorage.setItem('user', JSON.stringify(userFromStorage));

    await usuarioApi.update(userFromStorage); 
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
                value={formAccount.correo}
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
                value={formAccount.contraseña}
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
