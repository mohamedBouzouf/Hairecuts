import React, { Component } from 'react';
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyAzcyQsDTCyhxahD05J0_wttH9r_cKy52c",
  authDomain: "haircuts-64748.firebaseapp.com",
})
class Authenication extends Component {

  state = {isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
     
    ],
    callbacks: {
      signInSuccess:() => false
    
    }
    }

    componentDidMount = () =>{
      firebase.auth().onAuthStateChanged(user => {
        this.setState({isSignedIn: !!user})
        console.log("user", user);
      })


      firebase.auth().onAuthStateChanged(user => {
        this.setState({isSignedIn: !!user })
      })
    }
 

   
  render() {
    return (
      <div className="App">
        
        {this.state.isSignedIn ?(


<span>
        <div>SIgned in!</div>
        <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          <h1>Welcome  {firebase.auth().currentUser.displayName}</h1>
            <img alt="profielfoto" src={firebase.auth().currentUser.photoUrl}/>
            
          </span>
        ):(
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}/>
          //<div> Not Singed In! </div>
        )
        }
        
      </div>
    );
  }
}

export default Authenication;
