import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Home from './components/Home'
import {addDataLocalStorage} from './data/apiData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false
     };
  }

  responseFacebook = (response) => {
    console.log(response);
    console.warn("Access Token: ",response.accessToken)
    this.setState({
      isLoggedIn:true
    })
  };

  setDataLocalStorage = async() =>{
    try{
      const d = await addDataLocalStorage

    }
    catch(error){

    }

  }

  render() {
    return (
      this.state.isLoggedIn ?<Home />:
      (
      <div> 
        <FacebookLogin
          appId="2408007206010027"
          autoLoad={true}
          fields="name,email,picture"
          //onClick={componentClicked}
          onClick={this.setDataLocalStorage}
          callback={this.responseFacebook}
        />
      </div>
      )
    );
  }
}

export default App;

//337531254631604

//2980865728869399

//2408007206010027
