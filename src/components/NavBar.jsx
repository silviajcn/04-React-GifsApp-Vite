import { AiFillCaretDown } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/" className="links">
            <div className="container-logo">
                <img src="https://res.cloudinary.com/silviajcn/image/upload/v1657152060/CURSOS/React%20UDEY/Logos/logo-color.svg_srio40.png" alt="Logo GifApp" className="logo" />
                
                <h1 className="title">GifApp</h1>
                </div>
            </Link>    
            
            <div className="container-btns">
                <div className="menu-items-links">
                    <ul className="links-menu">
                        <NavLink to="/trending-gifs"
                        className={({ isActive }) => isActive? "active": 'links'}>
                            <li className="item-link">Trending</li>
                        </NavLink>

                        <NavLink to="/stickers"
                            className={({ isActive }) => isActive ? "active" : 'links'}>
                            <li className="item-link">Stickers</li>
                        </NavLink>
                        
                        <NavLink to="/fav-gifs"
                            className={({ isActive }) => isActive ? "active" : 'links'}>
                            <li className="item-link">Favorites</li>
                        </NavLink>   
                    </ul>
                </div>
                <div className="btns-actions">
                    <a className="btn-actions">
                        Upload
                    </a>

                    <a className="btn-actions">
                        Create
                    </a>
                </div>

                <div className="user-container">
                    <img src="https://media.giphy.com/avatars/default5/80h.gif" alt="avatar user" className="img-avatar" />
                    <p className="username">Silvi1344</p>
                    <div className="bottom-arow">
                        <AiFillCaretDown />
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;