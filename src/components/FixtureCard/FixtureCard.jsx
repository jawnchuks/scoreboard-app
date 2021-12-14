import React from 'react'
import ManUtd from '../../assets/man-u.png'
import Liverpool from '../../assets/liverpool.png'
import { Link } from 'react-router-dom'

const FixtureCard = () => {
    const FixtureData = 
        {
            date: '12/12/2021',
            logoA: {ManUtd},  //incorrect image format
            logoB: {Liverpool}, //incorrect image format
            teamA: 'Manchester United',
            teamB: 'Liverpool',
            time: '12:00 PM',
            venue: 'Old Trafford, Manchester'
        }
    ;
    return (
        <>
        <Link to="">
              <div className=" flex flex-col justify-center card rounded-md w-72 h-48 mt-5 mb-5 bg-primary shadow-lg p-5 shadow-bg-card-hover hover:bg-primary-hover">   
                    <div className="date m-auto font-semibold text-gray-700">{FixtureData.date}</div>
                    <div className="venue m-auto text-xs font-semibold text-gray-700">{FixtureData.venue}</div>
                    <div className="teams flex flex-row justify-evenly ">
                        <div className="team-a w-2/5">
                            <div className="team-logo">
                                <img src={ManUtd} alt={(FixtureData.teamA) + " logo"}  className='w-100 h-14 m-auto' />
                            </div>
                            <div className="team-name text-center font-semibold text-gray-800">{FixtureData.teamA}</div>
                        </div>
                        <div className="versus w-1/6 text-xl text-gray-500 m-auto font-bold text-center">VS</div>
                        <div className="team-b w-2/5">
                            <div className="team-logo">
                            <img src={Liverpool} alt={(FixtureData.teamA) + " logo"} className='w-100 h-14 m-auto' />
                        </div>
                            <div className="team-name text-center font-semibold text-gray-800">{FixtureData.teamB}</div>
                        </div>
                    </div>
                    <div className="time m-auto font-semibold text-gray-700">{FixtureData.time}</div>
                    
                </div>
            </Link>
        </>
    )
}

export default FixtureCard
