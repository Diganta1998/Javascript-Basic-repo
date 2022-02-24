console.log(this)

function sample(){
    console.log(this)
}

sample()

var person = {
    name : 'Scott',
    getName : function(){
        var self = this
        console.log(self)
        this.name = 'Desatnick'
        console.log(self)


        var updateName = function(){
            self.name = "Great Scott"
            console.log(self)
        }
         updateName()
    }
}

person.getName()