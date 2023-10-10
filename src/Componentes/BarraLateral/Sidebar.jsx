import '../BarraLateral/sidebarStyle.css'

const Sidebar = () =>{
    return(
        <> 
        <div className="barraLat">
            <ul>
                <li><a href="/principal">Principal</a></li>
                <br></br>
                <li><a href="/perfil">Perfil</a></li>
                <br></br>
                <li><a href="/horarios">Horarios</a></li>
            </ul>
            <p className='Bottom'>Biblio v1.0.1-alpha</p>
        </div>
        
        </>
        
    )
}

export default Sidebar;