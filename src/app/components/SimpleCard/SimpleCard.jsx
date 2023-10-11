import Link from "next/link"

function SimpleCard(props) {
    return (
        <>
            <Link href={{
                pathname: '/detalleRecurso',
                query: {
                    id: props.id,
                }
            }} className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                <img class="w-16 h-16 rounded-full ml-4" src="https://www.ole.com.ar/2019/06/14/y3JXhYxRb_290x290__1.jpg" alt="Avatar of Jonathan Reinink"></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">{props.titulo}</h5>
                    <p className="mb-3 font-normal text-gray-700">{props.fecha}</p>
                </div>
                <img className="object-cover w-full rounded-r-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-r-lg" src="https://img.asmedia.epimg.net/resizer/CaE7_mEOZY44kX0U16HKfdPAfb8=/1472x1104/filters:focal(1344x246:1354x256)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/DETH5T5Z54WCFJ4AH7EV6ACU2A.jpg" alt=""></img>
            </Link>
        </>
    )
}

export default SimpleCard