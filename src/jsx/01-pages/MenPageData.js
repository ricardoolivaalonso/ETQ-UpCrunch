import HeroImg from '../../img/men.jpg'
import HeroImgMobile from '../../img/men-m.jpg'

import StoreImg1 from '../../img/store-1.jpg'
import StoreImg2 from '../../img/store-2.jpg'
import StoreImg3 from '../../img/store-3.jpg'
import StoreImg4 from '../../img/store-4.jpg'
import StoreImg5 from '../../img/store-5.jpg'
import StoreImg6 from '../../img/store-6.jpg'

let StoreItem = [
    {
        id: 1,
        img: StoreImg1,
        title: 'LT 01 Steel White',
    },
    {
        id: 2,
        img: StoreImg2,
        title: 'LT 01 Steel Blueberry',
    },
    {
        id: 3,
        img: StoreImg3,
        title: 'LT 01 Alloy',
    },
    {
        id: 4,
        img: StoreImg4,
        title: 'LT 01 Black',
    },
    {
        id: 5,
        img: StoreImg5,
        title: 'LT 01 Grey',
    },
    {
        id: 6,
        img: StoreImg6,
        title: 'LT 01 Anthracite',
    },
]

let HeroItem = {
    title: 'Awesome shoes',
    subtitle: 'Men collection',
    hero: HeroImg,
    heroMobile: HeroImgMobile
}

export { HeroItem, StoreItem }