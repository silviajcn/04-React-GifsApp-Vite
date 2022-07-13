import { FaLink } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';
//import { useState } from "react";

const notify = () => toast('Link copied to clipboard!', {position: 'top-center'});

const CopyLink = ({ link }) => {

    //Otra forma de hacer la notificacion sin el toaster. Con el useState:
    //const [copied, setCopied] = useState(false);

    return (
        <>
            <CopyToClipboard text={link}>
                <button
                    //onClick={() => setCopied(true)}
                    onClick={notify} 
                    className="link-icon"
                    aria-label="button copy link"
                >
                    <FaLink className="link-icon" />
                </button>
            </CopyToClipboard>

            {/* <p style={{ textAlign: "center" }}>
                {copied && <span>Link copiado</span>}
            </p> */}

            <Toaster toastOptions={{className: 'toaster'}} />
        </>
    )
};

export default CopyLink;