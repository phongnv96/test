import { useGlobalContext } from '@/contexts/GlobalContextProvider'

const useLoading = (time: number = 2000) => {
  const { setLoading } = useGlobalContext()
  const showLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, time)
  }

  return { showLoading }
}

export default useLoading
