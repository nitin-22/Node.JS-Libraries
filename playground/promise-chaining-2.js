require('../src/db/mongoose')   //connected to the database
const Task = require('../src/models/task')

// 5ef0cc3e8e437b3874d80910

// Task.findByIdAndDelete('5ef0e402e99ed133fca4831d').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({compeleted: false})
    return count
}

// 5ef0e38796f52e2dc081cece

deleteTaskAndCount('5ef0e38796f52e2dc081cece').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})