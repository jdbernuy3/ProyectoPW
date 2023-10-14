'use client';
import Link from "next/link";
import React, { useState } from "react";
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";


function Citas() {
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const [selectedDate, setSelectedDate] = useState("");
    return (
        <>
            <MyAppBar></MyAppBar>
            <div className="container mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-4">Citas</h1>

                {/* Tabla para organizar los elementos */}
                <table className="w-full table-auto border-collapse bg-[#DFD3E8]">
                    <tbody>
                        <tr>
                            {/* Celda para el círculo */}
                            <td className="w-10 h-10 bg-[#CFB4E3] rounded-full text-white text-center">
                                <span></span>
                            </td>

                            {/* Celda para el nombre del libro */}
                            <td className="px-4">Psychology of Computer Programming</td>

                            {/* Celda para el rectángulo "Disponible" */}
                            <td className="px-4">
                                <div className="bg-purple-200 rounded p-2 mr-2 rounded-lg  font-bold" style={{width:"100px",marginRight:"-100px"}}>Disponible</div>
                            </td>
                        </tr>

                        <tr>
    {/* Celda para la imagen y la descripción del libro */}
    <td className="py-4" colSpan="3">
        <div className="flex items-start">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4EXS8OIYa2m5wvFIhzth59Qp7T-uHCihyg&usqp=CAU" alt="Descripción del libro" className="w-48 h-48 object-cover mr-4" />
            <div>
                <p className="mb-4">
                    El libro "The Psychology of Money" explora la compleja relación entre las personas y el dinero. Housel analiza cómo nuestras emociones, comportamientos y percepciones afectan nuestras decisiones financieras. Argumenta que el éxito financiero no se trata solo de matemáticas, sino también de psicología. El autor presenta diversas historias y ejemplos para ilustrar cómo las personas piensan sobre el dinero y cómo esos pensamientos influyen en sus vidas financieras. A través de anécdotas y estudios de casos, el libro ofrece lecciones valiosas sobre la gestión del dinero y la importancia de la perspectiva a largo plazo en las decisiones financieras.
                </p>
                {/* Celda para la editorial */}
                <div className="text-gray-600 font-light">Editorial: Nombre de la Editorial</div>
            </div>
        </div>
    </td>
</tr>


                        <tr>
                            {/* Celda para los tópicos del libro */}
                            <td className="py-4" colSpan="3">
                                <h3 className="text-gray-600 font-light ml-20 mb-2">Tópicos del libro:</h3>
                                <div className="flex flex-row ml-20">
                                    <div className="rounded p-2 mr-2 rounded-lg border-solid border-2 border-gray-400 font-bold">Ingeniería de Software</div>
                                    <div className="rounded p-2 rounded-lg border-solid border-2 border-gray-400 font-bold">Programación Web</div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            {/* Celda para el selector de fecha */}
                            <td className="py-4" colSpan="3">
                                <div className="relative max-w-sm ml-20">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-purple-500 dark:text-purple-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="date"
                                        
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                                        placeholder="Selecciona una fecha"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            {/* Celda para el botón "Reservar" */}
                            <td className="py-4 text-center" colSpan="3">
                                
                                    <input
                                        onClick={showModal}
                                        type="button"
                                        value="Reservar"
                                        className="bg-[#7026A7] hover:bg-[#DD96F1] text-white py-2 px-4 rounded-full focus:ring-0"
                                    />
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/*Creación del modal*/}
            {isModalVisible && (
                    <div id="staticModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                        <div className="relative w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Reserva Completada
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={hideModal}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    La reserva del recurso se ha realizado con éxito. Este debe ser devuelto hasta el día {selectedDate}.
                                </p>
                                <div className="flex justify-center">
                                <Link href="/FormResultados">
                                    <button onClick={hideModal} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Ok
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
}

export default Citas;

