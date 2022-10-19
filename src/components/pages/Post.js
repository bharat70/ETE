import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {arr} from './PostForm';
import dark from './dark.jpg';
const parentDiv = {
	align: 'center',
	margin: '0px auto auto auto',
	textAlign: 'center',
}

const heading={
	fontSize:"75px",
	padding:20,
	// borderBottom:'2px solid lightgrey'
}
const btn={
	marginLeft:'-100%',
	marginBottom:'7%',
	// border:'2px solid lightgrey',
	// backgroundColor:'lightgrey',
	height:'45px',
	width:'95px',
	textAlign:'center',
	// borderRadius:"12px",
	fontSize:"20px",
	// color:"lightblack"
}
const im={
	marginRight:'24px',
	borderRadius:12,
	alignItems:'center'
}
const dar={
	backgroundImage: `url(${dark})`,
    backgroundSize: 'cover',
    height: '90vh',
    color:'white'
}

function Post() {
return (
	<div style={dar}>
	<div style={parentDiv}>
	<h1 style={heading}>All Posts</h1>
	<hr></hr>
	<div
	style={{ width: '50%', margin: '0px auto' }}
	>
        <Link to='/picture'>
			<button style={btn} className='btn btn-outline-danger btn-dark'>Back</button>
		</Link>
		<table>
			<tbody>
				{(arr.map((a)=>(
						<tc key={`${a}`}>
							<td>
							<img style={im} src={localStorage.getItem(a)} width="220px" height="220px" />
							</td>
						</tc>
				)))}
			</tbody>
		</table>
	</div>
	</div>
	</div>
);

}
export default Post;
