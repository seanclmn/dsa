class Stack {
  constructor(){
    this._storage = {}
    this._length = 0
  }

  push(newValue){
    this._storage[_length]=newValue;
    this._length++
    return this._storage
  }

  pop(){
    if(!this._length) return
    const lastVal = this._storage[this._length-1]
    delete this._storage[this._length-1]
    this._length--

    return lastVal
  }
  
  peek(index){
    if(!this._length) return

    return this._storage[index]
  }
}


class Queue {
  constructor(){
    this._storage = {}
    this._headIndex = 0
    this._length = 0
  }

  enqueu(newValue){
    if(!newValue) return
    this._storage[this._length+this._headIndex]=newValue
    this._length++

    return this._storage
  }

  dequeu(newValue){
    
    if(!this._length) return
    const firstVal = this._storage[this_headIndex]
    delete this._storage[this._headIndex]
    this._length--

    return firstVal

  }

}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor {
    this.head = null
    this.length = 0
  }

  prepend(value){
    const node = new Node(value)

    if(!this.length){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
      
  }

  append(value){
    const node = new Node(value)

    if(!this.length){
      this.head = node
      return
    }else{ 
      let current = this.head
    
      while(current.next){
        current = current.next
      }
      current.next = node
      this.length++
    }
  }

}
