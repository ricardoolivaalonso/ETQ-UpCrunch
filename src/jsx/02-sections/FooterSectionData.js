import FooterImg1 from '../../img/footer-1.png'
import FooterImg2 from '../../img/footer-2.png'
import FooterImg3 from '../../img/footer-3.png'
import FooterImg4 from '../../img/footer-4.png'
import FooterImg5 from '../../img/footer-5.png'
import FooterImg6 from '../../img/footer-6.png'
import FooterImg7 from '../../img/footer-7.png'

let FooterImgs = [
    {id: 1, img: FooterImg1 },
    {id: 2, img: FooterImg2 },
    {id: 3, img: FooterImg3 },
    {id: 4, img: FooterImg4 },
    {id: 5, img: FooterImg5 },
    {id: 6, img: FooterImg6 },
    {id: 7, img: FooterImg7 },
]

let FooterItem = [
    {
        id: 1,
        title: 'About',
        descriptions: [
            { id: 1, description: 'Founded in 2010 in Amsterdam, ETQ derived under the mindset of eliminating over-accessorized branding and focusing primarily on letting the quality of the product speak for itself. Read more'} ,
            
        ],
        links: []
    },  
    {
        id: 2,
        title: 'Address',
        descriptions: [
            { id: 1, description: 'Singel 465' },
            { id: 2, description: '1012 WP Amsterdam' },
            { id: 3, description: 'The Netherlands' },
        ],
        links: []
    },  
    {
        id: 3,
        title: 'Contact',
        descriptions: [
            { id: 1, description: 'Email us' },
            { id: 2, description: '+31 (0) 202 615 614' },
        ],
        links: []
    },  
    {
        id: 4,
        title: 'Info',
        descriptions: [],
        links: [
            { id: 1, link: 'Shipping info' },
            { id: 2, link: 'Contact' },
            { id: 3, link: 'Careers' },
        ]
    },  
    {
        id: 5,
        title: 'Follow us',
        descriptions: [],
        links: [
            { id: 1, link: 'Instagram' },
            { id: 2, link: 'Facebook' },
        ]
    }
]

export { FooterItem, FooterImgs }