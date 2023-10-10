'use client';
import Sidebar from "@/Componentes/BarraLateral/Sidebar";
import BannerSupVacio from "@/Componentes/BannerSupVacio/BannerSupVacio";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const PerfilAdmin = () => {

    return (
        <>
            <BannerSupVacio></BannerSupVacio>
            <Sidebar></Sidebar>
            <h2>Hola, </h2>
            <div> 
            <Form>
            <Form.Group className="mb-3" controlId="nombres">
                <Form.Label>Nombres</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="TipoDoc">
                <Form.Label>Tipo Documento</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Apellidos">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nroDoc">
                <Form.Label>Nro de Documento</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Correo</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Contra">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="idioma">
                <Form.Label>Idioma</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Prefijo">
                <Form.Label>Prefijo</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Color">
                <Form.Label>Color</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>



            </Form>
            <div class="boton" >
                <Button className="boton">Guardar</Button>
            </div>
        </div>        
        </>
    )
} 

export default PerfilAdmin