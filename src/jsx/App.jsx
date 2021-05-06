import { HeaderSection } from "./02-sections/HeaderSection"
import { HomePage } from "./01-pages/HomePage"
import { MenPage } from "./01-pages/MenPage"
import { WomenPage } from "./01-pages/WomenPage"
import { FooterSection } from "./02-sections/FooterSection"

import { Route, Redirect, Switch, useLocation } from 'react-router-dom'
import { ScrollToTop } from './00-helpers/ScrollToTop'
import { AnimatePresence } from "framer-motion"
import MetaTags from 'react-meta-tags'
import Favicon from '../img/favicon.png'

let App = () => {

	let location = useLocation()

	const variants = {
		hidden: { opacity: .035 },
		visible: { opacity: 1, transition: { delay: .5, duration: 1.5 } },
		exit: { transition: { ease: 'easeInOut' } }
	}
	
	return(
		<div className="main">
			<MetaTags>
				<link rel="shorcut icon" type="image/x-icon" href={Favicon}/>
			</MetaTags>
			<ScrollToTop />
			{/*  */}
			<HeaderSection />
			<AnimatePresence exitBeforeEnter >
				<Switch location={location} key={location.key}>
					<Route path="/" exact >
						<HomePage variants={variants}/>
					</Route>
					<Route path="/men" exact >
						<MenPage variants={variants}/>
					</Route>
					<Route path="/women" exact >
						<WomenPage variants={variants}/>
					</Route>
					<Route>
						<Redirect to="/" />
					</Route>
				</Switch>
			</AnimatePresence>
			<FooterSection />
		</div>
	)
}

export default App;
