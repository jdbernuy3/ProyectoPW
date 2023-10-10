import './BarrasNav.css'

const BarraNavAdmin = () =>{
    return (
        <nav>
                <ul>
                        <li>
                            <a href="/ValoresPorDefecto">Valores Por Defecto</a>
                        </li>
                        <li>
                            <a href="/DatosPersonales">Datos Personales</a>
                        </li>
                        <li>
                            <a href="/Cuenta">Cuenta</a>
                        </li>
                </ul>
        </nav>

    )
}



const Navbar = () =>{
    return(
        <div className="navbar">
            <p>Menú</p>
            <h5>Atención de citas</h5>
            <p>Perfil</p>
        </div>
    )
}

export default Navbar;