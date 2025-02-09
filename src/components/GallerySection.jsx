import Image from 'next/image';
import React from 'react'

const GallerySection = () => {
    return (

        <section className="u-align-center u-clearfix u-container-align-center u-palette-1-base u-section-3" id="sec-a1a3">
            <div className="u-expanded-width u-palette-3-base u-shape u-shape-rectangle u-shape-1"></div>
            <div className="u-clearfix u-gutter-20 u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                    <div className="u-layout-row">
                        <div className="u-size-15 u-size-30-md">
                            <div className="u-layout-col">
                                <div className="u-container-style u-image u-layout-cell u-size-40 u-image-1" data-image-width="900"
                                    data-image-height="999">
                                    <div className="u-container-layout u-container-layout-1"></div>
                                </div>
                                <div
                                    className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-2">
                                    <div className="u-container-layout u-container-layout-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="u-size-15 u-size-30-md">
                            <div className="u-layout-col">
                                <div
                                    className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-3">
                                    <div className="u-container-layout u-container-layout-3"></div>
                                </div>
                                <div className="u-container-style u-image u-layout-cell u-size-40 u-image-2" data-image-width="900"
                                    data-image-height="694">
                                    <div className="u-container-layout u-container-layout-4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="u-size-15 u-size-30-md">
                            <div className="u-layout-col">
                                <div className="u-container-style u-image u-layout-cell u-size-40 u-image-3" data-image-width="1200"
                                    data-image-height="1018">
                                    <div className="u-container-layout u-container-layout-5"></div>
                                </div>
                                <div
                                    className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-6">
                                    <div className="u-container-layout u-container-layout-6"></div>
                                </div>
                            </div>
                        </div>
                        <div className="u-size-15 u-size-30-md">
                            <div className="u-layout-col">
                                <div
                                    className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-size-20 u-layout-cell-7">
                                    <div className="u-container-layout u-container-layout-7"></div>
                                </div>
                                <div className="u-container-style u-image u-layout-cell u-size-40 u-image-4" data-image-width="600"
                                    data-image-height="784">
                                    <div className="u-container-layout u-container-layout-8"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="u-list u-list-1 responsibility-section">
                <div className="u-repeater u-repeater-1">
                    <div
                        className="u-align-center u-container-align-center u-container-style u-list-item u-palette-5-light-3 u-radius-20 u-repeater-item u-shape-round u-list-item-1">
                        <div className="card-hover u-container-layout u-similar-container u-valign-top u-container-layout-9">
                            {/* <img src="images/responsibility01.png" alt="Event Image" width="88px" /> */}
                            <Image src="/images/responsibility01.png" alt="Event Image" height="88" width="88" />
                            <h5 className="u-text u-text-1"> Scholarship</h5>
                            <p className="u-text u-text-palette-5-dark-2 u-text-2">Empower deserving students by funding scholarships,
                                making education more accessible, and shaping future leaders in our community.</p>
                        </div>
                    </div>
                    <div
                        className="u-align-center u-container-align-center u-container-style u-list-item u-palette-5-light-3 u-radius-20 u-repeater-item u-shape-round u-list-item-2">
                        <div className="card-hover u-container-layout u-similar-container u-valign-top u-container-layout-10">
                            <img src="images/responsibility02.png" alt="Event Image" width="88px" />
                            <h5 className="u-text u-text-3">Help Current Students</h5>
                            <p className="u-text u-text-palette-5-dark-2 u-text-4">Share your experience, provide guidance, and mentor the
                                next generation to help them navigate their academic and career journeys.</p>
                        </div>
                    </div>
                    <div
                        className="u-align-center u-container-align-center u-container-style u-list-item u-palette-5-light-3 u-radius-20 u-repeater-item u-shape-round u-list-item-3">
                        <div className="card-hover u-container-layout u-similar-container u-valign-top u-container-layout-11">
                            <img src="images/responsibility03.png" alt="Event Image" width="88px" />
                            <h5 className="u-text u-text-5">Help Our University</h5>
                            <p className="u-text u-text-palette-5-dark-2 u-text-6">Give back to the institution that shaped you—support
                                initiatives, fund programs, and contribute to the ongoing success of our university.</p>
                        </div>
                    </div>
                    <div
                        className="u-align-center u-container-align-center u-container-style u-list-item u-palette-5-light-3 u-radius-20 u-repeater-item u-shape-round u-list-item-4">
                        <div className="card-hover u-container-layout u-similar-container u-valign-top u-container-layout-12">
                            <img src="images/responsibility04.png" alt="Event Image" width="88px" />
                            <h5 className="u-text u-text-7">Build Our Community</h5>
                            <p className="u-text u-text-palette-5-dark-2 u-text-8">Stay connected with fellow alumni, forge lifelong
                                friendships, and create opportunities for collaboration, mentorship, and professional growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GallerySection;
