export const removeWhitespaces = (str: string | string[]) => {
  if (str && typeof str === 'string') {
    return str.trim()
  }
}
