import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// 
import FixtureCard from '../FixtureCard/FixtureCard';

import clubLogo from '../../assets/default-club-logo-removebg-preview.png';

import  instance  from '../../Api/AxiosApi';
import axios from 'axios';









const Accordion = (props) => {

    const [isActive, setIsActive] = useState(false);

    const [eventData, setEventData] = useState([]);
    
    // axios instance returns data
      useEffect(() => {
        axios.request(instance)
        .then( response => {
            setEventData(response.data.data);
            console.log(response.data.data);
            
        }).catch( error => {
            console.log(error);
        });
      }, [])

    return (
        <>

        
         <div id={props.id} className="accordion-container">
                    <div className="accordion-header bg-card-bg w-100 shadow-lg shadow-bg-card-hover mb-2 flex flex-row justify-between">
                        <div className="league-title flex flex-row">
                            <div className="league-logo ml-0 md:ml-3">
                                <img src={props.leagueImg} alt="english league" className='mt-3 md:mt-1 w-12 h-12' />
                            </div>
                            <div className="league-name ml-0 mt-3 md:ml-3 md:mt-0 flex flex-col">
                                <span className="country-name text-xs md:text-xm text-gray-400">{props.countryName}</span>
                                <span className="country-league  text-xm md:text-2xl text-white">{props.countryLeague}</span>
                            </div>
                        </div>
                        
                        <div className="league-standings flex flex-row justify-between text-primary p-4">
                            <Link to="" className='mr-2 md:mr-6 mt-4 md:mt-0  underline text-xs md:text-xl hover:text-green-400' >View Table</Link>
                            <div onClick={() => setIsActive(!isActive)}
                            className="click cursor-pointer">
                            {isActive ?  
                                <div className="chevron-icon-down">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-3 md:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div> : 
                                <div className="chevron-icon-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-3 md:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-content flex flex-wrap justify-evenly">
                       
                      {isActive && eventData.map((event) => (
                          <FixtureCard 
                            // id={event.id}
                            date={event?.start_at}
                            venue={event?.home_team?.country}
                            time={event?.start_at}
                            homeTeam={event?.home_team?.name}
                            awayTeam={event?.away_team?.name}
                            homeLogo={event?.home_team?.logo || clubLogo}
                            awayLogo={event?.away_team?.logo || clubLogo }
                          />
                      ))}
                     
                    </div>
                </div>   
        </>
    )
}

export default Accordion
