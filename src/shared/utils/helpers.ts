export const removeWhitespaces = (str: string | string[]) => {
  if (str && typeof str === 'string') {
    return str.trim()
  }
}

export const formatedDate = (date: string) => {
  if (date) {
    return new Date(date).toLocaleString()
  } else {
    return ''
  }
}
