import { GoHeart } from 'react-icons/go';
import CopyLink from './CopyLink';

export const StickerItem = ({ title, url }) => {
    return (
        <div className="card card3">

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