type Fish = {
    name: string,
    icon: string,
    count: number,
    value: number,
    probablity: number
}

const fishes: Fish[] = [
    {name: 'boot', icon: '🥾', count: 0, value: 1, probablity: 4},
    {name: 'fish', icon: '🐟', count: 0, value: 5, probablity: 4},
    {name: 'tropical', icon: '🐠', count: 0, value: 10, probablity: 2}
]

export function initialize() {
    const fishesSection = document.getElementById('fish')

    for(const fish of fishes) {
        const container = document.createElement('div')
        container.className = 'fish-item'

        const count = document.createElement('span')
        count.id = `${fish.name}-count`
        count.textContent = `${fish.icon} ${fish.count}`

        const price = document.createElement('span')
        price.textContent = `x $${fish.value}`

        container.appendChild(count)
        container.appendChild(price)

        fishesSection?.appendChild(container)
    }

    const sellAllBtn = document.createElement('button')
    sellAllBtn.textContent = 'Sell All'
    sellAllBtn.onclick = () => {
        for(const fish of fishes) {
            fish.count = 0
        }

        update()
    }
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
    fish.count++
    update()
}

function update() {
    for(const fish of fishes) {
        const count = document.getElementById(`${fish.name}-count`)!
        count.textContent = `${fish.icon} ${fish.count}`
    }
}