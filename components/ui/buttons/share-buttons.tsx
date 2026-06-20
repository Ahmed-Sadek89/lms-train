import { Button } from '../button'

const getShareData = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = typeof document !== 'undefined' ? document.title : '';
    return { url, title };
};

export const FacebookShare = () => {
    const handleShare = () => {
        const { url } = getShareData();
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
    };
    return (
        <Button
            variant={"share-gray-50"}
            size={"icon-size"}
            className="group"
            onClick={handleShare}
            aria-label="Share on Facebook"
        >
            <svg
                className="text-gray-700 transition-colors duration-200 group-hover:text-primary-500"
                width="10" height="20" viewBox="0 0 10 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            >
                <path path='currentColor' d="M8.175 3.32083H10.0008V0.140833C9.68583 0.0975 8.6025 0 7.34083 0C4.70833 0 2.905 1.65583 2.905 4.69917V7.5H0V11.055H2.905V20H6.46667V11.0558H9.25417L9.69667 7.50083H6.46583V5.05167C6.46667 4.02417 6.74333 3.32083 8.175 3.32083Z"  />
            </svg>
        </Button>
    );
};

export const XShare = () => {
    const handleShare = () => {
        const { url, title } = getShareData();
        // Twitter now "X"
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
    };
    return (
        <Button
            variant={"share-gray-50"}
            size={"icon-size"}
            className="group"
            onClick={handleShare}
            aria-label="Share on X (Twitter)"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-gray-700 transition-colors duration-200 group-hover:text-primary-500"
            >
                <path
                    d="M17.53 3H21.132L14.265 11.09L22.307 21H16.347L11.392 14.78L5.781 21H2.175L9.447 12.386L1.695 3H7.79L12.29 8.659L17.53 3ZM16.48 19.197H18.09L7.599 4.708H5.878L16.48 19.197Z"
                    fill="currentColor"
                />
            </svg>
        </Button>
    );
};

export const WhatsAppShare = () => {
    const handleShare = () => {
        const { url, title } = getShareData();
        // WhatsApp web sharing link
        const text = title ? `${title} ${url}` : url;
        const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
    };
    return (
        <Button
            variant={"share-gray-50"}
            size={"icon-size"}
            className="group"
            onClick={handleShare}
            aria-label="Share on WhatsApp"
        >
            <svg
                className="text-gray-700 transition-colors duration-200 group-hover:text-primary-500"

                width="19" height="19" viewBox="0 0 19 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="currentColor"
                 d="M15.9415 2.72484C14.1874 0.968628 11.8545 0.00102997 9.36916 0C4.24793 0 0.0799942 4.16782 0.0779343 9.29043C0.0772476 10.928 0.505028 12.5265 1.31813 13.9355L0 18.75L4.92542 17.458C6.28258 18.1983 7.81048 18.5884 9.36539 18.5889H9.36928C14.4899 18.5889 18.6583 14.4207 18.6603 9.29786C18.6613 6.81518 17.6958 4.48093 15.9415 2.72484ZM9.36916 17.0198H9.36596C7.98031 17.0192 6.62132 16.6468 5.43549 15.9433L5.15362 15.7759L2.2308 16.5427L3.01094 13.693L2.82726 13.4008C2.05421 12.1712 1.646 10.7501 1.64669 9.291C1.64829 5.03323 5.11265 1.56921 9.37225 1.56921C11.4349 1.5699 13.3739 2.37419 14.8319 3.83388C16.2899 5.29358 17.0923 7.23381 17.0916 9.29729C17.0898 13.5554 13.6257 17.0198 9.36916 17.0198ZM13.6051 11.236C13.373 11.1198 12.2316 10.5583 12.0187 10.4807C11.8061 10.4032 11.6511 10.3647 11.4965 10.597C11.3417 10.8293 10.8968 11.3523 10.7613 11.5071C10.6258 11.6621 10.4906 11.6816 10.2584 11.5653C10.0262 11.4491 9.27818 11.2039 8.39138 10.413C7.7013 9.7974 7.23541 9.03717 7.09991 8.80485C6.96464 8.57231 7.09877 8.45878 7.20177 8.33107C7.45308 8.01899 7.70473 7.6918 7.7821 7.53696C7.85957 7.38201 7.82078 7.2464 7.76264 7.13024C7.70473 7.01408 7.24045 5.87139 7.04704 5.40642C6.85844 4.95392 6.66721 5.01503 6.52462 5.00793C6.38935 5.00118 6.23451 4.99981 6.07967 4.99981C5.92495 4.99981 5.67341 5.05783 5.46055 5.29037C5.2478 5.5228 4.64813 6.08436 4.64813 7.22706C4.64813 8.36975 5.48 9.47365 5.59605 9.6286C5.71209 9.78355 7.23312 12.1284 9.56188 13.1339C10.1158 13.3733 10.5481 13.516 10.8854 13.623C11.4416 13.7997 11.9475 13.7748 12.3476 13.7151C12.7937 13.6483 13.721 13.1534 13.9146 12.6112C14.108 12.0688 14.108 11.6041 14.0499 11.5071C13.992 11.4103 13.8372 11.3523 13.6051 11.236Z"  />
            </svg>
        </Button>
    );
};

export const LinkedinShare = () => {
    const handleShare = () => {
        const { url, title } = getShareData();
        const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600');
    };
    return (
        <Button
            variant={"share-gray-50"}
            size={"icon-size"}
            className="group"
            onClick={handleShare}
            aria-label="Share on LinkedIn"
        >
            <svg width="18"
                className="text-gray-700 transition-colors duration-200 group-hover:text-primary-500"
                height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9955 18.0002V17.9994H18V11.3979C18 8.16841 17.3047 5.68066 13.5292 5.68066C11.7142 5.68066 10.4962 6.67666 9.99896 7.62091H9.94646V5.98216H6.3667V17.9994H10.0942V12.0489C10.0942 10.4822 10.3912 8.96716 12.3315 8.96716C14.2432 8.96716 14.2717 10.7552 14.2717 12.1494V18.0002H17.9955Z" fill="currentColor"
                />
                <path d="M0.296875 5.98242H4.02888V17.9997H0.296875V5.98242Z" fill="currentColor"
                />
                <path d="M2.1615 0C0.96825 0 0 0.96825 0 2.1615C0 3.35475 0.96825 4.34325 2.1615 4.34325C3.35475 4.34325 4.323 3.35475 4.323 2.1615C4.32225 0.96825 3.354 0 2.1615 0V0Z" fill="currentColor"
                />
            </svg>

        </Button>
    );
};

export const YouTubeShare = () => {
    const handleShare = () => {
        window.open('https://www.youtube.com/', '_blank', 'noopener,noreferrer,width=600,height=600');
    };
    return (
        <Button
            variant={"share-gray-50"}
            size={"icon-size"}
            className="group"
            onClick={handleShare}
            aria-label="Share on YouTube"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 19"
                width="19"
                height="19"
                className="text-gray-700 transition-colors duration-200 group-hover:text-primary-500"
            >
                <path
                    fill="currentColor"
                    d="M21.8 8.001a2.75 2.75 0 0 0-1.933-1.943C18.075 5.5 12 5.5 12 5.5s-6.075 0-7.867.558A2.75 2.75 0 0 0 2.2 8.001C1.643 9.794 1.643 12 1.643 12s0 2.206.557 3.999a2.75 2.75 0 0 0 1.933 1.943C5.925 18.5 12 18.5 12 18.5s6.075 0 7.867-.558A2.75 2.75 0 0 0 21.8 16C22.357 14.206 22.357 12 22.357 12s0-2.206-.557-3.999zM10.5 15.02V8.98l6.257 3.02-6.257 3.02z"
                />
            </svg>
        </Button>
    );
};
