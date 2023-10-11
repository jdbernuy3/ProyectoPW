'use client'
import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F3EDF7',
            contrastText: '#49454F',
        },
    },
});

export default function MyAppBar(props) {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={showSidebar}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                                {props.text}
                            </Typography>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
            <div className={`top-18 left-0 w-24vw bg-[#D9D9D9] py-5 px-2 text-white fixed h-full z-40 ease-in-out duration-300 ${sidebar ? "translate-x-0" : "-translate-x-full"
                }`}>
                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="/ini
                        cio" class="flex items-center p-2 text-[#6750A4] rounded-lg hover:bg-gray-100 px-10">Inicio</a>
                    </li>
                    <li>
                        <a href="/perfil/admin" class="flex items-center p-2 text-[#6750A4] rounded-lg hover:bg-gray-100 px-10">Perfil</a>
                    </li>
                    <li>
                        <a href="/biblioteca" class="flex items-center p-2 text-[#6750A4] rounded-lg hover:bg-gray-100 px-10">Bibliotecas</a>
                    </li>
                    <li>
                        <a href="/busqueda" class="flex items-center p-2 text-[#6750A4] rounded-lg hover:bg-gray-100 px-10">Busqueda</a>
                    </li>
                </ul>
                <p className="text-black bottom-20 absolute">Biblio v1.0.1-alpha</p>
            </div>
        </>
    );
}


// {sidebar ? 'nav-menu active' : 'nav-menu'}