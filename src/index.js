import { bindActionCreators } from "redux";
import store from "./store";
import {inc, dec, rnd} from "./actions";

const {increment, decrement, random } = bindActionCreators(
  {
    increment: inc,
    decrement: dec,
    random: rnd,
  },
  store.dispatch
)

const counterDisplay = document.getElementById('conter-display'),
      incrementBtn = document.getElementById('increment'),
      decrementBtn = document.getElementById('decrement'),
      randomBtn = document.getElementById('random');

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)
randomBtn.addEventListener('click', random)

store.subscribe(() => {
  counterDisplay.value = store.getState()
})
