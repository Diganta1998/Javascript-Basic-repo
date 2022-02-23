function b(){
    var x;
}


function a(){
    var x=2;
    b()
}

var x=1;
a()
console.log(x)

// no var makes it an global var
// var makes it unique to function