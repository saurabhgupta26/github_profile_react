import React from "react";
import "./App.css";
import Usercard from "./components/Usercard.jsx";
import Buttons from './components/Buttons.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIndex: 0,
      user: null,
      isLoading : false,
      users : ["saurabhgupta26", "vivekbrh01", "nnnkit", "sanjibroy360", "maxagno3"]
    };
  }

  update=(user)=> {
    this.setState({user:null})
   fetch(`https://api.github.com/users/${user}`)
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              user: data,
              isLoading:false
            })
          )
          .catch((error) => this.setState({ error }));
      }
  
  render() {
    return ( <>
      {(!this.state.isLoading )?
    <div>
      {this.state.users.map(user=>{
        return <button onClick= {()=> this.update(user)}>{user}</button>
        // <Buttons user = {user} />
      })}
     <h1>{(this.state.user && this.state.user)?
     <Usercard user = {this.state.user} />
     :"loading..."}</h1> 

    </div>
    : <h1> Loading ...</h1> 
  }
  </>) 
  }
}