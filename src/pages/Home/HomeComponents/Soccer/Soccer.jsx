import React from 'react'
import FilterBar from '../../../../components/FilterBar/FilterBar'
import Chelsea from '../../../../assets/chelsea-logo.png'
import Liverpool from '../../../../assets/liverpool-logo.png'


const Soccer = () => {
    return (
        <div className="container mx-auto px-8 ">
            <FilterBar />
            {/* table body */}
            
            <div className="w-100 h-60 bg-transparent border-2">
                {/* create a responsive tab */}
                <div className=" flex flex-col justify-center card w-56 h-28 border-2 bg-gray-400">
                    <div className="date m-auto text-white font-bold">12/12/2021</div>
                    <div className="teams m-auto flex flex-row">
                        <div className="team-a">
                            <div className="team-logo w-10 h-10">
                                <img src={Chelsea} alt="chelsea logo" /></div>
                            <div className="team-name">Chelsea</div>
                        </div>
                        <div className="versus">VS</div>
                        <div className="team-a">
                            <div className="team-logo w-10 h-10">
                            <img src={Liverpool} alt="liverpool logo" /></div>
                            <div className="team-name">Liverpool</div>
                        </div>
                    </div>
                    <div className="time m-auto text-white">15:00</div>
                </div>
                <div className="tab-responsive">
                    {/* create a responsive grid box titled fixtures/results */}


                </div>
            </div>
        </div>
    )
}

export default Soccer






