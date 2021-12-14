import React from 'react'
import FilterBar from '../../../../components/FilterBar/FilterBar'
import FixtureCard from '../../../../components/FixtureCard/FixtureCard'
import Accordion from '../../../../components/Accordion/Accordion'


const Soccer = () => {
    return (
        <div className="container mx-auto px-8 ">
            <FilterBar />
            {/* table body */}
            
            <div className="w-100 h-100 mt-10 bg-transparent bg-card-hover">
                {/* create a responsive tab */}
                <div className="header h-16 w-100 bg-dark-bg">
                <p className=' text-2xl text-primary font-bold ml-3'>Today's Matches</p>
                <p className=' text-gray-500 ml-3'>Live Football Scores, Fixtures & Results</p>
                </div>

                {/* CREATE ACCORDION COMPONENT TO HOIST THE FIXTURES */}
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />

              
                <div className="tab-responsive">
                    {/* create a responsive grid box titled fixtures/results */}


                </div>
            </div>
        </div>
    )
}

export default Soccer






