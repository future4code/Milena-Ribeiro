import Characters from '../interface'

function validateCharacter (game: Characters): boolean {

    if (
      !game.name ||
      game.life === undefined || 
      game.strength === undefined ||
      game.defense === undefined
    ) {
        return false
    }
      
    if (game.life <= 0 || 
        game.strength <= 0 || 
        game.defense <= 0
    ) {
      return false
    }
  
    return true
}

export default validateCharacter