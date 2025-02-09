import Image from 'next/image'
import React from 'react'

const SingleEvent = () => {
    return (
        <div className="event-container transY-30">
            <div className="event-banner">Upcoming Event</div>
            <div className="event-content">
                <div className="event-image">
                    {/* <img src="images/alumni-over-tea.png" alt="Event Image" /> */}

                    <Image
                        src="/images/alumni-over-tea.jpg"
                        alt="logo"
                        width={400}
                        height={400}
                    />

                    <div className="event-date">At 17:00 On 7 February 2027</div>
                </div>
                <div className="event-details">
                    <div className="countdown">
                        <div><span>Days</span> <span className="time-box">01</span></div>
                        <div><span>Hr</span> <span className="time-box">02</span></div>
                        <div><span>Min</span> <span className="time-box">03</span></div>
                        <div><span>Sec</span> <span className="time-box">05</span></div>
                        <span className="remaining">Remaining</span>
                    </div>
                    <h2>A Friday Evening Alumni <br />Get-Together!</h2>
                    <p>Join us for an unforgettable evening of reconnecting, reminiscing, and networking at
                        <span>A Friday Evening Alumni Get-Together!</span>
                    </p>
                    <button className="join-btn">JOIN US</button>
                </div>
            </div>
            <div className="nav-arrows">
                <span>&#9664;</span>
                <span>&#9654;</span>
            </div>
        </div>
    )
}

export default SingleEvent