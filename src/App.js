import React, { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import Home from './components/Home'
import {addDataLocalStorage} from './data/apiData';

const App=()=>{

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [accessToken,setaccessToken] = useState("")
  const componentClicked =(data)=>{
    console.log("data vhjbhj jhbhjgbhj jvhjh",data);
  }

  const responseFacebook = (response) => {
    console.log(response);
    console.warn("Access Token: ",response.accessToken)
    setIsLoggedIn(true)
    localStorage.setItem("myToken",response.accessToken)
    var myToken=localStorage.getItem("myToken")
    console.log(myToken)
    setaccessToken(response.accessToken)
  };
  // const setDatatoStorage =  async() =>{
  //   try{
  //     const d = await addDataLocalStorage();
  //     localStorage.setItem('data',JSON.stringify(d));

  //   }
  //   catch(error){
  //       console.log(error);
  //   }

  // }
  // useEffect(()=>{
  //   fetch('https://graph.facebook.com/v2.11/'+3640451759388099+'/pending_users?access_token='+accessToken)
  //   .then(response=>response.json)
  //   .then(data=>console.log(data))
  //   .catch(error=>console.log(error))
  // },[accessToken]);

   useEffect(()=>{
    fetch('https://graph.facebook.com/v2.11/100405035640930/business_users?email=alabir65@gmail.com&role=ADMIN&access_token=EAAiOEd4hfKsBANU1YTroTF4cZB8lZAEXjFzOQ7axDRSZCK6K7dSZAIfoZAVU9iamJ9ouwkMmFD7XY9nHJi5knvCg76VZCaD6v8uL2OAZCrFw5XkQqbNO8dlQXvgsGWVU8MNeu9NQf1HXpEK2ZCjNdZCpZC1DxsExIskg5QZAW5hZAUHDoBZCyFUx00WP24KWiPR4cZCc6ZBKzzpDB1V5SglipvHoFsDWTFdQAZB64vsZD',
    {method:'POST'})
    .then(response=>response.json)
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
  },[accessToken]);


    return (
     isLoggedIn ?<Home title={accessToken} />:
      (
      <div> 
        <FacebookLogin
          appId="2408007206010027"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      </div>
      )
    );
  
}

export default App;

//337531254631604

//cloud:2980865728869399

//2408007206010027
