var user = {
	"name": "Scott",
	"city": "Desatnick"
}

var JSONstringify = JSON.stringify(user)

console.log(JSONstringify, typeof JSONstringify)

var JSONParse = JSON.parse(JSONstringify)

console.log(JSONParse, typeof JSONParse)

//server to server

