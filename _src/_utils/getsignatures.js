module.exports = collection => {
  return collection
    .getAllSorted()
    .filter(item => item.inputPath.startsWith('./_src/signatures'));
}
