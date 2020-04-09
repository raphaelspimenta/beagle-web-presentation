import { createContext } from 'react'

const context = createContext({ name: '', initialValue: '' })
export const RadioGroupProvider = context.Provider
export default context
