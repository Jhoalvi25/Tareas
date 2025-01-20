const usuarioYPassword = 'pepito2017,12345';
const nombreDeUsuario = usuarioYPassword.substr(0, 10);
const password = usuarioYPassword.substr(11);
console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);
