import { createContext, ReactNode, useState } from 'react'

interface ICart {
    [key: number]: number
}

interface ICoffeeContext {
    cart: ICart | undefined
    setCartItems: (coffeeId: number, qtd: number) => void
}

export const CoffeeContext = createContext({} as ICoffeeContext)

interface ICoffeeContextProviderProps {
    children: ReactNode
}

export function CoffeeContextProvider({children}: ICoffeeContextProviderProps) {
    const [cart, setCart] = useState<ICart>({})

    function setCartItems(coffeeId: number, qtd: number) {
        setCart((prevState) => {
            const newState = { ...prevState }
            newState[coffeeId] = newState[coffeeId] ? newState[coffeeId] + qtd : qtd
            return newState
        })
    }

    return (
        <CoffeeContext.Provider value={{ cart, setCartItems }}>
            {children}
        </CoffeeContext.Provider>
    )
}