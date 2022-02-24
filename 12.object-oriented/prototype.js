function Student(fname,lname){
    this.fname = fname
    this.lname = lname
    
    
}

Student.prototype.getfullname = function(){
    return this.fname +' '+this.lname
}

Student.prototype.city = "Boston"

var student1 = new Student("Scott","Lang")
console.log(student1)
console.log(student1.getfullname())
var student2 = new Student("Natasha","Romanoff")
console.log(student2)
console.log(student2.getfullname())