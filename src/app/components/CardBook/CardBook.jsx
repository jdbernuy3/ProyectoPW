const CardBook = ({ id, coverImage, title, author, width = '220px' }) => {
    return (
      <div
        key={id}
        className="m-4 p-4 border border-gray-300 rounded-lg max-w-xs"
        style={{ width: width, backgroundColor: 'white' }}
      >
        <img
          className="object-cover w-full h-40 rounded-lg mb-4"
          src={coverImage}
          alt={title}
          style={{ height: '240px', width:'180px' }}
        />
        <h3 className="text-xg font-semibold">{title}</h3>
        <p className="text-gray-700">{author}</p>
      </div>
    );
  };
export default CardBook