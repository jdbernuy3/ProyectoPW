const CardBusqueda = ({ id, imagenPortadaUrl, title, ISBN,author, width = '220px' }) => {
    return (
      <div
        key={id}
        className="m-4 p-4 border border-gray-300 rounded-lg max-w-xs"
        style={{ width: width, backgroundColor: 'white' }}
        
      >
        <h3 className="text-xg font-semibold">{title}</h3>

        <img
          className="object-cover w-full h-40 rounded-lg mb-4"
          src={imagenPortadaUrl}
          alt={title}
          style={{ height: '240px', width:'180px' }}
        />
        <p className="text-gray-700">{ISBN}</p>
        <p className="text-gray-700">{author}</p>

      </div>
    );
  };
export default CardBusqueda