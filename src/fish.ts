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

export function getRandomFish(): Fish | null {
    const distribution = fishes.map((fish, index) => {
        const distributedIndex = [
            ...Array<number | null>(fish.probablity).fill(index)
        ]
        return distributedIndex
    })

    const flatDistribution = distribution.flat()

    const missedProbability = distribution.length
    flatDistribution.push(...Array<number | null>(missedProbability).fill(null))

    const fishIndex = flatDistribution[Math.floor(Math.random() * flatDistribution.length)]

    if(fishIndex != null)
        return fishes[fishIndex]

    return null
}

export function add(fish: Fish) {
    fish.amount++
    update()
}

function update() {
    for(const fish of fishes) {
        const amount = document.getElementById(`${fish.name}-amount`)!
        amount.textContent = `${fish.icon} ${fish.amount}`
    }
}