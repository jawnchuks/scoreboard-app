import React, { useState, useEffect } from 'react';
import FilterBar from '../../../../components/FilterBar/FilterBar'

import Accordion from '../../../../components/Accordion/Accordion'

import LeagueLogo from '../../../../assets/default-league-logo.png';

import  instance  from '../../../../Api/AxiosApi';
import axios from 'axios';


const Soccer = () => {

    const [eventData, setEventData] = useState([]);
    
    // axios instance returns data
      useEffect(() => {
        axios.request(instance)
        .then( response => {
            setEventData(response.data.data);
            // console.log(response.data.data);
            
        }).catch( error => {
            console.log(error);
        });
      }, [])

      

    return (
        <div className="container mx-auto px-8 ">
            <FilterBar />            
            <div className="w-100 h-100 mt-5 bg-transparent bg-card-hover">
                {/* Responsive tab */}
                <div className="header h-16 w-100 bg-dark-bg">
                <p className=' text-xm md:text-2xl text-primary font-bold ml-3'>Today's Matches</p>
                <p className=' text-xs md:text-xm text-gray-500 ml-3'>Live Football Scores, Fixtures & Results</p>
                </div>

                {/*  ACCORDION COMPONENT TO HOIST THE FIXTURES */}
               
                {eventData.map((event) => (
                    
                        <Accordion 
                        id={event.id}
                        leagueImg={event.league?.logo  || LeagueLogo }   
                        countryLeague={event.league?.name || event.section.name + ` league`}
                        countryName={event.section?.name}
                        />
                ))}
                        
               
              
                <div className="tab-responsive">
                    {/* create a responsive grid box titled fixtures/results */}


                </div>
            </div>
        </div>
    )
}

export default Soccer






