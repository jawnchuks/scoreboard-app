import React from 'react'
import { Link } from 'react-router-dom'

const FixtureCard = (props) => {
   
    return (
        <>
        <Link to="">
              <div id={props.id} className=" flex flex-col justify-center card rounded-md w-72 h-48 mt-5 mb-5 bg-primary shadow-lg p-5 shadow-bg-card-hover hover:bg-primary-hover">   
                    <div className="date m-auto font-semibold text-gray-700">{props.date}</div>
                    <div className="venue m-auto text-xs font-semibold text-gray-700">{props.venue}</div>
                    <div className="teams flex flex-row justify-evenly ">
                        <div className="team-a w-2/5">
                            <div className="team-logo">
                                <img src={props.homeLogo} alt={(props.homeTeam) + " logo"}  className='w-100 h-14 m-auto' />
                            </div>
                            <div className="team-name text-center font-semibold text-gray-800">{props.homeTeam}</div>
                        </div>
                        <div className="versus w-1/6 text-xl text-gray-500 m-auto font-bold text-center">VS</div>
                        <div className="team-b w-2/5">
                            <div className="team-logo">
                            <img src={props.awayLogo} alt={(props.awayTeam) + " logo"} className='w-100 h-14 m-auto' />
                        </div>
                            <div className="team-name text-center font-semibold text-gray-800">{props.awayTeam}</div>
                        </div>
                    </div>
                    <div className="time m-auto font-semibold text-gray-700">{props.time}</div>
                    
                </div>
            </Link>
        </>
    )
}

export default FixtureCard
