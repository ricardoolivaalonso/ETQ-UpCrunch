import { InstagramCardComponent } from '../03-components/InstagramCardComponent'
import InstagramIcon from '../../img/instagram.svg'
import { InstagramItem } from './InstagramSectionData'

let InstagramSection = () => {
    return(
        <section className="instagram">
            <div className="instagram__main-title">
                <img src={InstagramIcon} alt="#placeholder" className="instagram__icon"/>
                <h3 className="instagram__title">Instastore</h3>
            </div>
            <div className="instagram__container">
                {
                    InstagramItem.map( i => (
                        <InstagramCardComponent 
                            key={i.id}
                            img={i.img}
                            link={i.link}
                            description={i.description}
                            likes={i.likes}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export { InstagramSection }