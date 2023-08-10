import { ReactNode } from 'react'

export type RecommendItemType = {
  id: any
  title: ReactNode
  subTitle: string
  link?: string
}

export type RecommendPostType = {
  id: any
  imageUrl: string
  time: string
  tittle: string
  subTitle: string
}
