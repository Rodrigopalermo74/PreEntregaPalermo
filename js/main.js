const cancionesAdivinanza = [
  "Lauren - Oden & Fatzo",
  "Repoid - Anotr",
  "Teelling The Thruth - Chris Stussy",
  "Focus - Mateo Dufour",
  "Palermo - Sidney Charles",
  "Bitter Sweet - Project89",
  "Dreams - Prunk",
  "Im Losing it - Fisher",
];
const cancionesUtilizadas = [];
function jugarJuego() {

  let puntaje = 0; 
  let intentos = 5;
  let pistasUsadas = 0;
  let cancionActual = "";

  alert("¡Bienvenido al juego de adivinanza de música electrónica! Podras llegar a los 80 puntos?");
  alert(`Tienes 5 intentos para adivinar el nombre de la canción.`);

  while (intentos > 0) {
    if (!cancionActual || cancionesUtilizadas.length === cancionesAdivinanza.length) {
      if (cancionesUtilizadas.length === cancionesAdivinanza.length) {
        cancionesUtilizadas.length = 0;
      }
      cancionActual = seleccionarCancionAleatoria(cancionesAdivinanza, cancionesUtilizadas);
    }

    const partesCancion = cancionActual.split(" - ");
    const nombreCancion = partesCancion[0];
    const artista = partesCancion[1];

    const respuesta = prompt(`Adivina el nombre de la canción (Te quedan ${intentos} intentos):\nArtista: ${artista}`);

    if (respuesta === null) {
      alert("¡Has cancelado el juego!");
      return;
    }

    if (respuesta.toLowerCase() === nombreCancion.toLowerCase()) {
      alert(`¡Correcto! La canción es "${nombreCancion}" por ${artista}. ¡Ganaste!`);
      puntaje += 10;
      mostrarPuntuacion(puntaje);
      intentos = 5; 
      pistasUsadas = 0; 
      cancionActual = ""; 
    } else {
      intentos--;
      if (intentos > 0) {
        alert("Respuesta incorrecta. Sigue intentando.");
        if (pistasUsadas === 0) {
          console.log(`Pista ${6 - intentos}: El género de la canción es "minimal house".`);
          pistasUsadas++;
        } else if (pistasUsadas === 1) {
          console.log(`Pista ${6 - intentos}: La primera letra del nombre de la canción es "${nombreCancion.charAt(0)}".`);
          pistasUsadas++;
        } else {
          console.log(`Pista ${6 - intentos}: La canción fue lanzada en el año 2022.`);
          pistasUsadas++;
        }
      } else {
        alert(`¡Agotaste tus intentos! La canción era "${nombreCancion}" por ${artista}. ¡Perdiste!`);
        mostrarPuntuacion(puntaje);
        return;
      }
    }
  }
  function mostrarPuntuacion(puntaje) {
    console.log(`Tu puntuación actual es: ${puntaje} puntos.`);
  }
}

function seleccionarCancionAleatoria(canciones, utilizadas) {
  let indiceAleatorio;
  do {
    indiceAleatorio = Math.floor(Math.random() * canciones.length);
  } while (utilizadas.includes(indiceAleatorio));
  utilizadas.push(indiceAleatorio);
  return canciones[indiceAleatorio];
}

window.onload = jugarJuego;
