const CardBusqueda = (props) => {
    return (
      <div
        key={props.id}
        className="m-4 p-4 border border-gray-300 rounded-lg max-w-xs"
        style={{ width: '220px', backgroundColor: 'white' }}
        
      >
        <h3 className="text-xg font-semibold">{props.title}</h3>

        <img
          className="object-cover w-full h-40 rounded-lg mb-4"
          src={props.imagen}
          alt={props.title}
          style={{ height: '240px', width:'180px' }}
        />
        <p className="text-gray-700">{props.ISBN}</p>
        <p className="text-gray-700">{props.author}</p>

      </div>
    );
  };
export default CardBusqueda