import { ReactNode } from 'react'

interface ProcessCircleProps {
  currentPercent: number
  strokeWidth?: number
  prefixTitle?: ReactNode
}
const ProcessCircle = (props: ProcessCircleProps) => {
  const { currentPercent = 80, strokeWidth = 5, prefixTitle } = props
  const circumference = ((2 * 22) / 7) * 80
  return (
    <div>
      <div className="flex items-center justify-center" x-data={circumference}>
        <svg className="transform -rotate-90 w-[181px] h-[181px]">
          <circle
            cx="90"
            cy="90"
            r="80"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (currentPercent / 100) * circumference}
            className="text-white"
          />
        </svg>
        <span className="absolute text-white">
          <span className="text-[18px] mr-1">{prefixTitle}</span>{' '}
          <span className="text-[25px]">{currentPercent}%</span>
        </span>
      </div>
    </div>
  )
}

export default ProcessCircle
