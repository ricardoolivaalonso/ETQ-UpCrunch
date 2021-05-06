import { StoreCardComponent } from "../03-components/StoreCardComponent"

let StoreSection = ({StoreItem}) => {

    return (
        <section className="store">
            <div className="store__list">
            {
                StoreItem.map( i => (
                    <StoreCardComponent
                        key={i.id}
                        img={i.img}
                        title={i.title}
                    />
                ))
            }
            </div>
        </section>
    )
}

export { StoreSection }
