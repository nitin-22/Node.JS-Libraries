const fs = require('fs')
// const book = {
//     title: 'Learn JS from Udemy',
//     author: 'Nitin Asthana'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-jason.jason', bookJSON)

// const dataBuffer = fs.readFileSync('1-jason.jason') // convert data into buffer
// const dataJSON = dataBuffer.toString()              // data into string
// const data = JSON.parse(dataJSON)                   // data in to object 
// console.log(data.author)                            // access all the objet of the data

const dataBuffer = fs.readFileSync('1-json.json') 
dataJSON = dataBuffer.toString()  
const user = JSON.parse(dataJSON) 

user.name = 'Nitin'
user.age = 24

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

// console.log(data.planet)    
