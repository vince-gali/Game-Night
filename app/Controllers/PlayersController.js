import { appState } from "../AppState.js";



export class PlayersController{
    constructor(){
        // console.log('is this working', appState.players);
    }

    test(){
        console.log('hello there')
    }

    addPlayer(){
        try{
            window.event.preventDefault()
            const form = window.event.target
            form.removeEventListener()
        } catch (e){
            // console.error('[addPlayer]', error)
            console.log(FormData)
        }
    }
    
}



function drawPlayers() {

    let template = ''
  
    appState.players.forEach(players => {
      template += /*html*/`
      <div>
        ${players.name} - ${players.score}
        <div>
          <button 
            class="btn btn-danger" 
            onclick="app.playersController.b('${player.name}')"
            >B</button>
        </div>
      </div>`
    })
  
    document.getElementById('app').innerHTML = template
  }