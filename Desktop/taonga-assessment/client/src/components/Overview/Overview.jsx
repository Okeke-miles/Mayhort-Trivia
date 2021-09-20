import React from 'react'
import "../Overview/Overview.scss"

function Overview() {

    return (
        <div className="overview-container__style">
            <div className="overview-flex__style">
                <header className="overview-header__style">
                    <p>Overview</p>
                    <p>James Ferdinand</p>
                </header>
                <div className="overview-status__style">
                    <div className="overview-item__style">
                        <p className="status__style">Unresolved</p>
                        <p className="quantity__style">60</p>
                    </div>
                    <div className="overview-item__style">
                        <p className="status__style">Overdue</p>
                        <p className="quantity__style">16</p>
                    </div>
                    <div className="overview-item__style">
                        <p className="status__style">Open</p>
                        <p className="quantity__style">43</p>
                    </div>
                    <div className="overview-item__style">
                        <p className="status__style">On hold</p>
                        <p className="quantity__style">64</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview