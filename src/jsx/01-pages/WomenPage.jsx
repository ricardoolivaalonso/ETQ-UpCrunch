import MetaTags from 'react-meta-tags'
import { HeroSection } from "../02-sections/HeroSection"
import { StoreSection } from "../02-sections/StoreSection"
import { HeroItem, StoreItem  } from './WomenPageData'
import { motion } from "framer-motion"

let WomenPage = ({variants}) => {
    return (
        <>
         	<MetaTags><title>Women</title></MetaTags>
            <motion.div 
                variants={variants} 
                initial={variants.hidden}
                animate={variants.visible}
                exit={variants.exit}
            >
                <HeroSection HeroItem={HeroItem} />
                <StoreSection StoreItem={StoreItem}/>
            </motion.div>
        </>
    )
}

export { WomenPage }