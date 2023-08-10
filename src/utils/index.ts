function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj }
  keys.forEach((key) => delete result[key])
  return result
}

const mockData = (data: any, time: number): any[] => {
  const newData = []
  for (let index = 0; index < time; index++) {
    newData.push({ ...data, id: index })
  }
  return newData
}

export * from './handleError'
export * from './routeUtil'
export { omit, mockData }
