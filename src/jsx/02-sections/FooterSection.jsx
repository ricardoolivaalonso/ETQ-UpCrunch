import { FooterCardComponent } from '../03-components/FooterCardComponent'
import { FooterItem, FooterImgs } from './FooterSectionData'

let FooterSection = () => {
    return(
        <footer className="footer">
            <ul className="info">
                {
                    FooterItem.map( i => 
                        <FooterCardComponent 
                            key={i.id}
                            title={i.title}
                            descriptions={i.descriptions}
                            links={i.links}
                        />
                    )
                }
            </ul>
            <div className="faq">
                <form className="newsletter">
                    <label htmlFor="n-input" className="newsletter__label">Newsletter</label>
                    <input type="text" id="n-input" className="newsletter__input"/>
                    <input type="submit" className="newsletter__submit"/>
                </form>
                <div className="terms">
                    { FooterImgs.map( i => <img key={i.id} src={i.img} alt="#placeholder" className="terms__icon"/> ) }
                </div>
                <div className="terms-g">
                    <a href="#placeholder" className="terms__link">Terms & Conditions</a>
                    <a href="#placeholder" className="terms__link">Privacy Statement</a>
                </div>
            </div>
        </footer>
    )
}

export { FooterSection }