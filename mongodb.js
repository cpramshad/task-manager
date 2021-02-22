// CRUD
const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to DB!');
    }
    
    const db = client.db(databaseName);
    db.collection('users').findOne({name: 'Ramshad'}, (error, user) => {
        console.log(user);
    })

    db.collection('users').find({name: 'Ramshad'}).toArray((error, user) => {
        console.log(user);
    }) 

    db.collection('tasks').find({completed: true}).toArray((error, task) => {
        console.log(task);
    });

});
