var people = ["Scott","Adam","Tuan"]

// for loop

for(var i=0;i<people.length;i++)
{
    console.log(people[i])
}

//forEach 

people.forEach(function(person){
    console.log(person)
})

//using map

people.map(function(value,index){
    console.log(value,index)
})

var colors =["red","green","blue"]

var colorsusingForeach = colors.forEach(function(value,index){
    return value +' '+ index
})

 var colorsusingMap = colors.map(function(value,index){
    return value +' '+ index
})


    console.log(colorsusingForeach)
    console.log(colorsusingMap)


    // for...of

    for(var value of people)
    {
        console.log(value)
    }


    // entries

    for(var [index,value] of people.entries()){
        console.log(index,value)
    }
