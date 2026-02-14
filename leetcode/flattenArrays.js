function what(arr){
  
  return arr.reduce((acc, elem) => {
    if(Array.isArray(elem)){
      acc = acc.concat(flattenArray(elem))
    }else{
      acc.push(elem)
    }
    return acc
  },[])

}


function flattenArray(arr){
  
}

