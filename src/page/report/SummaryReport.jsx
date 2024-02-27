import React, { useState } from 'react';
import Menu from '../../component/menu/MenuFooter';
function SummaryReport() {
    const [record, setRecord] = useState([
        {title: "รายงานการทานยา", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "รายงานการทานยา", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "รายงานการทานยา", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "รายงานการทานยา", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "รายงานการทานยา", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "รายงานการทานยา", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "รายงานการทานยา", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "รายงานการทานยา", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
    ])

    return (

    <div className="bg-sky-500 flex mx-auto overflow-y-auto h-[800px]">
        <div className="container min-h-screen">

            <div className="mx-auto max-w-4xl p-4">
                <div className="flex flex-row justify-around items-center">
                    <div className="text-white">
                    การวิเคราะห์และสรุปผลการทานยา
                    </div>
                </div>
            </div>

            <div className="mx-auto flex justify-center items-center p-2">
                <div className="flex mx-auto  w-full justify-start items-start p-2">
                    <div className="flex flex-col w-full">
                        {record.map((item, i) => (
                            <div key={i} className="bg-white border border-white text-black text-sm rounded-lg mb-2 p-3">
                                <div className="block font-bold text-blue-900">{item.title}</div>
                                <div className="block font-normal text-gray-500">{item.discription}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
        <Menu />
    </div>
        
    )
}

export default SummaryReport;