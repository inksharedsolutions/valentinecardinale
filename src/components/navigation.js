import React from 'react'
import { Link } from 'gatsby'
import Navlist from './links';
import MainLogo from '../assets/img/icon-logo/logo_v.png'


class Navigation extends React.Component {

	constructor() {
	  	super();
	  	this.state = { screenWidth: null };
	  	this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	    window.addEventListener("resize", this.updateWindowDimensions());
	}

	componentWillUnmount() {
	    window.removeEventListener("resize", this.updateWindowDimensions)
	}

	updateWindowDimensions() {
	   const isMobile =  window.innerWidth < 990  ? true : false;
	   this.setState({ screenWidth: isMobile});
	}

	render(){

		return(

			<nav className="main-navigation">

				{this.state.screenWidth && (

					<div className="mobileNav">
						<nav role="navigation">
							 <div id="menuToggle">

							    <input
							    	type="checkbox" />
							    
							    <span></span>
							    <span></span>
							    <span></span>

								<ul id="menu">
									<Navlist 
										arrList={this.props.navList} />
							    </ul>

							 </div>
						</nav>
					</div>

				)}

				<div className="container">
					<div className="columns">
						<div className="column">
							<div className="logo-container-fx">
								<Link  to={'/'} >
									<img 
									 	alt="main_logo"
										src={MainLogo}
									/>

									<h1>Valentine.</h1>
								</Link>
							</div>

						</div>

						<div 
							className="column align-right" 
							id="main-navigation">

							<Navlist 
								arrList={this.props.navList} />

						</div>
					</div>
				</div>
			</nav>

		)

	}
}


export default Navigation;