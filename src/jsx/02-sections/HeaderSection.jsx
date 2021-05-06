import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

let HeaderSection = () => {

    const [isHeaderFixed, setIsHeaderFixed] = useState(false)
    const headerFixed = (e) => window.scrollY > 100 ? setIsHeaderFixed(true) : setIsHeaderFixed(false)

    useEffect(()=>{
        window.addEventListener('scroll', headerFixed)
        return () => window.removeEventListener('scroll', headerFixed)
    },[])

    return (
        <header className="header">
            <nav className={`menu ${isHeaderFixed && 'is-menu-fixed'}`}>
                <ul className="menu__list ">
                    <li className="menu__item menu__item--mbl">
						<NavLink to="/" exact={true} className={`menu__etq ${isHeaderFixed && 'is-menu-black'}`}>ETQ.</NavLink>
                    </li>
                    <li className="menu__item">
						<NavLink to="/men" exact={true} className={`menu__link ${isHeaderFixed && 'is-menu-black'}`}>Men</NavLink>
                    </li>
                    <li className="menu__item">
						<NavLink to="/women" exact={true} className={`menu__link ${isHeaderFixed && 'is-menu-black'}`}>Women</NavLink>
                    </li>
                </ul>
                <div className="menu__profile">
                    <a className={`menu__link ${isHeaderFixed && 'is-menu-black'}`} href="#placeholder">Search</a>
                    <a className={`menu__link ${isHeaderFixed && 'is-menu-black'}`} href="#placeholder">Help</a>
                    <a className={`menu__link ${isHeaderFixed && 'is-menu-black'}`} href="#placeholder">My account</a>
                </div>
            </nav>
        </header>
    )
}

export { HeaderSection }