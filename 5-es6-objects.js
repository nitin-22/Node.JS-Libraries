// object property shorthand    

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 200,
    salePrice: undefined,
    rating: 5
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating='nitin'} = product
// console.log(productLabel)
// console.log(stock) 
// console.log(rating) 

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)