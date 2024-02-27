import React, { useState } from 'react';

import { HiArrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";

import Menu from '../../component/menu/MenuFooter';

const Capsule = () => {
    
    const [capsule, setCapsule] = useState([
        {name: "A"},
        {name: "B"},
        {name: "C"},
        {name: "D"},
        {name: "E"},
        {name: "F"},
        {name: "G"},
        {name: "H"},
        {name: "I"},
        {name: "J"},
    ])

    return (
        <>
            <div className="bg-white">
                <div className="container min-h-screen">
                    <div class="flex flex-row py-4 p-4">
                        <div className="w-12 bg-sky-500 rounded-xl p-3 flex text-center justify-start items-start">
                            <NavLink to="/Profile">
                                <HiArrowLeft className="w-auto font-bold text-white" size={18} />
                            </NavLink>
                        </div>
                        <div className="w-full flex text-center justify-center items-center">
                            <p className="text-black text-start font-bold text-xl">การเชื่อมต่อ Smart Capsule</p>
                        </div>
                    </div>

                    <div className="mx-auto p-4">
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {capsule.map((item, i) => (
                            <NavLink to="/createCapsule">
                                <div key={i} className="bg-white rounded-lg flex items-center justify-center h-16 w-28 border-t border-r border-x border-y border-sky-500 hover:bg-sky-600 text-sky-500 hover:text-white">
                                    <p class="font-bold text-4xl">{item.name}</p>
                                </div>
                            </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </>
    )
}

export default Capsule;