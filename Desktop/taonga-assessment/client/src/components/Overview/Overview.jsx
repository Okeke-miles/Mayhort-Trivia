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
                <article className="unresolved-section__style">
                    <div className="unresolved-container__style">
                        <div className="inner-flex__style">
                            <main className="unresolved__style">Unresolved tickets <p className="support__style">Group: Support</p></main>
                            <p className="unresolved-desc__style">Waiting on Feature Request</p>
                            <p className="unresolved-desc__style">Awaiting Customer Response</p>
                            <p className="unresolved-desc__style">Awaiting Developer Fix</p>
                            <p className="unresolved-desc__style">Pending</p>
                        </div>
                        <div className="outer-flex__style">
                            <p className="quantity__style">View details</p>
                            <p className="unresolved-qty__style">4238</p>
                            <p className="unresolved-qty__style">1005</p>
                            <p className="unresolved-qty__style">914</p>
                            <p className="unresolved-qty__style">281</p>
                        </div>
                    </div>
                    <div className="unresolved-task-container__style">
                        <div className="inner-task-flex__style">
                            <main className="unresolved__style">Tasks <p className="support__style">Today</p></main>
                            <p className="unresolved-task__style">Create new task</p>
                            <p className="unresolved-task__style">Finish ticket update</p>
                            <p className="unresolved-task__style">Create new ticket example</p>
                            <p className="unresolved-task__style">Update ticket report</p>
                        </div>
                        <div className="outer-flex__style">
                            <p className="quantity__style">View all</p>
                            <p className="unresolved-task-qty__style plus__style">+</p>
                            <p className="unresolved-task-qty__style urgent__style">URGENT</p>
                            <p className="unresolved-task-qty__style new__style">NEW</p>
                            <p className="unresolved-task-qty__style default__style">DEFAULT</p>
                        </div>
                    </div>

                </article>
            </div>
        </div>
    )
}

export default Overview