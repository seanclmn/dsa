function flattenArray(arr){
  
  return arr.reduce((acc, elem) => {
    if(Array.isArray(elem)){
      acc = acc.concat(flattenArray(elem))
    }else{
      acc.push(elem)
    }
    return acc
  },[])

}

console.log(flattenArray([1,2,3,[1,2,3]]))
