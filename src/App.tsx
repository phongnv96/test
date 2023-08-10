import { RouterProvider } from '@/hocs'
import { Routes } from '@/routes'
import GlobalContextProvider from './contexts/GlobalContextProvider'

function App() {
  return (
    <>
      <GlobalContextProvider>
        <RouterProvider>
          <Routes />
        </RouterProvider>
      </GlobalContextProvider>
    </>
  )
}

export default App
