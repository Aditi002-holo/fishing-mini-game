import { initialize as initializeFish, getRandomFish } from "./fish"

initializeFish()

const btnFish = document.getElementById('btn-fish')!
const message = document.getElementById('caught-message') as HTMLParagraphElement

btnFish.onclick = () => {
    let fish = getRandomFish()
    message.textContent = `You caught: ${fish?.icon ?? 'nothing 😔'}`
}