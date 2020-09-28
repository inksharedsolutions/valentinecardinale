import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Main from '../components/main'
import MainBottom  from '../components/main-bottom'
import Newsletter  from '../components/newsletter'
import Banner from "../components/banner"

const IndexPage = (props) => {
	

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Tagline</span>

			<h1 className="front-banr-header-fx">
				You can run, you can hide,
				<span className="banr-spn-highlight">you can disappear</span>

				<p className="paragraph-content">
					and the secrets and nightmares of the past
					will always find its way to haunt you. However,
					fate has a thing for surprises, and it may be
					a happy ending if you're brave enough to confront it.
				</p>

				<Link
					key="banr-btn"
					className="btn-link-banr button is-link" 
					to="/about-the-book">Read More
				</Link>
			</h1>
		</>
	)

	return (
	  	<Layout>
	  		 <Banner bannerContext={bannerText}  defProps={props} />
			 <Main/>
			 <MainBottom />
			 <Newsletter />
	  	</Layout>
  	)

}

export default IndexPage
