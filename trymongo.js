'use strict';
const MongoClient = require('mongodb').MongoClient;

function usage() {
    console.log('Usage:');
    console.log('node', __filename, '<option>');
    console.log('Where option is one of:');
    console.log('   callbacks   Use the callbacks paradigm');
    console.log('   promises   Use the Promises paradigm');
    console.log('   generator   Use the Generator paradigm');
    console.log('   async   Use the async paradigm');
}

if(process.argv.length < 3){
    console.log("Incorrect number of arguments");
    usage();
}
else{
    if(process.argv[2] === 'callbacks'){
        testWithCallbacks();
    }
    else if(process.argv[2] === 'promises'){
        testWithPromises();
    }
    else if(process.argv[2] === 'generator'){
        testWithGenerator();
    }
    else if(process.argv[2] === 'async'){
        testWithAsync();
    }
    else{
        console.log('Invalid option:', process.argv[2]);
        usage();
    }
}


// Managing asynchronous calls with callbacks
function testWithCallbacks(){
    MongoClient.connect('mongodb://localhost/playground', (err, db) => {
        db.collection('employees').insertOne({id: 1, name: 'A. Callback'}, 
        (err, result) => {
            console.log('Result of insert:', result.insertedId);
            db.collection('employees').find({id: 1}).toArray((err, docs) => {
                console.log('Result of find:', docs);
                db.close();
            });
        });
    });
}


// Managing asynchronous calls with promises
function testWithPromises(){
    let db;
    MongoClient.connect('mongodb://localhost/playground').then(connection => {
        db = connection;
        return db.collection('employees').insertOne({id: 1, name: 'B. Promises'});
    }).then(result => {
        console.log('Result of insert:', result.insertedId);
        return db.collection('employees').find({id: 1}).toArray();
    }).then(docs => {
        console.log('Result of find:', docs);
        db.close();
    }).catch(err => {
        console.log('ERROR', err);
    });
}

// Managing asynchronous calls with the co module and generator function
function testWithGenerator(){
    const co = require('co');
    co(function*(){
        const db = yield MongoClient.connect('mongodb://localhost/playground');

        const result = db.collection('employees').insertOne({id: 1, name: 'C. Generator'});
        console.log('Result of insert:', result.insertedId);

        const docs = db.collection('employees').find({id: 1}).toArray();
        console.log('Result of find:', docs);
        db.close();
    }).catch(err => {
        console.log('ERROR', err);
    });
}

// Managing asynchromous calls with the async module
function testWithAsync(){
    const async = require('async');
    let db;
    async.waterfall([
        next => {
            MongoClient.connect('mongodb://localhost/playground', next);
        },
        (connection, next) => {
            db = connection;
            db.collection('employees').insertOne({id: 1, name: 'D. Async'}, next);
        },
        (insertResult, next) => {
            console.log('Insert result:', insertResult.insertedId);
            db.collection('employees').find({id: 1}).toArray(next);
        },
        (docs, next) => {
            console.log('Result of find:', docs);
            db.close();
            next(null, 'All done');
        }
    ], (err, result) => {
        if(err){
            console.log('ERROR', err);
        }
        else{
            console.log(result);
        }
    });
}