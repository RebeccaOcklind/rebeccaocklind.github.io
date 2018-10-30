import React, { Component } from 'react';
import firebase from './fire';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
        <div>
            <form>
            <TextField onChange={this.handleChange}/>   
            <Button onClick={this.handleSubmit}>Submit</Button>   
            </form>
        </div>

    );
  }
}

export default MessageForm;
