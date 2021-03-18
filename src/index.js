const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.port || 3000;

// app.use((req, res, next) => {
//     // console.log(req.method, req.path);
//     // next();
//     res.status(503).send();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

// const bcrypt = require('bcryptjs');
// const myFunction = async () => {
//     const password = 'Ram123!';
//     const hashedPwd = await bcrypt.hash(password, 8);
//     console.log(password);
//     console.log(hashedPwd);
//     const isMatch = await bcrypt.compare('1212', hashedPwd);
//     console.log(isMatch);
// }
// myFunction();

// const jwt = require('jsonwebtoken');
// const token = jwt.sign({ _id: 'abc'}, 'secret');
// console.log(token);


// const pet = {
//     name: 'podiyan'
// }

// pet.toJSON = function() {
//     console.log('toJSON');
//     console.log(this);
//     return this;
// }

// console.log(JSON.stringify(pet));

const Task = require('../src/models/task');
const User = require('./models/user');
const main = async () => {
    // const task = await Task.findById('60530e2d2ba663296045c59f');
    // await task.populate('owner').execPopulate();
    // console.log(task.owner);

    const user = await User.findById('60530d3090ba904df8c7227b');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
}
main();