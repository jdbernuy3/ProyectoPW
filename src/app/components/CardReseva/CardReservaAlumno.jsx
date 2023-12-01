// CardReserva.jsx
import Link from 'next/link';

const CardReservaAlumno = (props) => {
  return (
    <div
      key={props.id}
      className="m-4 p-4 border border-gray-300 rounded-lg max-w-xs relative"
      style={{ width: '320px', backgroundColor: 'white' }}
    >
      <img
        className="object-cover w-full h-40 rounded-lg mb-4"
        src={props.imagenPortadaUrl}
        style={{ height: '340px', width: '100%' }}
        alt={`Cover for ${props.isbn13}`}
      />
      <h3 className="text-xg font-semibold">ISBN: {props.isbn13}</h3>
      <p className="text-gray-700 x">Título: {props.titulo}</p>
      <p className="text-gray-700 x">Autor: {props.autor}</p>
      <p className="text-gray-700">Fecha devolución: {props.fechaDevolucion}</p>
    </div>
  );
};

export default CardReservaAlumno;

