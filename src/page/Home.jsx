import React from 'react';
import { NavLink } from "react-router-dom";

function Home() {

  return (
    <>
        <div className="mx-auto flex justify-center items-center min-h-screen">
            <div className="flex-initial">
                <div className="p-4 text-center"> 
                    <img src="./homepage.png" alt="homepage" />
                    <NavLink to="/profile" type="button"
                      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto w-80">
                        เริ่มต้นใช้งาน
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
