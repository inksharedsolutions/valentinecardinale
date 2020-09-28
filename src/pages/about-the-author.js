import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/icon/author_icon.png'


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Valentine Cardinale</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Author</span>
			</h1>
		</>
	)

	return(
		<Layout>

			<Banner bannerContext={bannerText} defProps={props} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img src={icon} />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Valentine Cardinale
					 				</span>
					 			</div>

					 			<h4>
					 				Fate is so intertwined with time.
					 				The past will always meet the present.
					 			</h4>

					 			<span className="ata-span-fx">author quote</span>
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p>
						 	 		Valentine Cardinale was born in New York City on February 14, 1935. His parents were
									both hard working Italian immigrants who owned a deli on the West Side of Manhattan known
									as Hell’s Kitchen. Cardinale often helped his parents with their business but all the while he
									dreamt of becoming a baseball or hockey player. He was an avid New York Rangers fan as well
									as a New York Yankees fan.
								</p>

								<p>
									Val attended Cardinal Hayes High School, Bronx, and then Iona College in New
									Rochelle, NY earning a Bachelor of Arts degree in English Language/Literature. He continued
									his love for writing and pursued a Master’s Degree in Journalism from Columbia School of
									Journalism in 1958. Valentine served in the United States Army Reserves from 1958-1964. It
									was during that time that he married Mary O’Brien, an Upper West Side girl.
									From 1964 through 1980 Valentine served as Editor of Advertising News of New York
									(ANNY) and ADWEEK magazines both based in New York City. Following that, he was
									appointed Editor-in-Chief of Drug Topics magazine which was then located in New Jersey.
									During his tenure with Drug Topics, Valentine won many awards for his
									writing including a Jesse H. Neal Award.
								</p>	

								<p>
									Shortly after retirement in 2001, Val followed his true passion and began his next journey
									as a novelist. ​The Terranovas: A War Family​, his first book, was loosely based on Val’s life and
									family. ​The West Side Kid​ came next and also featured Valentine’s hometown of Hell’s Kitchen.
									
									It received a NABE (National Association of Book Entrepreneurs) Pinnacle Book Achievement
									Award for Best Book in the Mystery Category 2010. ​One More Dance​ followed by ​Breakaway
									were his most recent novels. ​One More Dance​ received a NABE Pinnacle Award for Best Book
									in the Romantic Mystery Category Summer 2014. In ​Breakaway​, Cardinale highlighted his
									favorite pastime--hockey. ​Breakaway​ was recognized with an Independent Press Award,
									Distinguished Favorite--Mystery, 2017.

									Throughout Val’s career as a novelist, he proudly enjoyed watching his two
									grandchildren, Brian Valentine and Olivia Mary, be born and grow into terrific teenagers. Sadly,
									Valentine passed away on July 15, 2018. However, his stories live on through the characters
									and stories he so lovingly created.
					 	 		</p>

					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor