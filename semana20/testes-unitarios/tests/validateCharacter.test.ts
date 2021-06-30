import validateCharacter from '../src/validateCharacter'

test("Personagem com o nome vazio.", () => {
    const result = validateCharacter({
        name: "",
        life: 100,
        defense: 60,
        strength: 80
    })

    expect(result).toBe(false)

})

test("Personagem com a vida igual a zero.", () => {
    const result = validateCharacter({
        name: "Astrodev",
        life: 0,
        defense: 60,
        strength: 80
    })

    expect(result).toBe(false)
})

test("Personagem com a força igual a zero.", () => {
    const result = validateCharacter({
        name: "Astrodev",
        life: 80,
        defense: 60,
        strength: 0
    })

    expect(result).toBe(false)
})

test("Personagem com a defesa igual a zero. ", () => {
    const result = validateCharacter({
        name: "Astrodev",
        life: 1500,
        defense: 0,
        strength: 0
    })

    expect(result).toBe(false)
})

test("Personagem com a vida, a força ou a defesa com um valor negativo. ", () => {
    const result = validateCharacter({
        name: "Astrodev",
        life: 1500,
        defense: -200,
        strength: 300
    })

    expect(result).toBe(false)
})

test("Personagem com as informações válidas.", () => {
    const result = validateCharacter({
        name: "Astrodev",
        life: 1500,
        defense: 200,
        strength: 300
    })

    expect(result).toBe(true)
})