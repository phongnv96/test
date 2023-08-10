const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const emailValidator = async (_: any, value: string) => {
  if (!value) {
    return
  }

  if (value.match(emailPattern)) {
    return Promise.resolve()
  }
  return Promise.reject(new Error('Email sai định dạng'))
}

export { emailValidator }
