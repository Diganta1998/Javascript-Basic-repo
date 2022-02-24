var array =[1,2,3]

//console.log(array.push(4))

array.push(4)
array.push(5)
array.push(6)
array.unshift(0)
array.unshift(-1)
array.unshift(-2)

console.log(array)

array.pop()


array.shift() 

console.log(array)

//add in between - splice

array.splice(2,0,6)
console.log(array)
array.splice(1,2)
console.log(array)

// slice

