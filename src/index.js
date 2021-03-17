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
