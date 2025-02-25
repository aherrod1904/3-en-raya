import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

class Marcador {
  #elementId;
  #jugadores = [
    {
      name: 'X',
      puntos: 0,
    },

    {
      name: 'O',
      puntos: 0,
    }
  ]

  constructor(elementId='marcador') {
    this.#elementId = elementId;
    this.imprimir();
  }

  addPuntos(name) {
    let jugador = this.#jugadores.find(j => j.name === name);
    jugador.puntos++;
    this.imprimir();
  }


  imprimir() {
    let marcadorFrontend = document.getElementById(this.#elementId);
    let ul = document.createElement('ul');
    this.#jugadores.forEach(jugador => {
      let li = document.createElement('li');
      li.textContent = `Jugador ${jugador.name} tiene ${jugador.puntos} puntos`;
      ul.append(li);
    });
    marcadorFrontend.innerHTML = '';
    marcadorFrontend.append(ul);
  }

  ganadorFin(){
    if (this.#jugadores[0].puntos > this.#jugadores[1].puntos){
      return String('el jugador X ha ganado');
    }else if (this.#jugadores[1].puntos > this.#jugadores[0].puntos){
      return String('el jugador O ha ganado');
    }else{
      return String('ha sido un empate de puntos')
    }
  }
}

export default Marcador;
