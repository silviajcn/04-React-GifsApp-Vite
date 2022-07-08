import { GoHeart } from "react-icons/go";
//import { FaLink } from "react-icons/fa";

const GifItem = ({ title, url}) => {

    return (
        <div className="card">
            {/* <FaLink className="fav-icon"/> */}
            <button className="container-fav-icon" aria-label="btn-fav">
                <GoHeart className="fav-icon"/>
            </button>
            <img src={url} alt={"image gif" + title} />
            <p className="title-card">{title}</p>
        </div>
    )
};

export default GifItem;