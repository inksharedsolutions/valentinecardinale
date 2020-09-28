import React from 'react'
import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navlist from './links'
import FooterLogo from '../assets/img/icon-logo/logo_v.png'
	
const footer = (props) =>{

	return(
			<footer className="footer-section">
				<div className="container">

					<div className="columns navlist-footer-column">
						<div className="column text-center trademark-heading">

							<div className="logo-footer-container">

								<span className="images-portray">
									<img 
										alt="footer-logo"
										src={FooterLogo} />
								</span>

								<h1>
									Valentine.
								</h1>

							</div>
						
							<p>
								Valentine Cardinale loves to hear from readers. You can reach him via email. 
								Feel free to send questions about writing, his works, interviews 
								and other publicity matters.
							</p>

						</div>

						<div className="column">
							<nav className="footer-nav-list">

								<Navlist arrList={props.navList}/>
								
							</nav>	
						</div>
					</div>

					<div className="columns">
						<div className="column">
							<span className="footer-copyright">

								<span className="footer-year">{
									( new Date() ).getFullYear()
								}</span>

								&#169; Copyright. Stratton press
							</span>


						 	<span class="lower-nav-footer">
						 		<Navlist arrList={[
						 			'Terms and Conditions',
						 			'Privacy Policy']}
						 			/>
						 	</span>
							
						</div>
						
						<div className="column text-center trademark-heading">
							<nav id="style_soc_medias">

								<a
									href="https://www.facebook.com/Valentine-Cardinale-524247524709624/"
									target="_blank"
									rel="noopener noreferrer" >

									<FontAwesomeIcon
										className='font-awesome'
										icon={faFacebook} />
								</a>

								<a
									href="https://twitter.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faTwitter} />
								</a>

								<a 

									href="https://www.instagram.com/strattonpress/"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon
										className='font-awesome'
										icon={faInstagram} />
								</a>

								<a 
									href="https://www.goodreads.com/book/show/45784456-the-west-side-kid"
									target="_blank"
									rel="noopener noreferrer">

									<FontAwesomeIcon 
										className='font-awesome'
										icon={faGoodreads} />
								</a>

							</nav>
						</div>
					</div>
					
				</div>			
			</footer>
	)	
}


export default footer