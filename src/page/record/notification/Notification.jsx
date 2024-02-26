import React, {useState} from "react";


function Notification() {

    const [record, setRecord] = useState([
        {title: "แจ้งเตือน A (1 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "แจ้งเตือน B (1 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "แจ้งเตือน C (2 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "แจ้งเตือน D (2 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "แจ้งเตือน E (1 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "แจ้งเตือน F (3 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "แจ้งเตือน G (2 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "แจ้งเตือน H (2 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
    ])

    return (
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
    )

}

export default Notification;