import { AppState } from "../AppState.players";
import { saveState } from "../Utils/Store";

function save(){
    saveState('players',AppState.players)
}