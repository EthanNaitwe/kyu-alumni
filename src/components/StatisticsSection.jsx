import Image from 'next/image';
import React from 'react'

const StatisticsSection = () => {
    return (

        <section className="u-clearfix u-white u-section-6" id="carousel_f8dc">
            <div className="u-expanded-width u-palette-1-base u-shape u-shape-rectangle u-shape-1"></div>
            <div className="u-palette-3-base u-top-left-radius-10 u-top-right-radius-10  u-shape u-shape-round u-shape-2"></div>
            <img src="images/analytics-summary.jpg"
                className="u-align-left u-image u-image-round u-bottom-left-radius-10 u-bottom-right-radius-10 u-image-1"
                data-image-width="1920" data-image-height="1012" />

            <Image
                src="/images/analytics-summary.jpg"
                className="u-align-left u-image u-image-round u-bottom-left-radius-10 u-bottom-right-radius-10 u-image-1"
                alt="Analytics Summary"
                width={1920}
                height={1012}
            />
            <div className="u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                    <div
                        className="u-align-center u-container-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1">
                        <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                            <div alt="" className="u-image u-image-circle u-image-2" data-image-width="1920" data-image-height="1080"></div>
                            <h4 className="u-text u-text-palette-1-base u-text-1">Verified Members</h4>
                            <p className="u-text u-text-stats">2213</p>
                        </div>
                    </div>
                    <div
                        className="u-align-center u-container-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-video-cover u-white u-list-item-2">
                        <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                            <div alt="" className="u-image u-image-circle u-image-3" data-image-width="800" data-image-height="737"></div>
                            <h4 className="u-text u-text-palette-1-base u-text-2">Events Statistics</h4>
                            <p className="u-text u-text-stats">27+</p>
                        </div>
                    </div>
                    <div
                        className="u-align-center u-container-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-video-cover u-white u-list-item-3">
                        <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                            <div alt="" className="u-image u-image-circle u-image-4" data-image-width="1200" data-image-height="800"></div>
                            <h4 className="u-text u-text-palette-1-base u-text-3">Community Awards</h4>
                            <p className="u-text u-text-stats">5+</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatisticsSection;
