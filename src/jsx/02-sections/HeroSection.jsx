import { MainSubtitleElement } from "../04-elements/MainSubtitleElement"
import { MainTitleElement } from "../04-elements/MainTitleElement"

let HeroSection = ({HeroItem}) => {
    return (
       <section className="hero">
            <picture className="hero__picture">
                <source media="(min-width:1024px)" srcSet={HeroItem.hero}/>
                <img className="hero__img" src={HeroItem.heroMobile} alt="placeholder"/>
            </picture>
            <div className="hero__info">
                <MainTitleElement>{HeroItem.title}</MainTitleElement>
                <MainSubtitleElement>{HeroItem.subtitle}</MainSubtitleElement>
            </div>
       </section>
    )
}

export { HeroSection }