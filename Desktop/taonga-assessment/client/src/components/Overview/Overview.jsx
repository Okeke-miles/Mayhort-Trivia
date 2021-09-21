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
                <article className="tickets-container__style">
                    <div className="tickets-header__style">
                        <p className="tickets__style">All tickets</p>
                        <p className="sort__style">Sort</p>
                        <p className="filter__style">Filter</p>
                    </div>
                    <div className="tickets-details-container__style">
                        <p className="tickets-details__style">Ticket details</p>
                        <p className="tickets-customer__style">Customer name</p>
                        <p className="tickets-date__style">Date</p>
                        <p className="tickets-priority__style">Priority</p>
                    </div>
                    <div className="contact-email-container__style">
                        <main className="contact-email__style">Contact Email not Linked <p className="updated__style">Updated 1 day ago</p></main>
                        <main className="contact-email__style">Tom Cruise <p className="updated__style">on 24.05.2019</p></main>
                        <main className="contact-email__style">May 26, 2019 <p className="updated__style">6:30PM</p></main>
                        <p className="priority__style">High</p>
                    </div>
                    <div className="contact-email-container__style">
                        <main className="contact-email__style">Adding Images to Featured Posts <p className="updated__style">Updated 1 day ago</p></main>
                        <main className="contact-email__style">Matt Damon <p className="updated__style">on 24.05.2019</p></main>
                        <main className="contact-email__style">May 26, 2019 <p className="updated__style">8:00 AM</p></main>
                        <p className="priority__style">LOW</p>
                    </div>
                    <div className="contact-email-container__style">
                        <main className="contact-email__style">When will I be charged this month? <p className="updated__style">Updated 2 days ago</p></main>
                        <main className="contact-email__style">Robert Downey <p className="updated__style">on 24.05.2019</p></main>
                        <main className="contact-email__style">May 26, 2019 <p className="updated__style">7:30 PM</p></main>
                        <p className="priority__style">HIGH</p>
                    </div>
                    <div className="contact-email-container__style">
                        <main className="contact-email__style">Payment not going through <p className="updated__style">Updated 2 days ago</p></main>
                        <main className="contact-email__style">Christian Bale <p className="updated__style">on 24.05.2019</p></main>
                        <main className="contact-email__style">May 25, 2019 <p className="updated__style">5:00 PM</p></main>
                        <p className="priority__style">NORMAL</p>
                    </div>
                    <div className="contact-email-container__style">
                        <main className="contact-email__style">Unable to add replies <p className="updated__style">Updated 2 days ago</p></main>
                        <main className="contact-email__style">Henry Cavil <p className="updated__style">on 24.05.2019</p></main>
                        <main className="contact-email__style">May 25, 2019 <p className="updated__style">4:00 PM</p></main>
                        <p className="priority__style">HIGH</p>
                    </div>
                    <div className="contact-email-container__style">
                        <main className="contact-email__style">Downtime since last week <p className="updated__style">Updated 3 days ago</p></main>
                        <main className="contact-email__style">Chris Evans <p className="updated__style">on 23.05.2019</p></main>
                        <main className="contact-email__style">May 25, 2019 <p className="updated__style">2:00 PM</p></main>
                        <p className="priority__style">NORMAL</p>
                    </div>
                    <div className="contact-email-container__style">
                        <main className="contact-email__style">Referral Bonus <p className="updated__style">Updated 4 days ago</p></main>
                        <main className="contact-email__style">Sam Smith <p className="updated__style">on 22.05.2019</p></main>
                        <main className="contact-email__style">May 25, 2019 <p className="updated__style">11:30 AM</p></main>
                        <p className="priority__style">LOW</p>
                    </div>
                    <div className="contact-email-container__style">
                        <main className="contact-email__style"> How do I change my password?<p className="updated__style">Updated 6 days ago</p></main>
                        <main className="contact-email__style">Steve Rogers <p className="updated__style">on 21.05.2019</p></main>
                        <main className="contact-email__style">May 24, 2019 <p className="updated__style">1:00 PM</p></main>
                        <p className="priority__style">NORMAL</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Overview