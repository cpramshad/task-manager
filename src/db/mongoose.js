const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age should be +ve');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('Shouldnt contain "password"')
            }
        }
    }    
});

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const newTask = new Task({
    description: 'Workout'
});

newTask.save().then(() => {
    console.log(newTask);
}).catch(error => {
    console.log(error);
});

// const me = new User({
//     name: '   Ramshad   ',
//     email: ' CPramshad@gmail.com ',
//     age: 36,
//     password: 'PASsword'
// });

// me.save().then(() => {
//     console.log(me);
// }).catch(error => {
//     console.log(error);
// });