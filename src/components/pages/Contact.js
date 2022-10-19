import React from 'react';
import styled from 'styled-components';
import background from './detailCover.jpg'
const Contact = () => {
    const Wrapper = styled.section`
    .container {
        text-align: left;
        

        .contact-form{
            max-width: 30rem;
            margin-left: 65%;
            margin-top: -43%;
        }

        .contact-inputs{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
    `;
  return (
    <div  style={{background: 'url(https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp) no-repeat center center fixed',
    backgroundSize: 'cover',
    height: '90vh'}}>
    <Wrapper className='section'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d110128.38019647067!2d76.7500464489617!3d30.3932156474972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665066476724!5m2!1sen!2sin"
        width="50%" 
        height="450" 
        style={{border:0,margin:'3% 0% 0% 7%',borderRadius:10}}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="container">
            <div className="contact-form" style={{color:'white'}}>
                <form action='#' className='contact-inputs'>
                    <h1 style={{fontSize:'60px'}}>CONTACT US</h1>
                    <div className="inputBox">
                        <h3>Enter Username</h3>
                        <input type="text" name="username" style={{width:'80%',height:'43px',borderRadius:'12px'}} placeholder="Enter Username" required/>
                    </div>
                    
                    <div className="inputBox">
                        <h3>Enter Email</h3>
                        <input type="email" name="email" style={{width:'80%',height:'43px',borderRadius:'12px'}} placeholder="Enter Email" required/>
                    </div>

                    <div className="inputBox">
                    <h3>Enter Message</h3>
                        <textarea name='message' style={{width:'80%',height:'69px',borderRadius:'12px'}} placeholder="Enter Message" required/>
                    </div>
                    
                    <div className="inputBox">
                        <input className='btn btn-primary'  type="submit" />
                    </div>
                </form>
            </div>
        </div>
    </Wrapper>
    </div>
  )
}
export default Contact;