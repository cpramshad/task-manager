require('../src/db/mongoose');
const Task = require('../src/models/task');

// 603de9ecf8db855194e6735a
// Task.deleteOne({_id: '603de9ecf8db855194e6735a'}).then(result => {
//     console.log(result);
//     return Task.countDocuments({completed: false});
// }).then(result => {
//     console.log(result);
// }).catch(e => {
//     console.log(e);
// });

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
}

deleteTaskAndCount('603debc6e71fae1a546922c2').then(count => {
    console.log(count);
}).catch(e => {
    console.log(e);
});