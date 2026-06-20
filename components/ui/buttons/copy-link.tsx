import React from 'react'
import { Button } from '../button';
import { Check, Copy } from 'lucide-react';

const CopyLink = () => {
    const [copied, setCopied] = React.useState(false);
    const [anim, setAnim] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setAnim(true);
        setTimeout(() => setAnim(false), 150);
        setTimeout(() => setCopied(false), 1400);
    };

    return (
        <Button
            variant={"share-gray-50"}
            size={"md"}
            className={`font-body-medium-500 transition-all duration-200 ${anim ? "scale-105" : ""
                }`}
            onClick={handleCopy}
        >
            {
                copied ?
                    <><Check size={24} /> Copied</>

                    :
                    <><Copy size={24} /> Copy Link </>
            }
        </Button>
    );
}

export default CopyLink