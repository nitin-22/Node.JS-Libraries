const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=b1969375ede1fa385cda81584f17722e&query=45,-75'

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()    
    })
    response.on('end ', () => {
        const body  = JSON.parse()
        console.log(body)
    }) 
})

request.end()