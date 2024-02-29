import React, { useState, useEffect } from 'react';
import { GrAdd } from "react-icons/gr";

import Menu from '../../component/menu/MenuFooter';
import { NavLink } from "react-router-dom";

import { db, storage } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore';



function Profile() {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db, "users"));
          const profilesArray = [];
          querySnapshot.forEach((doc) => {
            profilesArray.push({ id: doc.id, ...doc.data() });
          });
          setProfile(profilesArray);
        };
    
        fetchData().catch(console.error);
      }, []);

    return(
        <>
            <div className="bg-sky-500">
                <div className="min-h-screen">
                    <div className="flex flex-row mx-auto text-center justify-end items-end p-9">
                        <div className="w-56">
                            <p className="text-white font-bold text-xl">โปรไฟล์</p>
                        </div>
                        <div className="w-10">
                            <p className="text-white font-bold text-base">ตั้งค่า</p>
                        </div>
                    </div>

                    <div className="mx-auto flex justify-center items-center p-4">

                        <div className="grid grid-cols-2 gap-4">
                            {profile.length == 0 ? (
                               <div className="flex flex-col items-center">
                                    <div className="rounded-lg p-2 flex items-center justify-center h-32 w-full bg-gray-200 animate-pulse">
                                        <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                                    </div>
                                    <div className="text-center text-white mt-2">Loading...</div>
                                </div>
                            ):(
                                profile.map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="rounded-lg p-2 flex items-center justify-center h-32 w-full">
                                      <img className="h-auto rounded-lg max-w-full" src={item.profile} alt={`Profile ${i}`} />
                                    </div>
                                    <div className="text-center text-white mt-2">{item.fullName} {i+1}</div>
                                </div>  
                                ))
                            )
                            }
                            <NavLink to="/createProfile" className="flex flex-col items-center">
                                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-32 w-full">
                                    <GrAdd className="w-auto font-bold text-sky-500" size={28} />
                                </div>
                                <div className="text-center text-white mt-2">เพิ่ม โปรไฟล์</div>
                            </NavLink>
                        </div>

                    </div>
                </div>
                <Menu />
            </div>
        </>
    ) 
}

export default Profile