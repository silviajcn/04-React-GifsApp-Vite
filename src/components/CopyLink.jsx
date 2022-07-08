import { FaLink } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';

const notify = () => toast('Link copied to clipboard!', {position: 'top-center'});

const CopyLink = ({ url }) => {
    return (
        <>
            <CopyToClipboard text={url}>
                <button onClick={notify} className="link-icon">
                    <FaLink className="link-icon"/>
                </button>
            </CopyToClipboard>

            <Toaster toastOptions={{className: 'toaster'}} />
        </>
    )
};

export default CopyLink;