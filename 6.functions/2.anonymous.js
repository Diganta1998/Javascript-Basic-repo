/*function getName(){
    return "here is your name"
} */
//var getName = "aaa"

var getName = function (){
    return "here is your anonymous function"
}
console.log(getName())

var getfullname = function(fname,lname){
    return fname+' '+lname
}

console.log(getfullname("Diganta","K Das"))