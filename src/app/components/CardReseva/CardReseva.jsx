// CardReserva.jsx
import Link from 'next/link';

const CardReserva = ({ id, coverImage, isbn13, vecesReservado, author, width = '220px', height = '460px' }) => {
  return (
    <div
      key={id}
      className="m-4 p-4 border border-gray-300 rounded-lg max-w-xs relative"
      style={{ width: width, backgroundColor: 'white', height: height }}
    >
      <img
        className="object-cover w-full h-40 rounded-lg mb-4"
        src={coverImage}
        style={{ height: '240px', width: '100%' }}
        alt={`Cover for ${isbn13}`}
      />
      <h3 className="text-xg font-semibold">ISBN: {isbn13}</h3>
      <p className="text-gray-700 x">Autor: {author}</p>
      <p className="text-gray-700">Veces reservado: {vecesReservado}</p>
      <div className="absolute bottom-4 left-4 right-4">
        <Link href={`/citas?id=${id}`}>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 w-full rounded-full focus:ring-0">
            Reservar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardReserva;

