webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(115);


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(76);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(32);

var _IssueList = __webpack_require__(241);

var _IssueList2 = _interopRequireDefault(_IssueList);

var _IssueEdit = __webpack_require__(244);

var _IssueEdit2 = _interopRequireDefault(_IssueEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById('contents');
var NoMatch = function NoMatch() {
    return _react2.default.createElement(
        'p',
        null,
        'Page Not Found'
    );
};

var RoutedApp = function RoutedApp() {
    return _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.hashHistory },
        _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: '/issues' }),
        _react2.default.createElement(_reactRouter.Route, { path: '/issues', component: (0, _reactRouter.withRouter)(_IssueList2.default) }),
        _react2.default.createElement(_reactRouter.Route, { path: '/issues/:id', component: _IssueEdit2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
    );
};

_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode); // Render the component inside the content Node

if (false) {
    module.hot.accept();
}

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(113);

var _reactRouter = __webpack_require__(32);

var _IssueAdd = __webpack_require__(242);

var _IssueAdd2 = _interopRequireDefault(_IssueAdd);

var _IssueFilter = __webpack_require__(243);

var _IssueFilter2 = _interopRequireDefault(_IssueFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueRow = function (_React$Component) {
    _inherits(IssueRow, _React$Component);

    function IssueRow() {
        _classCallCheck(this, IssueRow);

        return _possibleConstructorReturn(this, (IssueRow.__proto__ || Object.getPrototypeOf(IssueRow)).apply(this, arguments));
    }

    _createClass(IssueRow, [{
        key: 'render',
        value: function render() {
            var issue = this.props.issue;
            return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/issues/' + issue._id },
                        issue._id.substr(-4)
                    )
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    issue.status
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    issue.owner
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    issue.created.toDateString()
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    issue.effort
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    issue.completionDate ? issue.completionDate.toDateString() : ''
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    issue.title
                )
            );
        }
    }]);

    return IssueRow;
}(_react2.default.Component);

var IssueTable = function (_React$Component2) {
    _inherits(IssueTable, _React$Component2);

    function IssueTable() {
        _classCallCheck(this, IssueTable);

        return _possibleConstructorReturn(this, (IssueTable.__proto__ || Object.getPrototypeOf(IssueTable)).apply(this, arguments));
    }

    _createClass(IssueTable, [{
        key: 'render',
        value: function render() {
            var issueRows = this.props.issues.map(function (issue) {
                return _react2.default.createElement(IssueRow, { key: issue._id, issue: issue });
            });
            return _react2.default.createElement(
                'table',
                { className: 'bordered-table' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            'Id'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Status'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Owner'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Created'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Effort'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Completion Date'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Title'
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    issueRows
                )
            );
        }
    }]);

    return IssueTable;
}(_react2.default.Component);

var IssueList = function (_React$Component3) {
    _inherits(IssueList, _React$Component3);

    function IssueList() {
        _classCallCheck(this, IssueList);

        var _this3 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

        _this3.state = { issues: [] };
        _this3.createIssue = _this3.createIssue.bind(_this3);
        _this3.setFilter = _this3.setFilter.bind(_this3);
        return _this3;
    }

    _createClass(IssueList, [{
        key: 'setFilter',
        value: function setFilter(query) {
            this.props.router.push({ pathname: this.props.location.pathname, query: query });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var oldQuery = prevProps.location.query;
            var newQuery = this.location.query;
            if (oldQuery.status === newQuery.status) {
                return;
            }
            this.loadData();
        }
    }, {
        key: 'loadData',
        value: function loadData() {
            var _this4 = this;

            fetch('/api/issues' + this.props.location.search).then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log("Total count of records:", data._metadata.total_count);
                        data.records.forEach(function (issue) {
                            issue.created = new Date(issue.created);
                            if (issue.completionDate) {
                                issue.completionDate = new Date(issue.completionDate);
                            }
                        });
                        _this4.setState({ issues: data.records });
                    });
                } else {
                    res.json().then(function (error) {
                        alert("Failed to fetch issues:" + error.message);
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'createIssue',
        value: function createIssue(newIssue) {
            var _this5 = this;

            fetch('/api/issues', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newIssue)
            }).then(function (response) {
                if (response.ok) {
                    response.json().then(function (updatedIssue) {
                        updatedIssue.created = new Date(updatedIssue.created);
                        if (updatedIssue.completionDate) updatedIssue.completionDate = new Date(updatedIssue.completionDate);
                        var newIssues = _this5.state.issues.concat(updatedIssue);
                        _this5.setState({ issues: newIssues });
                    });
                } else {
                    response.json().then(function (error) {
                        alert("Failed to add issue: " + error.message);
                    });
                }
            }).catch(function (err) {
                alert("Error in sending data to server: " + err.message);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Issue Tracker'
                ),
                _react2.default.createElement(_IssueFilter2.default, { setFilter: this.setFilter }),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(IssueTable, { issues: this.state.issues }),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(_IssueAdd2.default, { createIssue: this.createIssue }),
                _react2.default.createElement('hr', null)
            );
        }
    }]);

    return IssueList;
}(_react2.default.Component);

exports.default = IssueList;


IssueList.propTypes = {
    location: _react2.default.PropTypes.object.isRequired,
    router: _react2.default.PropTypes.object
};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueAdd = function (_React$Component) {
    _inherits(IssueAdd, _React$Component);

    function IssueAdd() {
        _classCallCheck(this, IssueAdd);

        var _this = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(IssueAdd, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var form = document.forms.issueAdd;
            this.props.createIssue({
                owner: form.owner.value,
                title: form.title.value,
                status: 'New',
                created: new Date()
            });
            //clear the form for the next input
            form.owner.value = "";form.title.value = "";
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { name: 'issueAdd', onSubmit: this.handleSubmit },
                    _react2.default.createElement('input', { type: 'text', name: 'owner', placeholder: 'owner' }),
                    _react2.default.createElement('input', { type: 'text', name: 'title', placeholder: 'title' }),
                    _react2.default.createElement(
                        'button',
                        null,
                        'Add'
                    )
                )
            );
        }
    }]);

    return IssueAdd;
}(_react2.default.Component);

exports.default = IssueAdd;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueFilter = function (_React$Component) {
    _inherits(IssueFilter, _React$Component);

    function IssueFilter() {
        _classCallCheck(this, IssueFilter);

        var _this = _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).call(this));

        _this.clearFilter = _this.clearFilter.bind(_this);
        _this.setFilterOpen = _this.setFilterOpen.bind(_this);
        _this.setFilterAssigned = _this.setFilterAssigned.bind(_this);
        return _this;
    }

    _createClass(IssueFilter, [{
        key: 'setFilterOpen',
        value: function setFilterOpen(e) {
            e.preventDefault();
            this.props.setFilter({ status: 'Open' });
        }
    }, {
        key: 'setFilterAssigned',
        value: function setFilterAssigned(e) {
            e.preventDefault();
            this.props.setFilter({ status: 'Assigned' });
        }
    }, {
        key: 'clearFilter',
        value: function clearFilter(e) {
            e.preventDefault();
            this.props.setFilter({});
        }
    }, {
        key: 'render',
        value: function render() {
            var Separator = function Separator() {
                return _react2.default.createElement(
                    'span',
                    null,
                    ' | '
                );
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'a',
                    { href: '#', onClick: this.clearFilter },
                    'All Issues'
                ),
                _react2.default.createElement(Separator, null),
                _react2.default.createElement(
                    'a',
                    { href: '#', onClick: this.setFilterOpen },
                    'Open Issues '
                ),
                _react2.default.createElement(Separator, null),
                _react2.default.createElement(
                    'a',
                    { href: '#', onClick: this.setFilterAssigned },
                    'Assigned Issues'
                )
            );
        }
    }]);

    return IssueFilter;
}(_react2.default.Component);

exports.default = IssueFilter;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueEdit = function (_React$Component) {
    _inherits(IssueEdit, _React$Component);

    function IssueEdit() {
        _classCallCheck(this, IssueEdit);

        return _possibleConstructorReturn(this, (IssueEdit.__proto__ || Object.getPrototypeOf(IssueEdit)).apply(this, arguments));
    }

    _createClass(IssueEdit, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'This is a placeholder for editing issue ',
                    this.props.params.id
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/issues' },
                    'Back to issue list'
                )
            );
        }
    }]);

    return IssueEdit;
}(_react2.default.Component);

exports.default = IssueEdit;


IssueEdit.propTypes = {
    params: _react2.default.PropTypes.object.isRequired
};

/***/ })

},[114]);
//# sourceMappingURL=app.bundle.js.map