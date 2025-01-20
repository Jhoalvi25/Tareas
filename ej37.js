let promedioParaAprobar = 6;
let promedioDelAlumno = 4;

let promedioSuficiente = promedioDelAlumno >= promedioParaAprobar;


let puntosFaltantes = (promedioDelAlumno < promedioParaAprobar) * (promedioParaAprobar - promedioDelAlumno);


console.log("El alumno tiene un promedio mayor o igual que el requerido:", promedioSuficiente);
console.log(`Al alumno le faltaron ${puntosFaltantes} puntos para aprobar`);
