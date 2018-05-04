import React, { Component } from 'react';
import axios from 'axios'

//data = {}

class App extends Component {
  constructor(props){
    super(props)
    //state
    this.state ={
      users: []
    }
  }

  componentWillMount(){
    //axios('https://api.randomuser.me/?nat=US&results=5').then(response => console.log(response))
    axios('https://api.randomuser.me/?nat=US&results=5').then(response => this.setState({
      users: response.data.results
    }))
  
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div>
          <h3>{user.name.first} {user.name.last}</h3>
          <p>{user.email}</p>
          <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
