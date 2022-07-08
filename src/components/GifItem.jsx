import { GoHeart } from 'react-icons/go';
import CopyLink from './CopyLink';

const GifItem = ({ title, url}) => {

    return (
        <div className="card">

            <div className='container-btns-icons'>
                <CopyLink link={url} />
                <button className="fav-icon" aria-label="btn-fav">
                    <GoHeart className="fav-icon"/>
                </button>
            </div>

            <img src={url} alt={"image gif" + title} />
            
            <p className="title-card">{title}</p>
        </div>
    )
};

export default GifItem;