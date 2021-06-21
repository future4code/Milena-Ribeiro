import User from '../src/model/types'
import performPurchase from '../src/perfomPurchase'

describe("Teste função performPurchase", () => {

    test("Saldo maior do que o valor de compra", () => {

        const user: User = {
            name: "Astrodev",
            balance: 100
        }

        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        })

    })

    test("Saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Astrodev",
            balance: 0
        })

    })

    test("Saldo menor do que o valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 40
        }

        const result = performPurchase(user, 60)

        expect(result).toBeUndefined()

    })

})