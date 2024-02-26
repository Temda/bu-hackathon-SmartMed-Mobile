import React from 'react';

import { MdDashboard } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { BsChatRightDotsFill } from "react-icons/bs";
import { LiaUserSolid } from "react-icons/lia";

function Menu() {
    return (
        <>
        <div className="fixed inset-x-0 bottom-0 bg-white shadow-md rounded-lg">
            <div className="flex justify-around items-center max-w-md mx-auto py-4">

                <div className="focus:outline-none">
                    <MdDashboard size={18} color="#9B9B9B" />
                </div>

                <div className="focus:outline-none">
                    <FaCalendar size={18} color="#9B9B9B" />
                </div>

                <div className="bg-sky-500 rounded-2xl p-4 text-white focus:outline-none">
                    <GrAdd size={18} color="#fff" />
                </div>

                <div className="focus:outline-none">
                    <BsChatRightDotsFill  size={18} color="#9B9B9B"  />
                </div>
                <div className="focus:outline-none">
                    <LiaUserSolid size={18} color="#9B9B9B"  />
                </div>

            </div>
        </div>

        </>
    )
}


export default Menu;