import React, { useState, useEffect } from "react";
import './Home.css';
import chef1 from './joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';
import chef2 from './dahiana-waszaj-XQWfro4LrVs-unsplash.jpg'
import chef3 from './chef3.jpg';
import italian from './italian.jpg';
import french from './french.jpg';
import japanese from './japanese.jpg';
import indian from './indian.jpg';
import thailand from './thailand.jpg'
import mexican from './mexican.jpg'

const Home = () => {
  return (
    <React.Fragment>
  <header>
    <a name="home"></a>
    <div className="container-fluid">
      <div className="more-space row">
        <div className="col-md-12">
          <div className="text-center intro">
            <h1><b>Zero Hunger</b></h1>
            <br></br><br></br>
            <h4>No Justice When Half the World Is Hungry!</h4>
            <h4 style={{color:'yellow'}}>Upto 60% off on your first order !!</h4>
          </div>
        </div>
      </div>
    </div>
  </header>

  {/* <!----ABOUT US----> */}

  <div className="about-us" style={{paddingTop:'-20px'}}>
    <a name="about"></a>
    <div className="container-fluid">
      <div className="row text-center">
        <div className="descript col-xs">
          <h1><b>ABOUT US</b></h1>
          <p className="about-us-p">“We ought to be about something beyond moving chicken. We ought to be a piece of our client’s lives and the networks in which we serve.”
Our originator, settled on the choice to close on Sundays in 1946 when he opened his first eatery in Hapeville, Georgia. Having worked seven days in eateries
 open 24 hours, Truett saw the significance of shutting on Sundays with the goal that he and his representatives could set aside one day to rest and love whether they pick – a training we maintain today.
<br></br><br></br>
Building up a positive heritage in our very own lawn

We’re glad for our Georgia legacy, and all the more explicitly that we consider Atlanta the place where we grew up. Our central command, referred to inside the organization as the Support Center for eatery Operators, is found only outside of downtown.

We are accomplices with the more prominent Atlanta business network in generous undertakings, attempting to animate the neighborhood economy through employment creation, just as driving stewardship activities planned to leave Georgia superior to anything we discovered it.
</p>

<h2 style={{color:'white',fontSize:'90px'}} className="about-us-p">Our Team</h2>
<div class="container">
<div class="row">
            <div className="col mb-4 team">
                <div class="card">
                    <img src={chef1} alt="" width='100%' height="400px" />
  
                    <div class="card-body">
                        <h5 class="card-title">Joseph</h5>
                        <p>Co-Founder</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 team">
                <div class="card">
                <img src={chef2} alt="" width='100%' height="400px" />
  
                    <div class="card-body">
                        <h5 class="card-title">Christine</h5>
                        <p>Marketing head</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb team">
                <div class="card">
                    <img class="card-img-top" src={chef3} alt="" height='400px' />
  
                    <div class="card-body">
                        <h5 class="card-title">Andrew</h5>
                        <p>Catering manager</p>
                    </div>
                </div>
            </div>
</div>




</div>

        </div>
      </div>
    </div>
  </div>

  <div className="break2 container-fluid text-center">
    <h3 style={{fontSize:'120px'}}>Some of Our<br/><span style={{color:'yellow',fontSize:'140px'}}> Best Knowns</span> </h3>
  </div>
{/* 
  <!----SERVICES----> */}
  <div className="works">
    <a name="works"></a>
    <div className="container-fluid">

      <div className="row">
        <div className="text-center col-xs-12 col-sm-12 col-md-12">
          <h1><b>Cuisines</b></h1>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-10 col-sm-4 col-md-4">
          <div className="thumbnail">
            <img src={italian} width='100%' height='480px' />
            <div className="caption" style={{marginTop:'6%'}}>
              <h3><b>Italian Cuisines</b></h3>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="thumbnail" >
            <img src={mexican} width='100%' height='480px'/>
            <div className="caption" style={{marginTop:'6%'}}>
              <h3><b>Mexican Cuisines</b></h3>
              
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="thumbnail">
            <img src={japanese} width='100%' height='480px' />
            <div className="caption" style={{marginTop:'6%'}}>
              <h3><b>Japanese Cuisines</b></h3>
            </div>
          </div>
        </div>

      </div>

      <div className="space row">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="thumbnail">
            <img src={french} width='100%' height='480px' />
            <div className="caption" style={{marginTop:'6%'}}>
              <h3><b>French Cuisines</b></h3>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="thumbnail">
            <img src={indian} width='100%' height='480px' />
            <div className="caption" style={{marginTop:'6%'}}>
              <h3><b>Indian Cuisines</b></h3>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="thumbnail">
            <img src={thailand} width='100%' height='480px' />
            <div className="caption" style={{marginTop:'6%'}}>
              <h3><b>Thailand Cuisines</b></h3>
            </div>
          </div>
        </div>

      </div>


    </div>
  </div>

  <div className="break1 container-fluid text-center">
    <h3 style={{fontSize:'90px',color:'light'}}>Come and join us <br></br><span style={{color:'yellow',fontSize:'110px'}}>on this journey !!</span></h3>
  </div>

  <div className="contact text-center">
    <a name="contact"></a>
    {/* <div className="container-fluid"> */}
      <div className="row">
        <div className="icon col">
          <a href="#"><i className="fa fa-facebook"></i></a>
        </div>
        <div className="icon col">
          <a href="#"><i className="fa fa-twitter"></i></a>
        </div>
      </div>

      <div className="row">
        <div className="icon col">
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
        <div className="icon col">
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>
  {/* </div> */}
</React.Fragment>
  );
};

export default Home;
