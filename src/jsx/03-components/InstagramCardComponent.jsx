import { DescriptionElement } from "../04-elements/DescriptionElement"
import { TitleElement } from "../04-elements/TitleElement"

let InstagramCardComponent = ({ img, link, description, likes }) => {
    return(
        <article className="instagram__item">
            <img className="instagram__img" src={img} alt="placeholder" />
            <div className="instagram__info">
                <TitleElement>{link}</TitleElement>
                <DescriptionElement mod={'instagram__description'}>{description}</DescriptionElement>
                <span className="instagram__likes">{likes}</span>
            </div>
        </article>
    )
}

export { InstagramCardComponent }