import React, { useState, useRef, useEffect } from 'react';

import { HiArrowLeft } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";

import { useLocation, useNavigate, NavLink } from 'react-router-dom';

import Menu from '../../component/menu/MenuFooter';

function CreateCapsule() {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let navigate = useNavigate();
    let name = query.get('name');
    useEffect(() => {
        if(!name) {
            navigate('/capsule');
        }
    },[name, navigate])

    const [inputFields, setInputFields] = useState([
        { time: '' },
      ]);
    
      const handleAddInput = () => {
        setInputFields([...inputFields, { time: '' }]);
      };
    
      const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index].time = event.target.value;
        setInputFields(values);
      };

      const fileInputRef = useRef(null);

      const handleFileInputClick = () => {
        fileInputRef.current.click();
      };


    return (
        <>
        <div className="bg-white overflow-y-auto h-[970px]">
                <div className="min-h-screen">
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

                    <div className="flex mx-auto justify-start items-start gap-3 p-4">  
                        <div className="flex mx-auto flex-col">
                            <div className="mt-2">
                                <label>ชื่อแคปซูล</label>
                                <input type="text"
                                    className="bg-gray-100 border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" 
                                    placeholder="ชื่อแคปซูล" 
                                    value={name}
                                    disabled
                                />
                            </div>
                            <div className="mt-2">
                                <label>ชื่อยา</label>
                                <input type="text" className="bg-gray-100 border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="ชื่อยา" />
                            </div>
                        </div>  
                        <div className="flex flex-row">
                            <div className="rounded-lg mt-8 flex items-center justify-center h-28 w-44 bg-gray-500 cursor-pointer" onClick={handleFileInputClick}>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/png, image/jpeg"
                                    onChange={(event) => console.log(event.target.files)}
                                />
                                <span className="text-white font-semibold">Upload File</span>
                            </div>
                        </div> 
                    </div>
                    <div className="flex justify-start items-start p-4">  
                        <div className="flex flex-row gap-5">
                            <div>
                                <label className="text-xs">จำนวนยาทั้งหมด (เม็ด)</label>
                                <input type="text" className="bg-gray-100 border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="0" />
                            </div>
                            <div>
                                <label className="text-xs">จำนวนยาในแต่ละครั้ง (เม็ด)</label>
                                <input type="text" className="bg-gray-100 border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="0" />
                            </div>
                        </div> 
                    </div>

                    <div className="flex justify-start items-start p-4">  
                        <div className="flex flex-col gap-5 w-full">
                            <div>
                                <label className="text-xs">วันที่ในการทานยา</label>
                                <input type="date" className="bg-gray-100 border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="0" />
                            </div>
                            <div>
                                <label className="text-xs">เวลาในการทานยา</label>
                                {inputFields.map((inputField, index) => (
                                    <input
                                    key={index}
                                    type="time"
                                    className="bg-gray-100 border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 mb-1"
                                    placeholder="0"
                                    value={inputField.time}
                                    onChange={(event) => handleInputChange(index, event)}
                                    />
                                ))}
                                <button
                                    type="button"
                                    className="bg-gray-100 border border-gray-500 text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 mb-1"
                                    onClick={handleAddInput}
                                >
                                    +
                                </button>
                            </div>
                        </div> 
                    </div>

                    <div className="py-2 px-3">
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">บันทึก</button>
                    </div>
                </div>
                <Menu />
            </div>
        </>
    )

}

export default CreateCapsule;