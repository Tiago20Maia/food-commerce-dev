import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interface/SnackData'
import { getBurgers, getPizzas, getDrinks, getIceCreams } from '../services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const drinksRequest = await getDrinks()
        const iceCreamRequest = await getIceCreams()

        const requests = [burgerRequest, pizzaRequest, drinksRequest, iceCreamRequest]

        const [
          { data: burgerResponse },
          { data: pizzaResponse },
          { data: drinksResponse },
          { data: iceCreamResponse },
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinksResponse)
        setIceCreams(iceCreamResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}
