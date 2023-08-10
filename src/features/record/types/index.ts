export type RecordCardItemType = {
  id: string
  imageUrl: string
  title: string
  subTitle: string
}

export type ExerciseRecordItem = {
  id: any
  title: string
  subTitle: string
  kcal: number
  time: any
}

export type DiaryItemType = {
  id: any
  date: string
  time: string
  title: string
  description: string
}

export * from './chart'
