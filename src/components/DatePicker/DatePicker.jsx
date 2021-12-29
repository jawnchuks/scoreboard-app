// import React, { useState } from 'react';


const Picker = () => {

    // const [date, setDate] = useState(new Date());

    return (
        <div>
         <label className="block text-sm font-medium text-white">Select Date</label>   
        <div class="relative">
        <input  type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
        </div>

        </div>
    )
}

export default Picker
