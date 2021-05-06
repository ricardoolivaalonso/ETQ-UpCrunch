import { SliderCardComponent } from '../03-components/SliderCardComponent'
import { SliderItem } from './SliderSectionData'

let SliderSection = () => {
    return(
        <section className="slider">
            {
                SliderItem.map( i => (
                    <SliderCardComponent
                        key={i.id}
                        img={i.img}
                        title={i.title}
                        description={i.description}
                    />
                ))
            }
        </section>
    )
}

export { SliderSection }