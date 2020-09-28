 import React from 'react'
 import {Link} from 'gatsby'
 import icon from '../assets/icon/author_icon.png'


 const main = () =>{
 	return(
 		<section className="main-section container">
 			<div className="columns">

 				 <div className="column">
 				 	 <div className="wrapper-heading-content">
 				 	 	<h1>About Me</h1>
 				 	 </div>
 				 </div>

 				 <div className="column is-three-fifths section-main-contents">
 				  	<p>
 				  	   <span className="icon-auhtor">
 				  			<img alt="author_icon" src={icon} />
 				  			<span className="author-name-tagline">Valentine Cardinale
 				  				<span className="author-fx">/ New york</span>
 				  			</span>
 				  		</span>
 				  	</p>

 				  	<p>
 					  Was born in New York City on February 14, 1935. 
 					  His parents were both hard working Italian immigrants who owned a deli on the West Side of 
 					  Manhattan known as Hell’s Kitchen. Cardinale often helped his parents with their business
 					  but all the while he dreamt of becoming a baseball or hockey player. 
 					  He was an avid New York Rangers fan as well as a New York Yankees fan.
					</p>

					<p>
 				  		Val attended Cardinal Hayes High School, Bronx, and then Iona College
 				  		in New Rochelle, NY earning a Bachelor of Arts degree in English Language/Literature.
					</p>

					<button className="btn-main-customize"><Link> Read More</Link></button>

 				 </div>
 			</div>
 		</section>
 	)
 }

 export default main;