import Ingredient from './Ingedient'

export default interface Meal {
  id: string
  name: string
  ingredients: Ingredient[]
}
