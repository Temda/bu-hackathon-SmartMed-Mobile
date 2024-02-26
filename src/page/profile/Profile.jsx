import React, { useState } from 'react';
import { GrAdd } from "react-icons/gr";


function Profile() {

    const [profile, setProfile] = useState([
        {image: "./homepage.png", name: "คุณตา"},
        {image: "./homepage.png", name: "คุณตา"},
        {image: "./homepage.png", name: "คุณตา"}
    ])

    return(
        <>
            <div className="bg-sky-500">
                <div className="container min-h-screen">
                    <div class="flex flex-row mx-auto text-center justify-end items-end p-9">
                        <div className="w-56">
                            <p className="text-white font-bold text-xl">โปรไฟล์</p>
                        </div>
                        <div className="w-10">
                            <p className="text-white font-bold text-base">ตั้งค่า</p>
                        </div>
                    </div>

                    <div className="mx-auto flex justify-center items-center p-4">

                        <div className="grid grid-cols-2 gap-4">
                            {
                                profile.map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-32 w-full">
                                    <img className="h-auto rounded-lg max-w-full" src={item.image} alt={`Profile ${i}`} />
                                    </div>
                                    <div className="text-center text-white mt-2">{item.name} {i}</div>
                                </div>
                                ))
                            }
                            <div className="flex flex-col items-center">
                                <div className="bg-white shadow-lg rounded-lg p-2 flex items-center justify-center h-32 w-full">
                                    <GrAdd className="w-auto font-bold text-sky-500" size={28} />
                                </div>
                                <div className="text-center text-white mt-2">เพิ่ม โปรไฟล์</div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    ) 
}

export default Profile