import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
import Issue from './issue.js';
//Necessary for transfiling of es2015
import 'babel-polyfill';
//Necessary for Node.js to report line numbers of source file instead of the compiled file
import SourceMapSupport from 'source-map-support';
SourceMapSupport.install();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());


// if(process.env.NODE_ENV !== 'production'){
//     const webpack = require('webpack');
//     const webpackDevMiddleware = require('webpack-dev-middleware');
//     const webpackHotMiddleware = require('webpack-hot-middleware');

//     const config = require('../webpack.config');
//     config.entry.app.push('webpack-hot-middleware/client',
//             'webpack/hot/only-dev-server');
//     config.plugins.push(new webpack.HotModuleReplacementPlugin());
    
//     const bundler = webpack(config);
//     app.use(webpackDevMiddleware(bundler, {noInfo: true}));
//     app.use(webpackHotMiddleware(bundler, {log: console.log}));
// }

let db;

app.get('/api/issues/', (req, res) => {
    const filter = {};
    if(req.query.status) filter.status = req.query.status;
    db.collection('issues').find(filter).toArray().then(issues => {
        const metadata = {total_count: issues.length}
        res.json({_metadata: metadata, records: issues});
    }).catch(error => {
        console.log(error);
        res.status(500).json({message: `Internal Server Error: ${error}`});
    });
});

app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    newIssue.created = new Date();
    if(!newIssue.status){
        newIssue.status = 'New';
    }
    const err = Issue.validateIssue(newIssue);
    if(err){
        res.status(422).json({message: `Invalid request: ${err}`});
        return;
    }

    db.collection('issues').insertOne(newIssue).then(doc => 
        db.collection('issues').find({_id: doc.insertedId}).limit(1).next()
    ).then(newIssue => {
        res.json(newIssue);
    }).catch(error => {
        console.log(error);
        res.status(500).json({message: `Internal Server Error: ${error}`});
    });
});



MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost/issuetracker').then(connection => {
    db = connection;
    app.listen(port, () => {
        console.log(`App started on port ${port}`);
    });
}).catch(err => {
    console.log('ERROR:', err);
});