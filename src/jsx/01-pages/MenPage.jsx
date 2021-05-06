import MetaTags from 'react-meta-tags'
import { HeroSection } from "../02-sections/HeroSection"
import { StoreSection } from "../02-sections/StoreSection"
import { HeroItem, StoreItem } from './MenPageData'
import { motion } from "framer-motion"

let MenPage = ({variants}) => {
    return (
        <>
         	<MetaTags><title>Men</title></MetaTags>
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

export { MenPage }