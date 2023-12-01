import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import usuarioApi from '../../../api/usuario'; //update.

function FormDatosPersonales({userData, setUserData}) {
  const [formData, setFormData] = useState({
    nombre: userData.nombre || '',
    tdoc: '',
    apellido: userData.apellido || '',
    nroDoc: userData.nroDoc || '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const userFromStorage = JSON.parse(localStorage.getItem('user')) || {};

    console.log('Datos Antiguos:', userData);
    console.log('Nuevos Datos:', formData);
    setUserData(formData);

    userFromStorage.nombres = formData.nombre || userFromStorage.nombre;
    userFromStorage.idTipoDoc = formData.tdoc || userFromStorage.tdoc;
    userFromStorage.apellidos = formData.apellido || userFromStorage.apellido;
    userFromStorage.nroDoc = formData.nroDoc || userFromStorage.nroDoc;

    localStorage.setItem('user', JSON.stringify(userFromStorage)); //actualziado en local Storage, falta mandar a BD.

    await usuarioApi.update(userFromStorage); 
    
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
                defaultValue={formData.nombre} //cambiar a userfromStorage.
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
                  label="Tipo de Documento"
                  variant="outlined"
                  onChange={handleChange}
                >
                  <MenuItem value="1">DNI</MenuItem>
                  <MenuItem value="2">Pasaporte</MenuItem>
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
                defaultValue={formData.apellido} //cambiar a userfromStorage.
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
                defaultValue={formData.nroDoc} //cambiar a userfromStorage.
                value={formData.nroDoc}
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

export default FormDatosPersonales;
