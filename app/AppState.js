import { Player } from "./Models/Player.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

// class AppState extends EventEmitter {
//   /** @type {import('./Models/Value').Value[]} */
//   values = loadState('values', [Value])
// }




export class AppState extends EventEmitter {
  /** @type {import('./Models/Player.js').Player[]} */
  players = [
    new Player ('Vince',0),
    new Player ('Maggie', 0),

    

]
}











// INGORE ME VVVVVVVVVVVVVV
export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
