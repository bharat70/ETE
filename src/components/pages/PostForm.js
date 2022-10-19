import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from './bbn.jpg';
const galleryStyle ={
border: 'none',
margin: '40px 0px 30px 50px',
color: '#fff',
fontWeight: 'bold',
padding: '16px 20px',
position: 'absolute',
top: '35px',
right: '200px',
background: 'green',
borderRadius:'12px',
}
const postBtnStyle = {
border: 'none',
margin: 0,
color: 'white',
fontWeight: 'bold',
padding: '16px 20px',
background: 'purple',
width: '417px',
borderRadius:'12px',
}
const parentDiv = {
align: 'center',
margin: '0px auto auto auto',
textAlign: 'center',
backgroundImage: `url(${background})`,
backgroundSize: 'cover',
height: '90vh',
// opacity:0.8,
}
const formStyle = {
width: '600px',
height:'200px',
border: '2px solid lightgrey',
margin: '10px auto 10px auto',
textAlign: 'center',
padding: '30px 40px 30px 40px',
borderRadius:'12px',
}
const inputFields = {
width: '100%',
height:'50px',
fontFamily: 'arial',
// padding: '6px',
textAlign:"center",
borderRadius:'10px',
border:'1.5px solid grey',
}


var get =localStorage.getItem(-1);
var arr=[];
var a=0;
if(get!=null){
  for(let i=0;i<=get;i++){
    arr[i]=i;
  }
  a=get;
  ++a;
}

class PostForm extends Component {
handleSubmit = (e) => {
	e.preventDefault();
	const image = this.getImage.value;
	localStorage.setItem(a, image);
	this.getImage.value = '';
  localStorage.setItem(-1,a);
  arr.push(a);
  ++a;
}
render() {
return (
	<div style={parentDiv} >
	<h1 style={{color:'white',fontSize:'65px'}}>One Place<br/>
	<span style={{color:'yellow'}}>For All Your Images</span>
	</h1>
	<hr></hr>
	<h3 style={{color:'white'}}>Create a new Post</h3>
	<form onSubmit={this.handleSubmit} style={formStyle}>
		<input style={inputFields} required type="text"
		placeholder="Paste your image url here"
		ref={(input) => this.getImage = input}
		/><br></br>
		<br></br>
		<button style={postBtnStyle}>Post</button>
	</form>
	<Link to='/post'>
		<button style={galleryStyle}>
		View Gallery
		</button>
	</Link>

	</div>
);
}
}
export {PostForm ,arr};