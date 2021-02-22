// CRUD
const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to DB!');
    }
    
    const db = client.db(databaseName);

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("60327de2792c1a19c02394a6")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // })

    // updatePromise.then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // })

    db.collection('tasks').updateMany({
        completed: true
    }, {
        $set: {
            completed: false
        }
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });


    // db.collection('users').findOne({name: 'Ramshad'}, (error, user) => {
    //     console.log(user);
    // })

    // db.collection('users').find({name: 'Ramshad'}).toArray((error, user) => {
    //     console.log(user);
    // }) 

    // db.collection('tasks').find({completed: true}).toArray((error, task) => {
    //     console.log(task);
    // });

});
