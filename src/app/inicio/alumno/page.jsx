'use client'
import React, { useEffect, useState } from 'react';
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import users from "src/data/users";

const booksData = [
    {
      id: 1,
      title: "La sombra del viento",
      author: "Carlos Ruiz Zafón",
      coverImage: "https://images.cdn3.buscalibre.com/fit-in/360x360/97/a9/97a9e0ef37c3b33e9303147883d03372.jpg",
    },
    {
      id: 2,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      coverImage: "https://images.cdn2.buscalibre.com/fit-in/360x360/7b/ea/7bea28bfacf41205d24d1e2c09bd566b.jpg",
    },
    {
      id: 3,
      title: "Sapiens: De animales a dioses",
      author: "Yuval Noah Harari",
      coverImage: "https://images.cdn2.buscalibre.com/fit-in/360x360/b5/1a/b51a9baa4e59e89a3578cb224e1f1d81.jpg",
    },
    {
      id: 4,
      title: "1984",
      author: "George Orwell",
      coverImage: "https://images.cdn2.buscalibre.com/fit-in/360x360/33/f9/33f911d9a7ba713874725a96c341733f.jpg",
    },
    {
      id: 5,
      title: "Matar a un ruiseñor",
      author: "Harper Lee",
      coverImage: "https://bookvivant.com/cdn/shop/products/BOOVI-7856_9780718076375_580x.jpg?v=1656722136",
    }
  
  ];


  function Inicio_Alumno() {
    const [usuario, setUsuario] = useState("");
  
    useEffect(() => {
      // Obtener el último usuario del arreglo `users`
      const lastUser = users[users.length - 1];
      
      // Extraer el nombre y apellido del usuario si existen en el arreglo
      if (lastUser && lastUser.nombre && lastUser.apellido) {
        setUsuario(`${lastUser.nombre} ${lastUser.apellido}`);
      }
    }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente
  
    // Decidir qué mensaje de bienvenida mostrar
    const mensajeBienvenida = usuario
      ? `Bienvenido: ${usuario}`
      : "Bienvenido";
  
    return (
      <>
        <section style={{ backgroundColor: "#DFCCE3" }}>
          <MyAppBar />
          <div style={{ marginLeft: "180px", backgroundColor: "#f2f2f2", minHeight: "100vh", padding: "20px",backgroundColor: "#DFCCE3"  }}>
            <h2 className="text-3xl font-bold text-left" style={{marginBottom:"10px"}}>{mensajeBienvenida}</h2>
            
            <div style={{ display: "flex", justifyContent: "center" }}>
              {booksData.map((book) => (
                <div key={book.id} className="m-4 p-4 border border-gray-300 rounded-lg max-w-xs" style={{ width: "500px", height: "470px",backgroundColor: "white" }}>
                  <img className="object-cover w-full h-40 rounded-lg mb-4" src={book.coverImage} alt={book.title} style={{ height: "350px" }} />
                  <h3 className="text-xl font-semibold">{book.title}</h3>
                  <p className="text-gray-700">{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Inicio_Alumno;
  

