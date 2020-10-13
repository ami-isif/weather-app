import React from 'react';

function SignUp(){
    return(
       <div className="card signup-page">

        <div className="card-body">
           <h1>sign up</h1>      
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username Here"/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm password"/>
        </div>
        <button type="submit" className="btn btn-primary btn-success">Sign up now</button>
        <p className="mt-4">
              Already have an account? <a href="htpps://google.com">Sign in Here</a>
            </p>
       </form>
     </div>   

</div>
    )
}
export default SignUp;
