import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,Redirect, hashHistory, withRouter} from 'react-router';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

var contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Found</p>;

const RoutedApp = () => (
    <Router history={hashHistory}>
        <Redirect from="/" to="/issues"/>
        <Route path="/issues" component={withRouter(IssueList)}/>
        <Route path="/issues/:id" component={IssueEdit}/>
        <Route path="*" component={NoMatch}/>
    </Router>
);

ReactDOM.render(<RoutedApp />, contentNode); // Render the component inside the content Node

if(module.hot){
    module.hot.accept();
}