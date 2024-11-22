import { chain, isNumber } from 'lodash'

/**
 * Omit number values of Object and apply startCase to values
 *
 * Example:
 * enum Status {OpenStatus = 1, Closed = 2}
 *
 * Above enum would have a javascript equivalient of:
 * {'1': 'OpenStatus', '2': 'Closed', OpenStatus: 1, Closed: 2}
 *
 * This function transfroms it to:
 * {'1': 'Open Status', '2': 'Closed}
 */
export const enumAsOptions = (obj: object): object => {
  return chain(obj).omitBy(isNumber).value()
}

/**
 * Generate a random uuid using Crypto
 */
export const getUUID = () => crypto.randomUUID()

/**
 * Get the current app version
 */
export const getVersion = () => '1.1.0'
