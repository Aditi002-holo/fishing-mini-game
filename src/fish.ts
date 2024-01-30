type Fish = {
    name: string,
    icon: string,
    amount: number,
    value: number,
    probablity: number
}

const fishes: Fish[] = [
    {name: 'boot', icon: '🥾', amount: 0, value: 1, probablity: 4},
    {name: 'fish', icon: '🐟', amount: 0, value: 5, probablity: 4},
    {name: 'tropical', icon: '🐠', amount: 0, value: 10, probablity: 2}
]

export function initialize() {
    const fishesSection = document.getElementById('fish')

    for(const fish of fishes) {
        const container = document.createElement('div')
        container.className = 'fish-item'

        const amount = document.createElement('span')
        amount.id = `${fish.name}-amount`
        amount.textContent = `${fish.icon} ${fish.amount}`

        const price = document.createElement('span')
        price.textContent = `x $${fish.value}`

        container.appendChild(amount)
        container.appendChild(price)

        fishesSection?.appendChild(container)
    }

    const sellAllBtn = document.createElement('button')
    sellAllBtn.textContent = 'Sell All'
    fishesSection?.appendChild(sellAllBtn)
}