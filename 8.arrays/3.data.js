var data =[
            1,
            "Scott",
            true,
            null,
            undefined,
            function(name){
                return name
            },
            {
                name : 'Scott'
            },
            ["red","blue","yellow"]
        ]

        //access function in array
        //pass the obj value
        //print output

        console.log(data[5](data[6].name))

        console.log(data[5](data[6].name) + ' likes '+ data[7][1])