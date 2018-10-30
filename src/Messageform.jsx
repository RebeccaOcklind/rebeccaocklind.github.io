import React, { Component } from 'react';
import firebase from './fire';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import blue from '@material-ui/core/colors/blue';

class MessageForm extends Component {
constructor(props) {
  super(props);
    this.state = { 
      val: ""
    }
}

handleChange = (e) => {
    this.setState({val: e.target.value});
}

handleSubmit = () => {
    const msg = this.state.val;
    firebase.database().ref('messages/').push({
        msg
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}

render() {
    return (
        <div className="messageformdiv">
            <Card style = {{ backgroundColor: "#b7cff7" }}>
                <form className="messageform">
                    <TextField onChange={this.handleChange} inputProps={{ maxLength: 100 }} style = {{ width: 500 }} />   
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>   
                </form>
            </Card>
        </div>

    );
  }
}

export default MessageForm;
