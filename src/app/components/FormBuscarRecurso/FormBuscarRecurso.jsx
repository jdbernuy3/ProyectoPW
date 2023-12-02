import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import libroApi from '../../../api/libro';
import Button from '@mui/material/Button';
import CardBusqueda from '../CardBusqueda/CardBusqueda';

function FormBuscarRecurso() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allLibros, setAllLibros] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    libroApi.findAll()
      .then((results) => {
        setAllLibros(results.data);
      })
      .catch((error) => {
        console.error('Error al traer todos los libros:', error);
      });
  }, []);

  const handleBuscar = () => {
    const filteredLibros = allLibros.filter((libro) =>
      libro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredLibros);
    setShowResults(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBuscar();
  };

  return (
    <>
      <form className='text-center' onSubmit={handleSubmit}>
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleBuscar}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:ring-0"
        >
          Buscar
        </Button>
      </form>

      {showResults ? (
        <div className='mt-4'>
          {searchResults.map((result) => (
            <CardBusqueda 
            key={result.id}
            id={result.id}
            titulo={result.titulo} 
            imagen={result.imagenPortadaUrl}
            ISBN = {result.ISBN}  
            >
            </CardBusqueda> 
          ))}
        </div>
      ) : (
        <p>No hay resultados de búsqueda.</p>
      )}
    </>
  );
}

export default FormBuscarRecurso;

/*
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import libroApi from '../../../api/libro';
import cardBusqueda from '../cardBusqueda/cardBusqueda';
import busquedaResultados from '@/app/busqueda/page';

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
          <cardBusqueda 
          key={result.id}
          id={result.id}
          titulo={result.titulo} 
          imagen={result.imagenPortadaUrl}
          ISBN = {result.ISBN}  
          >
          </cardBusqueda>
        ))}
      </div>
    </>
  );
}


export default FormBuscarRecurso;

*/