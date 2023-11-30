import UnitOfMeasurement from './enums/UnitOfMeasurement'

export default interface Ingredient {
  id: string
  name: string
  quantity: number
  unit: UnitOfMeasurement | string
}
