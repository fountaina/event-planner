import React from 'react';
import '../styles/dashboard.css';
import upArrow from "/images/icons/green-arrow.png";
import downArrown from "/images/icons/red-arrow.png";
import EventChart from './Chart';
import Carousel from './Carousel';
import { layoutProperties } from "./App";

const PercentageGrowth = ({percentage}) => {
    return (
        <div className='percentage-growth'>
            <img className='arrows' src={percentage > 0 ? upArrow : downArrown} alt="" />
            <p style={percentage > 0 ? {color: "#00BA00"} : {color: "#E50000"}}>
                {percentage > 0 ? "+" + percentage.toFixed(1) + "%": percentage.toFixed(1) + "%" }
            </p>
        </div>
    )
}

const Dashboard = ({layout, setLayout}) => {
  return (
    <div className={layout.dashboardLayout}>
        <h1>Welcome! Here's your summary</h1>
        <div className='info-block'>
            <div className='info'>
                <h3 className='box-text'>Total Events</h3>
                <h3 className='box-figures'>
                    100,000
                    {/* <div className='percentage-growth'>
                        <img className='arrows' src={upArrow} alt="" />
                        <p style={{color: "#00BA00"}}>+5.0</p>
                    </div> */}
                    <PercentageGrowth percentage={5.0}/>
                </h3>
            </div>
            <div className='info'>
                <h3 className='box-text'>Active Speakers</h3>
                <h3 className='box-figures'>
                    25
                    <PercentageGrowth percentage={-5.0}/>
                </h3>
            </div>
            <div className='info'>
                <h3 className='box-text'>Total Registrations</h3>
                <h3 className='box-figures'>
                    300
                    <PercentageGrowth percentage={5.0}/>
                </h3>
            </div>
            <div className='info'>
                <h3 className='box-text'>Total Revenue</h3>
                <h3 className='box-figures'>
                    $500,000
                    <PercentageGrowth percentage={5.0}/>
                </h3>
            </div>
        </div>
        <div className="mid-section">
            <div className='event-chart'>
                <h3>Event Registrations per month</h3>
                <EventChart />
            </div>
            <Carousel />
        </div>
        <div className='bottom-section'>
            <div>
                <form action="" className="bottom-section-top">
                    <div className='search-bar'><input type="text" placeholder='Search...'/></div>
                    <div className='dropdown-menus'>
                        <div className="selection-block">
                            <h3>Date</h3>
                            <select name="date" id="date">
                                <option value="Date"></option>
                            </select>
                        </div>
                        <div className="selection-block">
                            <h3>Status</h3>
                            <select name="status" id="status">
                                <option value="status"></option>
                            </select>
                        </div>
                        <div className="selection-block">
                            <h3>Name</h3>
                            <select name="name" id="name">
                                <option value="name"></option>
                            </select>
                        </div>
                        <div className="selection-block">
                            <h3>Most Recent</h3>
                            <select name="most-recent" id="most-recent">
                                <option value="most-recent"></option>
                            </select>
                        </div>
                    </div>
                </form> 
            </div>

            <div className="table-container">  
                <table>
                    <thead>
                        <tr>
                        <th className='rounded-tl-lg'>Event Name</th>
                        <th>Date</th>
                        <th>Speakers</th>
                        <th className='rounded-tr-lg'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cloud Innovation Submit</td>
                            <td>2024-10-15</td>
                            <td>Jane Doe</td>
                            <td>
                                <div className='status-completed'>
                                    Completed
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Blockchain REvolution Conference</td>
                            <td>2024-11-05</td>
                            <td>Dr Peter Smith</td>
                            <td>
                                <div className='status-in-progress'>
                                    In-progress
                                </div>
                        </td>
                        </tr>
                    </tbody>
                </table> 
            </div>     
        </div>
    </div>
  )
}

export default Dashboard