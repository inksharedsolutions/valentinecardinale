import React from 'react'
import horse from '../assets/img/banner/horse.png'

const banner = (props) => {


	console.log(props.defProps.path);

	return(
		<section className="web-banner">
			<div className="container">
				<div className="columns">
					 <div className="column">
					 	 <div className="banner-ext-stream">

						 	<img 
						 		alt="horse-ext" 
						 		src={horse} />

						 </div>
					  </div>

					  <div className="column is-three-fifths banr-foxtrot-heading">
					  	 <div className="wrapper-banner">
					  	 
							{props.bannerContext}

					     </div>
					  </div>
				</div>
			</div>
		</section>
	)
}

export default banner