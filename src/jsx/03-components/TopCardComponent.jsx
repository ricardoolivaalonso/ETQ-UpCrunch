import { DescriptionElement } from "../04-elements/DescriptionElement"
import { TitleElement } from "../04-elements/TitleElement"

let TopCardComponent = ({img,title,description}) => {
    return(
        <article className="top__item">
            <img className="top__img" src={img} alt="#placeholder" />
            <div className="top__info">
                <TitleElement>{title}</TitleElement>
                <DescriptionElement>{description}</DescriptionElement>
            </div>
        </article>
    )
}

export { TopCardComponent }