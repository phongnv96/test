import './_loading.scss'
import React from 'react'

import { ReactComponent as IconLoading } from '@/assets/react.svg'
import { useGlobalContext } from '@/contexts/GlobalContextProvider'

const Loading: React.FC = () => {
  const { isLoading } = useGlobalContext()

  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <IconLoading className="loading-icon" />
        </div>
      )}
    </>
  )
}
export default React.memo(Loading)
