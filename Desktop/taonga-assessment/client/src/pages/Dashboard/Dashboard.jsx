import React from 'react'
import "../Dashboard/Dashboard.scss"
import Navbar from "../../components/Navbar/Navbar"
import Overview from "../../components/Overview/Overview"

function Dashboard() {

    return (
        <div className="dashboard-background__style">
            <div className="dashboard-container__style">
                <Navbar />
                <Overview />
            </div>
        </div>
    )
}

export default Dashboard