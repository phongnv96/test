import './_loading.scss'
import React from 'react'

import {ReactComponent as IconLoading} from '@/assets/react.svg'

const Loading: React.FC = () => (
  <div className="loading-container">
    <IconLoading />
  </div>
)
export default React.memo(Loading)
