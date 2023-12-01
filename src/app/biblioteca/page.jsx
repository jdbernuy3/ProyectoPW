'use client'
// FormResultados.jsx
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import CardReserva from "../components/CardReseva/CardReseva";
import React, { useEffect, useState } from 'react';

function FormResultados() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ggranda-20232-prograweb-as-api.azurewebsites.net/libro');
        
        if (!response.ok) {
          throw new Error(`Error de red - ${response.status}`);
        }

        const data = await response.json();
        console.log('Data recibida de la API:', data);

        // Actualizar el estado con los libros recibidos de la API
        setLibros(data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    // Llamar a la función fetchData
    fetchData();
  }, []);

  return (
    <>
      <MyAppBar />
      <div className="ml-4 md:ml-20 lg:ml-32 bg-[#f2f2f2] min-h-screen p-4">
        <h2 className="text-3xl font-bold text-left mb-4 ml-12">mensajeBienvenida</h2>
        <div className="flex flex-wrap justify-center">
          {libros.map((book) => (
            <CardReserva
              key={book.id}
              id={book.id}
              coverImage={book.imagenPortadaUrl}
              isbn13={book.isbn13}
              author={book.autor}
              vecesReservado={book.vecesReservado}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FormResultados;
