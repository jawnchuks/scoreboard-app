import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import England from '../../assets/england_round_icon_64.png'
import FixtureCard from '../FixtureCard/FixtureCard'

const Accordion = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
         <div className="accordion-container">
                    <div className="accordion-header bg-card-bg w-100 shadow-lg shadow-bg-card-hover mb-2 flex flex-row justify-between">
                        <div className="league-title flex flex-row">
                            <div className="league-logo ml-3">
                            <img src={England} alt="english league" className='mt-1' />
                            </div>
                            <div className="league-name ml-3 flex flex-col">
                                <span className="country-name text-xm text-gray-400">England</span>
                                <span className="country-league  text-xl text-white">Premier League</span>
                            </div>
                        </div>
                        
                        <div className="league-standings flex flex-row justify-between text-primary p-4">
                            <Link to="" className='mr-6  underline text-xl hover:text-green-400' >View Table</Link>
                        <div onClick={() => setIsActive(!isActive)}
                        className="click cursor-pointer">
                        {isActive ?  
                        <div className="chevron-icon-down">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div> : 
                        <div className="chevron-icon-up">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        </div>}
                        </div>
                        </div>
                    </div>
                    <div className="accordion-content flex flex-wrap justify-evenly">
                      {isActive && <FixtureCard />}
                      {isActive && <FixtureCard />}
                      {isActive && <FixtureCard />}
                      {isActive && <FixtureCard />}
                      {isActive && <FixtureCard />}
                    </div>
                </div>   
        </>
    )
}

export default Accordion
