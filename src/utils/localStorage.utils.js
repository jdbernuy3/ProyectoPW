// CREAR FUNCION PARA ALMACENAR DATOS DE LA SESIÓN.
// Almacenar información de usuario en localStorage
export const guardarInformacionUsuario = (id,correo, contrasena, nombre, apellidos, fotoUrl, idTipoUsuario, idTipoDoc, nroDoc, idioma, prefijo, color) => {
  const usuario = { id,correo, contrasena, nombre, apellidos, fotoUrl, idTipoUsuario, idTipoDoc, nroDoc, idioma, prefijo, color };
  localStorage.setItem('users', JSON.stringify(usuario));
};

// Obtener información de usuario desde localStorage
export const obtenerInformacionUsuario = () => {
  const usuarioAlmacenado = localStorage.getItem('users');
  return usuarioAlmacenado ? JSON.parse(usuarioAlmacenado) : null;
};

// Eliminar información de usuario de localStorage
export const eliminarInformacionUsuario = () => {
  localStorage.removeItem('users');
};
