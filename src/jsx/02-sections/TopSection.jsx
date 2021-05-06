import { TopCardComponent } from '../03-components/TopCardComponent'
import { TopItem } from './TopSectionData'

let TopSection = () => {
    return(
        <section className="top">
            {
                TopItem.map( i => (
                    <TopCardComponent
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

export { TopSection }