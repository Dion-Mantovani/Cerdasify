export function formatValidationErrors(errorsArray) {
  const formatted = {}

  errorsArray.forEach((err) => {
    if (!formatted[err.path]) {
      formatted[err.path] = []
    }
    formatted[err.path].push(err.message)
  })

  return formatted
}
