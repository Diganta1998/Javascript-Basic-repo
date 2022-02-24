// CLASS

function student(){


}

// INstance

function Person(){

}

var person1 = new Person()
var person2 = new Person()

// Constructor

function Order(){
    console.log('Order initiated')

}

var order = new Order()  // Order()is constructor

// properties

function Customer(gender){
    this.gender = gender  
}

var customer1 = new Customer("Female")
console.log(customer1)

var customer2 = new Customer("Male")
console.log(customer2)


