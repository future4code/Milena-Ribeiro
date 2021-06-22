import Characters from "../interface"
import validateCharacter from '../src/validateCharacter'

function performAttack( attacker: Characters, defender: Characters ) {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error ("Invalid Character")
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
}

export default performAttack