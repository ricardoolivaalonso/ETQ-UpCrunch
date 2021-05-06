import MetaTags from 'react-meta-tags'
import { HeroSection } from "../02-sections/HeroSection"
import { SliderSection } from "../02-sections/SliderSection"
import { TopSection } from "../02-sections/TopSection"
import { InstagramSection } from "../02-sections/InstagramSection"
import { HeroItem } from './HomePageData'
import { motion } from "framer-motion"

let HomePage = ({variants}) => {
    return (
        <>
        	<MetaTags><title>Home</title></MetaTags>
            <motion.div 
                variants={variants} 
                initial={variants.hidden}
                animate={variants.visible}
                exit={variants.exit}
            >   
                <HeroSection HeroItem={HeroItem}/>
                <SliderSection />
                <TopSection />
                <InstagramSection />   
            </motion.div>
        </> 
    )
}

export { HomePage }