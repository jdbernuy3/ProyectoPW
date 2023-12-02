import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import libroApi from '../../../api/libro';
import Button from '@mui/material/Button';

function FormBuscarRecurso() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allLibros, setAllLibros] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    libroApi.findAll()
      .then((results) => {
        setAllLibros(results.data);
      })
      .catch((error) => {
        console.error('Error al traer todos los libros:', error);
      });
  }, []);

  const handleBuscar = (e) => {
    e.preventDefault();

    const filteredLibros = allLibros.filter((libro) =>
      libro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredLibros);
  };

  return (
    <>
      <form className='text-center' onSubmit={handleBuscar}>
        <div className='p-4'>
          <TextField
            label='Buscar Recurso'
            value={searchTerm}
            color='secondary'
            variant="outlined"
            onChange={(e) => setSearchTerm(e.target.value)}
            focused
          ></TextField>
        </div>
        <input type='submit' value='Buscar' className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0"></input>
      </form>
 
      <div className='mt-4'>
        {searchResults.map((result) => (
          <div key={result.id}>
            <p>{result.titulo}</p>
            <p>{result.imagenPortadaUrl}</p>
            <p>{result.autor}</p>
            <p>{result.ISBN}</p>
            <p>{result.serie}</p>
        
          </div>
        ))}
      </div>
    </>
  );
}




export default FormBuscarRecurso;