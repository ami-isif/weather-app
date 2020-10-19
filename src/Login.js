import React, { useState } from 'react';

   const users = {
     "frank" : "12345",
     "amiraissifu" : "00224",
 }

export function Login( { isUserLoggedIn } ) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

function usernameInputHandler(event){
    setUsername(event.target.value);
}

 function passwordInputHandler(event) {
   setPassword(event.target.value);
 }

function handleLogin(e) {
  e.preventDefault();

    // I want to check if the username entered
    // is found in the users defined above, and
    // check if the password entered matches the users password
    if (users[username] === password) {
      isUserLoggedIn(true)
    } else {
      //this will run if the username or password is wrong
      alert("you have entered a wrong username or password");
 }
}

    return(
      <div className="card login-page">

       <div className="card-body">
           <h1>Login</h1>      
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={usernameInputHandler}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={passwordInputHandler} />
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin} >Sign In</button>
        <p className="mt-4">
              Don't have an account? <a href="htpps://google.com">Sign Up Here</a>
            </p>
       </form>
     </div>

    </div>
    )
}

export default Login;