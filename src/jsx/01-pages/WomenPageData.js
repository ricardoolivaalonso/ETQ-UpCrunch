import HeroImg from '../../img/women.jpg'
import HeroImgMobile from '../../img/women-m.jpg'

import StoreImg1 from '../../img/women-1.jpg'
import StoreImg2 from '../../img/women-2.jpg'
import StoreImg3 from '../../img/women-3.jpg'
import StoreImg4 from '../../img/women-4.jpg'
import StoreImg5 from '../../img/women-5.jpg'
import StoreImg6 from '../../img/women-6.jpg'

let StoreItem = [
    {
        id: 1,
        img: StoreImg6,
        title: 'XR 01 Steel White',
    },
    {
        id: 2,
        img: StoreImg5,
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
        img: StoreImg1,
        title: 'LT 01 Grey',
    },
    {
        id: 6,
        img: StoreImg2,
        title: 'LT 01 Anthracite',
    },
]

let HeroItem = {
    title: 'Spring Summer',
    subtitle: 'Women collection',
    hero: HeroImg,
    heroMobile: HeroImgMobile
}

export { HeroItem, StoreItem  }