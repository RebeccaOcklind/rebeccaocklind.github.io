import React, { Component } from 'react';
import firebase from './fire';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

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
    if(this.state.val.trim() !== ""){
        const msg = this.state.val.trim();
    firebase.database().ref('messages/').push({
        msg
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
        this.setState({val: ""});
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
    }
}

handleKeyPress = (target) => {
    if(target.charCode === 13){
        this.handleSubmit();
    }
}

render() {
    return (
        <div>
            <h1>Skicka ett meddelande till spegeln</h1>
            <div className="messageformdiv">
                <Card style = {{ backgroundColor: "#b7cff7" }}>
                    <div className="messageform">
                        <TextField onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.val} inputProps={{ maxLength: 100 }} style = {{ width: '90%', marginLeft: '5%', marginRight: '5%' }} />   
                        <Button onClick={this.handleSubmit}>Send message</Button>   
                    </div>
                </Card>
            </div>
        </div>
    );
  }
}

export default MessageForm;
