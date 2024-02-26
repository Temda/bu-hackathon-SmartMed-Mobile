import React, {useState} from "react";
function History() {
    const [record, setRecord] = useState([
        {title: "Smart Capsule A (1 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "Smart Capsule B (1 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "Smart Capsule C (2 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "Smart Capsule D (2 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "Smart Capsule E (1 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "Smart Capsule F (3 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "Smart Capsule G (2 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
        {title: "Smart Capsule H (2 เม็ด)", discription: "คุณย่าสมหญิง| เวลา 10.00 น. (17/10/2566)"},
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

export default History;