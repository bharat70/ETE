import React from "react";
import login from './login.jpg';

const im={
  backgroundImage: `url(${login})`,
    backgroundSize: 'cover',
    height: '90vh',
    color:'white'
}

const SignUp=()=>{
    return(
      <div style={im}>
        <div style={{padding:"8% 30% 0% 30%"}}>
            <h1 style={{margin:"0% 0% 5% 32%",fontSize:'65px'}}>SignUp</h1>
            <form>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" placeholder="First Name"/>
        {/* <label class="form-label" for="form3Example1">First name</label> */}
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" placeholder="Last Name"/>
        {/* <label class="form-label" for="form3Example2">Last name</label> */}
      </div>
    </div>
  </div>
  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" placeholder="Email Address"/>
    {/* <label class="form-label" for="form3Example3">Email address</label> */}
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" placeholder="Password"/>
    {/* <label class="form-label" for="form3Example4">Password</label> */}
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4" href="/">Sign up</button>
</form>
        </div>
        </div>
    )
}
export default SignUp;