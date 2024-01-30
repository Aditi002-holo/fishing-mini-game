import { initialize as initializeFish, getRandomFish, add } from "./fish"

initializeFish()

const btnFish = document.getElementById('btn-fish')!
const message = document.getElementById('caught-message') as HTMLParagraphElement

btnFish.onclick = () => {
    let fish = getRandomFish()

    if(fish)
        add(fish)
    
    message.textContent = `You caught: ${fish?.icon ?? 'nothing 😔'}`
}