import React from 'react';
import Menu from '../../component/menu/MenuFooter';
import { HiArrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function CreateProfile() {

    return (
        <>
            <div className="bg-sky-500 flex mx-auto overflow-y-auto h-[800px]">
                <div className="container max-h-screen mx-auto">
                    <div class="flex flex-row py-4 p-4">
                        <div className="w-12 bg-white rounded-xl p-3 flex text-center justify-start items-start">
                            <NavLink to="/Profile">
                                <HiArrowLeft className="w-auto font-bold text-sky-500" size={18} />
                            </NavLink>
                        </div>
                        <div className="w-full flex text-center justify-center items-center">
                            <p className="text-white text-start font-bold text-xl">โปรไฟล์</p>
                        </div>
                    </div>

                    <div className="flex mx-auto justify-start items-start gap-3 p-4">
                        <div className="flex flex-row">
                            <div className="bg-white rounded-lg p-2 flex items-center justify-center h-28 w-44">
                                <img className="h-28 rounded-lg max-w-full" src="./homepage.png" alt="homepage" />
                            </div>
                        </div>   
                        <div className="flex mx-auto flex-col">
                            <input type="text" className="bg-gray-50 border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="ชื่อ-นาสกุล" required />
                            <div className="flex flex-row gap-2 mt-5">
                                <input type="text" className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5" placeholder="อายุ" required />
                                <input type="text" className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5" placeholder="เพศ" required />
                            </div>
                        </div>  
                    </div>
                    <div className="flex mx-auto justify-center items-center">
                        <div className="flex flex-row w-full gap-4 p-3">
                            <div>
                                <input type="text" className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5" placeholder="ชื่อโปรไฟล์" required />
                            </div>
                            <div>
                                <input type="text" className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5" placeholder="โรคประจำตัว" required />
                            </div>
                        </div>
                    </div>

                    <div className="flex mx-auto justify-start items-start p-4">
                        <div className="flex flex-col w-full">
                            <div>
                                <label for="1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เวลาในการทานยาตอนเช้า</label>
                                <input type="time" className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5" placeholder="" required />
                            </div>
                            <div>
                                <label for="2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เวลาในการทานยาตอนกลางวัน</label>
                                <input type="time" className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5" placeholder="" required />
                            </div>
                            <div>
                                <label for="3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เวลาในการทานยาตอนเย็น</label>
                                <input type="time" className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5" placeholder="" required />
                            </div>
                            <div>
                                <label for="4" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เวลาในการทานยาตอนก่อนนอน</label>
                                <input type="time" className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5" placeholder="" required />
                            </div>
                            <div className="py-4">
                            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">บันทึก</button>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <Menu />
            </div>
        </>
    )

}

export default CreateProfile;