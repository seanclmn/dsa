
// Another method is to use a set, which will automatically remove any duplicate values (a set can contain only unique values)
//

function removeWithSet(str) {
  const arr = str.split(' ')

  const newString = Array.from(new Set(arr)).join(' ')

  return newString
}

console.log(removeWithSet("this is a test test test string"))

