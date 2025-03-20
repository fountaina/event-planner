import React from 'react';
import '../styles/dashboard.css';
import upArrow from "/images/icons/green-arrow.png";
import downArrown from "/images/icons/red-arrow.png";

const PercentageGrowth = ({percentage}) => {
    return (
        <div className='percentage-growth'>
            <img className='arrows' src={percentage > 0 ? upArrow : downArrown} alt="" />
            <p style={percentage > 0 ? {color: "#00BA00"} : {color: "#E50000"}}>
                {percentage > 0 ? "+" + percentage + "%": percentage + "%" }
            </p>
        </div>
    )
}

const Dashboard = () => {
  return (
    <div className='main-bar'>
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
    </div>
  )
}

export default Dashboard