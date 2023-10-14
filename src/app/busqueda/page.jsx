'use client';
import FormDatosPersonales from "@/app/components/FormDatosPersonales/FormDatosPersonales";
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import MyTabPanel from "@/app/components/MyTabPanel/MyTabPanel";
import FormCuenta from "@/app/components/FormCuenta/FormCuenta";
import FormPreferencias from "@/app/components/FormPreferencias/FormPreferencias";
import FormInsertarRecurso from "../components/FormInsertarRecurso/FormInsertarRecurso"
import InsertarRecurso from "../components/FormInsertarRecursoBusqueda/FormInsertarRecursoBusqueda";
import FormInsertarRecursoBusqueda from "../components/FormInsertarRecursoBusqueda/FormInsertarRecursoBusqueda";
import React, { useState } from 'react';



    const busquedaAdm = () => {

        const tabs = [
            {
                id: 0,
                contenido:<FormInsertarRecursoBusqueda></FormInsertarRecursoBusqueda>
            },
        ]
    
        return (
            <>
                <MyAppBar></MyAppBar>
                <div className="bg-white h-100v w-100v pl-52 pr-8">
                    <h1 className="pt-10 text-4xl">Busqueda</h1>
                    <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
                    <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">

                        <MyTabPanel tabs={tabs}></MyTabPanel>
                    </div>
                </div>
            </>
        )
    } 
    

export default busquedaAdm

/*
const busquedaAdm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]); 

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Realiza la búsqueda en los datos almacenados en `items`
    const results = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Resultados de la búsqueda:', results);
  };

 

  return (
    <>
      <MyAppBar />
      <div className="bg-white h-100v w-100v pl-52 pr-8">
        <h1 className="pt-10 text-4xl">Busqueda</h1>
        <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />
        <div className="h-100v w-100v bg-[#F3EDF7] flex p-10 space-x-2">
          <div>
            <input
              type="text"
              placeholder="Buscar elementos"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>
          { <FormInsertarRecursoBusqueda onAddItem={handleAddItem} /> }
        </div>
      </div>
    </>
  );
};

*/
