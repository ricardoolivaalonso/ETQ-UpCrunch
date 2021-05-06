import { TitleElement } from "../04-elements/TitleElement"

let StoreCardComponent = ({img,title}) => {
    return(
        <article className="store__item" tabIndex="0"  aria-label="Sssasas">
            <div className="store__info">
                <TitleElement>{title}</TitleElement>
            </div>
            <img className="store__img" src={img} alt="placeholder" />
        </article>
    )
}

export { StoreCardComponent }