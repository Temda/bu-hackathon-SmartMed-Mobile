import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Menu from '../../component/menu/MenuFooter';

import Notification from './notification/Notification'
import History from './history/History'

const PersonalRecord = () => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let navigate = useNavigate();
    let tab = query.get('tab');
    useEffect(() => {
        if(!tab) {
            navigate('/personalRecord?tab=1');
        }
    },[tab, navigate])

    return (
        <>
            <div className="bg-sky-500 flex mx-auto overflow-y-auto h-[800px]">
                <div className="container min-h-screen">

                <div className="mx-auto max-w-4xl p-4">
                    <div className="flex flex-row justify-around items-center py-2 px-5 text-sm font-medium text-center bg-white rounded-lg gap-2">
                        <Link to="/personalRecord?tab=1" className={`w-80 block py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-sky-300 ${tab === '1' ? 'bg-sky-600 text-sky-500 bg-opacity-30' : 'bg-white text-sky-500  hover:text-sky-500 hover:bg-sky-500 hover:bg-opacity-30 active:bg-sky-700'}`}>
                        ประวัติการทานยา
                        </Link>
                        <Link to="/personalRecord?tab=2" className={`w-80 block py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-sky-300 ${tab === '2' ? 'bg-sky-600 text-sky-500 bg-opacity-30' : 'bg-white text-sky-500  hover:text-sky-500 hover:bg-sky-500 hover:bg-opacity-30 active:bg-sky-700'}`}>
                        ประวัติการแจ้งเตือน
                        </Link>
                    </div>
                </div>

                <div className="mx-auto flex justify-center items-center p-2">
                {tab === '1' && 
                 <History />
                }
                {tab === '2' && 
                    <Notification />
                }
                </div>

                </div>
                <Menu />
            </div>
        </>
    )
}

export default PersonalRecord;