import React from 'react';

export default class IssueAdd extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        var form = document.forms.issueAdd;
        this.props.createIssue({
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
            created: new Date()
        });
        //clear the form for the next input
        form.owner.value = ""; form.title.value = "";
    }

    render(){ 
        return (
            <div>
                <form name="issueAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="owner" placeholder="owner" />
                    <input type="text" name="title" placeholder="title"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}