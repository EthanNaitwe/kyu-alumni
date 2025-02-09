import React from 'react'
import Image from 'next/image';

const LogoBanner = () => {
    return (
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <Image
                src="/images/kyu-web-logo.png"
                className="u-logo-image u-logo-image-1"
                alt="logo"
                width={312}
                height={70}
            />
        </div>
    )
}

export default LogoBanner;
