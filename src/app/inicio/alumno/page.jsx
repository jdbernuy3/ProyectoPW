'use client'
import React, { useEffect, useState } from 'react';
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import users from "src/data/users";
import SimpleCard from "@/app/components/SimpleCard/SimpleCard"
import CardBook from '@/app/components/CardBook/CardBook';

  function Inicio_Alumno() {
    //const [usuario, setUsuario] = useState("");
    const [libros, setLibros] = useState([]);
  
    // useEffect(() => {
    //   // Obtener el último usuario del arreglo `users`
    //   const lastUser = users[users.length - 1];
      
    //   // Extraer el nombre y apellido del usuario si existen en el arreglo
    //   if (lastUser && lastUser.nombre && lastUser.apellido) {
    //     setUsuario(`${lastUser.nombre} ${lastUser.apellido}`);
    //   }
    // }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente
    
    // Hacer la solicitud a la API usando fetch
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

    // Decidir qué mensaje de bienvenida mostrar
    // const mensajeBienvenida = usuario
    //   ? `Bienvenido: ${usuario}`
    //   : "Bienvenido";
  
    return (
      <>
        <section className="bg-[#DFCCE3]">
          <MyAppBar />
          <div className="ml-4 md:ml-20 lg:ml-32 bg-[#f2f2f2] min-h-screen p-4">
            <h2 className="text-3xl font-bold text-left mb-4 ml-12">mensajeBienvenida</h2>
            <div className="flex flex-wrap justify-center">
              {libros.map((book) => (
                <CardBook
                  key={book.id}
                  id={book.id}
                  coverImage={book.imagenPortadaUrl}
                  title={book.titulo}
                  author={book.autor}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Inicio_Alumno;
  

