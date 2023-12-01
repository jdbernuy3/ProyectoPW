// CREAR FUNCION PARA ALMACENAR DATOS DE LA SESIÓN.
// Almacenar información de usuario en localStorage
export const guardarInformacionUsuario = (id,correo, contrasena, nombres, apellidos, fotoUrl, idTipoUsuario, idTipoDoc, nroDoc, idioma, prefijo, color) => {
  const usuario = { id,correo, contrasena, nombres, apellidos, fotoUrl, idTipoUsuario, idTipoDoc, nroDoc, idioma, prefijo, color };
  localStorage.setItem('user', JSON.stringify(usuario));
};

// Obtener información de usuario desde localStorage
export const obtenerInformacionUsuario = () => {
  const usuarioAlmacenado = localStorage.getItem('user');
  return usuarioAlmacenado ? JSON.parse(usuarioAlmacenado) : null;
};

// Eliminar información de usuario de localStorage
export const eliminarInformacionUsuario = () => {
  localStorage.removeItem('user');
};
