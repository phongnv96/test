async function createFile(path: string, name: string, type: string): Promise<File> {
  let response = await fetch(path)
  let data = await response.blob()
  let metadata = {
    type,
  }
  return new File([data], name, metadata)
}

export { createFile }
