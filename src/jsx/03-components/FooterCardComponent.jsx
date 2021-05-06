import { useState } from 'react'

let FooterCardComponent = ({title,descriptions,links}) => {
    
    const [isItemVisible, setIsItemVisible] = useState(false)

    return(
        <details className="info__item" open onClick={(e)=>e.preventDefault()}>
            <summary className="info__title"  tabIndex="-1" >
                {title}
                <button className="info__icon" onClick={ (e)=>setIsItemVisible(!isItemVisible) } >
                    <span className="info__icon-1"></span>
                    <span className={`info__icon-2 ${isItemVisible && 'is-icon-hide'}`} ></span>
                </button>
            </summary>
            <div className={`info__content ${isItemVisible && 'is-info-visible'}`}>
                { descriptions.map( i => <p key={i.id} className="info__description">{i.description}</p> ) }
                { links.map( i => <a href="#placeholder" key={i.id} className="info__link" tabIndex="0">{i.link}</a> ) }
            </div>
        </details>
    )
}

export { FooterCardComponent }