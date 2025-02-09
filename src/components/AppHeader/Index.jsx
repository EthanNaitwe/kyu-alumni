import React from 'react'

import LogoBanner from './LogoBanner';

function AppHeader() {
    return (
        <header className="u-clearfix u-header u-header" id="header">
            <div className="u-top-section">
                <div className="u-top-content">
                    <div className="u-top-left">
                        <span className="u-top-contacts"><strong>Email:</strong> info@kyu-alumni@co.ug</span>
                        <span className="u-top-contacts"><strong>Hotline:</strong> +256 726 107 623</span>
                    </div>
                    <div className="u-top-right">
                        {/* <button className="u-btn-right">Signup</button> */}
                        <button className="u-btn-left">Login</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;
