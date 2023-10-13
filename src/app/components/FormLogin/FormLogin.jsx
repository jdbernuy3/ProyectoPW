
const Login = (link) => {
    if (link === "/Login" || link === "/Registro") { // Solo para las páginas de Login y Registro
      // Reiniciar localStorage
      window.localStorage.setItem('nombreUsuario', "");
      window.localStorage.setItem('rol', "");
    }
  };
  
  export default Login;
  