import * as React from "react";

function CheckmarkDoneCircleOutlineIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            {...props}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            />
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59"
            />
        </svg>
    );
}

export default CheckmarkDoneCircleOutlineIcon;
