module.exports = collection => {
  return collection
    .getAllSorted()
    .filter(item => item.inputPath.startsWith('./_src/signatures'))
    .sort((a, b) => {
      if (a.data.name < b.data.name) return -1
      if (a.data.name > b.data.name) return 1
      return 0
    })
}
