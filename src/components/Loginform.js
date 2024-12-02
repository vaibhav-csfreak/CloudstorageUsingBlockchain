import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

  import './loginform.css';
  var loginDataList = [{
    "username": "abc",
    "password": "abc123"
  }, {
    "username": "richa",
    "password": "richa123"
  }]
const LoginForm = () => {
  function handleSubmit(e){
    e.persist();
    // if((e.target[0].value!="root")||(e.target[1].value)!="root"){
    //   e.preventDefault();
    //   var logdiv=document.getElementById('error');
    //   logdiv.style.display="";
    // }  
    var flag=false;
    loginDataList.map(function(data) {
      if (e.target[0].value && e.target[0].value.trim() !== "" && e.target[1].value && e.target[1].value.trim() !== "") {
        if (data.username===e.target[0].value.trim() && data.password===e.target[1].value.trim()) {
        console.log(e.target[0].value, e.target[1].value)
        flag = true;
      }
    }
    return ""
    });
    if(!flag) {
      e.preventDefault();
      var logdiv=document.getElementById('error');
      logdiv.style.display="";
    }
    
}
  return (
    <div className="login-container">
    <form onSubmit={handleSubmit} action="/homepage" className="login-form">
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          className="form-control"
          placeholder="&#9993; Enter Username"
          name="username"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="&#x1F512; Enter Password"
          name="password"
          required
        />
        <div class="container">
        <input
          className="submitButton form-control"
          type="submit"
          value="LOGIN"
        />
        
        </div>
        
        <p id="error" style={{ display: 'none' }}>
          INVALID CREDENTIALS
        </p>
      </div>
    </form>
   
  <div className="additional-info">
    <img src="./text.png" alt=""/>
 
  </div>

  </div>
  );
};

export default LoginForm;
