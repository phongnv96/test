import { Loading } from '@/components'
import { CurrentUserType } from '@/types'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

type CurrentUserContextType = {
  currentUser: CurrentUserType | null
  setCurrentUser: React.Dispatch<React.SetStateAction<CurrentUserType | null>>
  isLoading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const GlobalContext = createContext<CurrentUserContextType | undefined>(undefined)

const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<CurrentUserType | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  return (
    <GlobalContext.Provider value={{ currentUser, setCurrentUser, isLoading, setLoading }}>
      <Loading />
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider')
  }
  return context
}

export default GlobalContextProvider
