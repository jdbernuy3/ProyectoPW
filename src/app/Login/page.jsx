'use client';

import styleL from 'src\app\Login\styleL.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Login = () => {
    Inicio("/Login");
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleClick = () => {

        const data = JSON.parse(window.localStorage.getItem('personas')) //cambio
        let foundusuario = null
        if (data) {
            foundusuario = data.find(
                (item) => item.correo === usuario && item.contrasena === password //cambio
            )
            
            //cambio
            if(foundusuario){
                //Conseguir el dato de nombres
                window.localStorage.setItem('nombreUsuario', foundusuario.nombres);
                //Conseguir el dato de rol
                window.localStorage.setItem('rol', foundusuario.rol);
                window.localStorage.setItem("recargar", "true");
                //window.location.replace("/UsuarioPrincipal")
                router.push('/UsuarioPrincipal')
            }else{
                alert("Correo o contraseña incorrectos");
            }
            //cambio
                
        }else{
            alert("Actualmente no existen cuentas");
        }
    }
    return (
        <div className={styleL.container}>
            <div>
                <h3>Sistema de reserva de libros</h3>
            </div>
        <Form className={styleL.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="text" placeholder="" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Form.Text className="text-muted" >
                    
                        <Link href={"/Registro"}> Registro de nuevo usuario</Link> 
                    
                     
                    
                </Form.Text>
            </Form.Group>
            <div className={styleL.iz}>
            <div className={styleL.spc}>
                <Link href={"/"}>
                <Button variant="primary" type="button" style={{ backgroundColor: '#E8DEF8', color: 'black' }}>
                    Salir
                </Button>
                </Link>
                
                
                <Button variant="primary" type="button" onClick={handleClick} style={{ backgroundColor: '#E8DEF8', color: 'black' }} >
                    Ingresar
                </Button>
                </div>
            </div>
    </Form>
    </div>
    )
}  
