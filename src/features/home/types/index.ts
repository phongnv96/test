import { IconLocalType } from '@/types'

export type CategoryType = {
  id: any
  iconName: IconLocalType
  title: string
  link?: string
}

export type FoodType = {
  id: any
  imageUrl: string
  time: string
}

export * from './responseApi'
