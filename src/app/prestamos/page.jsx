'use client';
import FormDatosPersonales from "@/app/components/FormDatosPersonales/FormDatosPersonales";
import MyAppBar from "@/app/components/MyAppBar/MyAppBar";
import MyTabPanel from "@/app/components/MyTabPanel/MyTabPanel";
import FormCuenta from "@/app/components/FormCuenta/FormCuenta";
import Avatar from "@mui/material/Avatar";
import styles from "./forms.css";
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CategoryIcon from '@mui/icons-material/Category';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import dataInicial from "@/data//data.js";
import Typography from '@mui/material/Typography';
import users from "@/data//users";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'F3EDF7' ? '#F3EDF7' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function FullWidthGrid() {
  
  const [usuario, setUsuario] = useState(null);

  const [libros, setLibros] = useState([]);

  async function cargarDatos() {
    const usuario = await getUsuario();
  
    if (usuario === null || usuario === undefined) {
     
    } else {
      
      setUsuario(usuario);
    }
  
    const libros = await getLibros();
  
    setLibros(libros);
  }

  useEffect(() => {
    cargarDatos();
  }, []);
    
  return (
    <>
    <MyAppBar text='Administración de bibliotecas'></MyAppBar>
    <div className="bg-white h-100v w-100v pl-52 pr-8">
    <h1 className="pt-10 text-4xl">Bienvenido ,{usuario?.nombre}</h1>
    <hr className="my-8 h-0.5 border-t-0 bg-[#CAC4D0] opacity-100" />   
    <Container fixed  class="container-left">
      <Box sx={{ flexGrow: 2, bgcolor:'#efe4f6' }}>
        <Grid container spacing={2}>
          <div class="completo"  >
            <div class="ultimas">
              <h2 >Últimas Reservas</h2>
            </div>
            <div class="containers">
            {(libros??[]).map((libro) => (  
              <Grid class="itm">
                <ButtonBase key={libro.id}>
                  <Paper
                    sx={{
                      p: 1,
                      margin: 'auto',
                      maxWidth: 400,
                      flexGrow: 1,
                      borderRadius:4,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'F3EDF7' ? '#F3EDF7' : '#F3EDF7',
                    }}
                  >
                    <Grid container spacing={2} >
                    
                      <Grid item xs={12} sm container sx={{borderRightColor:'gray'} }>
                      
                      <Grid paddingTop={3}>
                      
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
                      
                      </Grid>
                        <Grid  item xs container direction="column" spacing={2} alignItems="flex-start" width={"100%"}>
                          <Grid item xs  >
                            <Typography  gutterBottom variant="subtitle1" component="div">
                            {libro.titulo}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {libro.fechaReserva}
                            </Typography>
                            
                          </Grid>
                          
                        </Grid>
                        
                        <Grid item sx={{  bgcolor:'gray'}}  >
                        
                        <CategoryIcon sx={{fontSize:60 }} />
                        
                        </Grid>
                      
                      </Grid>
                    </Grid>
                    </Paper>
                  </ButtonBase>

                  <ButtonBase class="contenedor2">
                    <Paper
                      sx={{
                        p: 1,
                        margin: 'auto',
                        maxWidth: 400,
                        flexGrow: 1,
                        borderRadius:4,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'F3EDF7' ? '#F3EDF7' : '#F3EDF7',
                      }}
                    >
                      <Grid container spacing={2} >
                      
                        <Grid item xs={12} sm container sx={{borderRightColor:'gray'} }>
                        
                        <Grid paddingTop={3}>
                        
                          <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
                        
                        </Grid>
                          <Grid  item xs container direction="column" spacing={2} alignItems="flex-start" width={"100%"}>
                            <Grid item xs  >
                              <Typography  gutterBottom variant="subtitle1" component="div">
                              {libro.titulo}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              {libro.fechaReserva}
                              </Typography>
                              
                            </Grid>
                            
                          </Grid>
                          
                          <Grid item sx={{  bgcolor:'gray'}}  >
                          
                          <CategoryIcon sx={{fontSize:60 }} />
                          
                          </Grid>
                        
                        </Grid>
                      </Grid>
                      </Paper>
                  </ButtonBase>
                </Grid>))}</div>
                <Grid item class="ver">
                      <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        VER TODO
                        </Typography>
                    </Grid>
              
            </div>
        </Grid>
      </Box>

          
    <div class="contenedor3">
    <Box sx={{ flexGrow: 2, bgcolor:'#efe4f6'}}>
      
      <Grid container spacing={2}>
      <div class="completo"  >
      <div class="ultimas">
        <h2 >Los más pedidos</h2>
      </div>
      <div class="containers">
      {(libros??[]).map((libro) => (
        <Grid>
    <ButtonBase key={libro.id}>
      <Paper
        sx={{
          p: 1,
          margin: 'auto',
          maxWidth: 400,
          flexGrow: 1,
          borderRadius:4,
          backgroundColor: (theme) =>
            theme.palette.mode === 'F3EDF7' ? '#F3EDF7' : '#F3EDF7',
        }}
      >
        <Grid container spacing={2} >
          
            <Grid item xs={12} sm container sx={{borderRightColor:'gray'} }>
            
            <Grid paddingTop={3}>
            
              <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
            
            </Grid>
              <Grid  item xs container direction="column" spacing={2} alignItems="flex-start" width={"100%"}>
                <Grid item xs  >
                  <Typography  gutterBottom variant="subtitle1" component="div">
                  {libro.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {libro.fechaReserva}
                  </Typography>
                  
                </Grid>
                
              </Grid>
              
              <Grid item sx={{  bgcolor:'gray'}}  >
              
              <CategoryIcon sx={{fontSize:60 }} />
              
              </Grid>
            
            </Grid>
          </Grid>
          </Paper>
        </ButtonBase>

        <ButtonBase class="contenedor-2">
        <Paper
          sx={{
            p: 1,
            margin: 'auto',
            maxWidth: 400,
            flexGrow: 1,
            borderRadius:4,
            backgroundColor: (theme) =>
              theme.palette.mode === 'F3EDF7' ? '#F3EDF7' : '#F3EDF7',
          }}
        >
          <Grid container spacing={2} >
          
            <Grid item xs={12} sm container sx={{borderRightColor:'gray'} }>
            
            <Grid paddingTop={3}>
            
              <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
            
            </Grid>
              <Grid  item xs container direction="column" spacing={2} alignItems="flex-start" width={"100%"}>
                <Grid item xs  >
                  <Typography  gutterBottom variant="subtitle1" component="div">
                  {libro.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {libro.fechaReserva}
                  </Typography>
                  
                </Grid>
                
              </Grid>
              
              <Grid item sx={{  bgcolor:'gray'}}  >
              
              <CategoryIcon sx={{fontSize:60 }} />
              
              </Grid>
            
            </Grid>
          </Grid>
          </Paper>
        </ButtonBase>
        </Grid>
      ))}
      </div>
        </div>
      </Grid>
    </Box>
    </div>
    </Container>
    
    
    </div>
    </>
  )};
