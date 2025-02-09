import Image from 'next/image';
import React from 'react'

const MissionSection = () => {
    return (
        <div className="transY-10 mission-container">
            <div className="mission-image-section">
                {/* <img src="images/alumni-mission.jpg" alt="Kyambogo Alumni Mission" /> */}
                <Image
                    src="/images/alumni-mission.jpg"
                    alt="Kyambogo Alumni Mission"
                    width={400}
                    height={400}
                />
            </div>
            <div className="mission-content-section">
                <h2>Our Mission</h2>
                <span>- To foster a lifelong connection between alumni and our university, creating a vibrant network that
                    supports personal, professional, and institutional growth.</span>
                <span>- To empower alumni to give back through mentorship, scholarships, and collaborative initiatives that enrich
                    current students and strengthen our university community.</span>
            </div>
        </div>
    )
}

export default MissionSection;
