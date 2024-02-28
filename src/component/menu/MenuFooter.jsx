import React from 'react';

import { MdDashboard } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { BsChatRightDotsFill } from "react-icons/bs";
import { LiaUserSolid } from "react-icons/lia";

import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <>
        <div className="fixed inset-x-0 bottom-0 bg-white shadow-md rounded-lg h-20">
            <div className="flex justify-around items-center max-w-md mx-auto py-4">

                <NavLink type="button" to="/profile">
                    <div className="focus:outline-none text-gray-500 hover:text-sky-500 hover:bg-sky-500 hover:bg-opacity-25 p-4 rounded-3xl">
                        <MdDashboard size={18} />
                    </div>
                </NavLink>

                <NavLink type="button" to="/capsule">
                    <div className="focus:outline-none text-gray-500 hover:text-sky-500 hover:bg-sky-500 hover:bg-opacity-25 p-4 rounded-3xl">
                        <FaCalendar size={18} />
                    </div>
                </NavLink>

                <NavLink type="button" to="/createProfile">
                    <div className="bg-sky-500 rounded-2xl p-4 text-white focus:outline-none hover:bg-sky-400">
                        <GrAdd size={18} color="#fff" />
                    </div>
                </NavLink>

                <NavLink type="button" to="/personalRecord">
                    <div className="focus:outline-none text-gray-500 hover:text-sky-500 hover:bg-sky-500 hover:bg-opacity-25 p-4 rounded-3xl">
                        <BsChatRightDotsFill  size={18} color="#9B9B9B"  />
                    </div>
                </NavLink>

                <NavLink type="button" to="/summaryReport">
                    <div className="focus:outline-none text-gray-500 hover:text-sky-500 hover:bg-sky-500 hover:bg-opacity-25 p-4 rounded-3xl">
                        <LiaUserSolid size={18} color="#9B9B9B"  />
                    </div>
                </NavLink>

            </div>
        </div>

        </>
    )
}


export default Menu;