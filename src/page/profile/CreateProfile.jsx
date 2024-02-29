import React, { useState, useRef } from "react";
import Menu from "../../component/menu/MenuFooter";
import { HiArrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";

import { db, storage } from "../../firebase";
import { collection, addDoc } from 'firebase/firestore';
import { ref as storageRef, uploadBytes } from 'firebase/storage';

function CreateProfile() {

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [profileName, setProfileName] = useState("");
  const [chronicDiseases, setChronicDiseases] = useState("");
  const [morningTime, setMorningTime] = useState("");
  const [noonTime, setNoonTime] = useState("");
  const [eveningTime, setEveningTime] = useState("");
  const [beforeBedTime, setBeforeBedTime] = useState("");

  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const insertUserData = async (userData) => {
    try {
      const docRef = await addDoc(collection(db, "users"), userData);
      console.log("Document written with ID: ", docRef.id);
      alert('บันทึกเรียบร้อย')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        fullName,
        age: Number(age),
        sex,
        profileName,
        chronicDiseases,
        morning: morningTime,
        noon: noonTime,
        evening: eveningTime,
        beforeBed: beforeBedTime
    };

    insertUserData(userData);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="bg-sky-500 flex mx-auto overflow-y-auto h-[800px]">
        <div className="max-h-screen mx-auto">
          <div className="flex flex-row py-4 p-4">
            <div className="w-12 bg-white rounded-xl p-3 flex text-center justify-start items-start">
              <NavLink to="/Profile">
                <HiArrowLeft
                  className="w-auto font-bold text-sky-500"
                  size={18}
                />
              </NavLink>
            </div>
            <div className="w-full flex text-center justify-center items-center">
              <p className="text-white text-start font-bold text-xl">โปรไฟล์</p>
            </div>
          </div>

          <div className="flex mx-auto justify-start items-start gap-3 p-4">
          <div className="flex flex-row">
                <div className="rounded-lg flex items-center justify-center h-28 w-44 bg-gray-500 cursor-pointer" onClick={handleFileInputClick}>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/png, image/jpeg"
                        onChange={(event) => console.log(event.target.files)}
                    />
                    <span className="text-white font-semibold">Upload Profile</span>
                </div>
            </div> 
            <div className="flex mx-auto flex-col">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-gray-50 border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5"
                placeholder="ชื่อ-นาสกุล"
                
              />
              <div className="flex flex-row gap-2 mt-5">
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5"
                  placeholder="อายุ"
                  
                />
                <input
                  type="text"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                  className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5"
                  placeholder="เพศ"
                  
                />
              </div>
            </div>
          </div>
          <div className="flex mx-auto justify-center items-center">
            <div className="flex flex-row w-full gap-4 p-3">
              <div>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5"
                  placeholder="ชื่อโปรไฟล์"
                  
                />
              </div>
              <div>
                <input
                  type="text"
                  value={chronicDiseases}
                  onChange={(e) => setChronicDiseases(e.target.value)}
                  className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5"
                  placeholder="โรคประจำตัว"
                  
                />
              </div>
            </div>
          </div>

          <div className="flex mx-auto justify-start items-start p-4">
            <div className="flex flex-col w-full">
              <div>
                <label
                  for="1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  เวลาในการทานยาตอนเช้า
                </label>
                <input
                  type="time"
                  value={morningTime}
                  onChange={(e) => setMorningTime(e.target.value)}
                  className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5"
                  placeholder=""
                  
                />
              </div>
              <div>
                <label
                  for="2"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  เวลาในการทานยาตอนกลางวัน
                </label>
                <input
                  type="time"
                  value={noonTime}
                  onChange={(e) => setNoonTime(e.target.value)}
                  className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5"
                  placeholder=""
                  
                />
              </div>
              <div>
                <label
                  for="3"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  เวลาในการทานยาตอนเย็น
                </label>
                <input
                  type="time"
                    value={eveningTime}
                    onChange={(e) => setEveningTime(e.target.value)}
                  className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5"
                  placeholder=""
                  
                />
              </div>
              <div>
                <label
                  for="4"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  เวลาในการทานยาตอนก่อนนอน
                </label>
                <input
                  type="time"
                  value={beforeBedTime}
                  onChange={(e) => setBeforeBedTime(e.target.value)}
                  className="bg-white border border-white text-black text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 w-full p-3.5"
                  placeholder=""
                  
                />
              </div>
              <div className="py-4">
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>
        </div>
        <Menu />
      </div>
      </form>
    </>
  );
}

export default CreateProfile;
