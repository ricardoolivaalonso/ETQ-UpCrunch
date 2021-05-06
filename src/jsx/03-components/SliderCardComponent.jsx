import { DescriptionElement } from "../04-elements/DescriptionElement"
import { TitleElement } from "../04-elements/TitleElement"

let SliderCardComponent = ({img,title,description}) => {
    return(
        <article className="slider__item">
            <img className="slider__img" src={img} alt="placeholder" />
            <div className="slider__info">
                <TitleElement>{title}</TitleElement>
                <DescriptionElement>{description}</DescriptionElement>
            </div>
        </article>
    )
}

export { SliderCardComponent }