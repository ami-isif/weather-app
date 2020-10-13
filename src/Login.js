import React from 'react';

function Login(){
    return(
      <div className="card login-page">

       <div className="card-body">
           <h1>Login</h1>      
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
        <p className="mt-4">
              Don't have an account? <a href="htpps://google.com">Sign Up Here</a>
            </p>
       </form>
     </div>

    </div>
    )
}

export default Login;