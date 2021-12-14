import React from 'react'


import {
  Routes,
  Route,
} from "react-router-dom";

import Soccer from './HomeComponents/Soccer/Soccer';
import Basketball from './HomeComponents/Basketball/Basketball';
import Tennis from './HomeComponents/Tennis/Tennis';
import HorseRacing from './HomeComponents/HorseRacing/HorseRacing';


const navigation = [
    { name: 'Soccer', href: 'soccer', active: true },
    { name: 'Basket Ball', href: 'basketball', active: false },
    { name: 'Tennis', href: 'tennis', active: false },
    { name: 'Horse Racing', href: 'horse-racing', active: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }





const Home = () => {
    return (
        <div>
            
            <div className="flex justify-center bg-green-600">
            <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.active ? 'text-white' : 'text-gray-300 hover:text-white',
                          'px-3 py-2  text-md font-medium'
                        )}
                        aria-current={item.active ? 'location' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
        </div>

            <Routes >
                <Route path="soccer" element={<Soccer />} />
                <Route path="basketball" element={<Basketball />} />
                <Route path="tennis" element={<Tennis />} />
                <Route path="horse-racing" element={<HorseRacing />} />
            </Routes>
        </div>
    )
}

export default Home
