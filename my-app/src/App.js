import React from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  //state = {}

  //life cycle methods: 
  componentDidMount() {
    this.fetchUsers();
  }

//https://api.github.com/users/adriangarcia5

  // fetchUsers = () => {
  //   fetch(`https://api.github.com/users/adriangarcia5`)
  //   // first promise resolution is used to format the data.
  //   .then(res => {
  //     return res.json();
  //   })
  //   //what gets returned from the previous promise moves into the next promise
  //   .then(user => this.setState({users: user.data}))
  //   .catch(err => {
  //     console.log('Sorry, the API is currently down', err);
  //   })
  // };

  //axios call:

  fetchUsers = () => {
    axios
    .get(``)
    .then(res => {
      this.setState({users: res.data})
    })
    .catch(err => console.log('Sorry, the API is currently down', err))
  }

  render() {
    return (
      <div className="App">
        <h1>User</h1>
        <UserCard user={this.state.users}/>
      </div>
    );
  }
}

export default App;

