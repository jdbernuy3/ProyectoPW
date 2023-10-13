import Link from "next/link"

function SimpleCard(props) {
    return (
        <>
            <Link href={{
                pathname: '/detalleRecurso',
                query: {
                    id: props.id,
                }
            }} className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:max-h-40 hover:bg-gray-100 overflow-hidden">
                <img class="w-16 h-16 rounded-full ml-4" src='https://elcomercio.pe/resizer/k3JQ9nQAHSY_xqle1DBrrSgYgGI=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7OQEQHOSPZEDVMAAJFQLXCCYQE.jpg' alt="Imagen portada"></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">{props.titulo}</h5>
                    <p className="mb-3 font-normal text-gray-700">{props.fecha}</p>
                </div>
                <img className="object-cover w-full rounded-r-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-r-lg" src={props.imagen != null ? props.imagen : 'https://elcomercio.pe/resizer/k3JQ9nQAHSY_xqle1DBrrSgYgGI=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7OQEQHOSPZEDVMAAJFQLXCCYQE.jpg'} alt=""></img>
            </Link>
        </>
    )
}

export default SimpleCard