import React from 'react';
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import { dataInicial } from './data';

function ver_todo() {
    const mensajeBienvenida = "Bienvenido"; // Puedes cambiar el mensaje según tus necesidades

    return (
        <>
            <section style={{ backgroundColor: "#DFCCE3" }}>
                <MyAppBar />
                <div style={{ marginLeft: "180px", backgroundColor: "#f2f2f2", minHeight: "100vh", padding: "20px", backgroundColor: "#DFCCE3" }}>
                    <h2 className="text-3xl font-bold text-left" style={{ marginBottom: "10px" }}>{mensajeBienvenida}</h2>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {dataInicial.map((reserva) => (
                            <div key={reserva.id} className="m-4 p-4 border border-gray-300 rounded-lg max-w-xs" style={{ width: "500px", height: "470px", backgroundColor: "white" }}>
                                <img className="object-cover w-full h-40 rounded-lg mb-4" src={reserva.imagenPortadaURL} alt={reserva.titulo} style={{ height: "350px" }} />
                                <h3 className="text-xl font-semibold">{reserva.titulo}</h3>
                                <p className="text-gray-700">Fecha de Reserva: {reserva.fechaReserva}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ver_todo;
