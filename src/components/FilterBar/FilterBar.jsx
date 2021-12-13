import React, { useState } from 'react'

import ToggleBtn from '../ToggleBtn/ToggleBtn';
import Dropdown from '../Dropdown/Dropdown';
import DatePicker from '../DatePicker/DatePicker';

const FilterBar = () => {

    return (

        <div className="flex justify-between flex-end mt-2 mb-2">

                {/* date picker */} 
                <div className="date">
                <DatePicker />
                </div>
  

                {/* Select Country dropdown */}
                <div className="select">
                    <Dropdown />
                </div>

                {/* toggle live matches */}
                <div className="toggle mt-6">
                  <ToggleBtn />
                </div>
               
        </div>
    )
}

export default FilterBar
