import React, { useState } from 'react';

import { HiArrowLeft } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import Menu from '../../component/menu/MenuFooter';

function CreateCapsule() {

    return (
        <>
        <div className="bg-white">
                <div className="container min-h-screen">
                    <div class="flex text-center justify-between items-center py-4 p-4 gap-2">
                        <div className="bg-sky-500 rounded-xl p-3">
                            <NavLink to="/capsule">
                                <HiArrowLeft className="w-auto font-bold text-white" size={18} />
                            </NavLink>
                        </div>
                        <div className="">
                            <p className="text-black text-center font-bold text-xl">การตั้งค่า Smart Capsule</p>
                        </div>
                        <div className="">
                            <FaCamera className="w-auto text-sky-500" size={28} />
                        </div>
                    </div>

                    <div className="mx-auto p-2">
                        <div className="flex flex-wrap justify-center items-center gap-8">
                       
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </>
    )

}

export default CreateCapsule;