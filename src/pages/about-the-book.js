import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/book_main.png'
import { DiscussionEmbed } from "disqus-react"


const abouttheauthor= (props) =>{


	const slug =(props.location.href);

	const disqusConfig = {
	  shortname: 'valentine-cardinale',
	  config: { identifier:  12, slug}
	}

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Valentine Cardinale</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Book</span>
			</h1>
		</>
	)


	return(
		<Layout>
		
			<Banner bannerContext={bannerText} defProps={props} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">

							<div className="column">
								<div className="bookImgContainer">
									<img alt="main-book" src={Book} />
								</div>
							</div>

							<div className="column">
								<section className="contentBook">
									
									 <p>
									 	  Lorne Bennett, a movie star known as the West Side Kid to his fans, is a wanted man. 
										  When his thirty-one-year-old wife Aurora is found murdered in their elegant Manhattan apartment, 
										  he comes under suspicion and flees, leaving his four-month-old daughter Laura behind. Twenty-two years later,
										  he’s still on the run—the prime suspect in the notorious cold case. When a freak car accident throws him into the spotlight,
										  he feels forced to take off again after enjoying five relatively peaceful years under the radar in Arizona. Meanwhile, Laura, 
										  a copywriter now living in New York City, has become obsessed with learning as much as she can about her parents and what happened
										  the night her mother was murdered. With help from a few unlikely but trusted companions, she gradually starts putting the pieces together.
										  But the more she learns, the more her life and the lives of others are endangered.
									 </p>
									
										<nav className="booklinkBlocks">
										    <span>Ebook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/West-Side-Kid-Valentine-Cardinale-ebook/dp/B07RJZPKP1/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1557779553&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/west-side-kid-valentine-cardinale/1100361858?ean=9781643454917">Barnes & Noble</a></li>
										</nav>

										<nav className="booklinkBlocks">
											<span>Paperbook :</span>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/West-Side-Kid-Valentine-Cardinale/dp/1948654725/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1557779553&sr=8-1">Amazon</a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/west-side-kid-valentine-cardinale/1100361858?ean=9781948654722">Barnes & Noble </a></li>
											<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/West-Side-Kid/Valentine-Cardinale/9781948654722?id=7714171848832">Books A Million</a></li>
										</nav>

								</section>
							</div>
							
						</div>
							
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor