import React, { useState} from 'react'
import { FiPlus, FiMinus } from "react-icons/fi";
import {faqData} from '../api/faqData';

const Faq = () => {

    const [openId, setOpenId] = useState(null);

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    }; 

  return (
    <div className='bg-gradient-to-br from-green-200 via-white to-green-100 py-14'>
        <div className='max-w-6xl mx-auto'>
            <span className='text-sm text-white font-semibold bg-green-400 px-4 py-1 mb-3 tracking-[2px] rounded-full inline-block'>FAQ</span>
            <h2 className='text-4xl font-extrabold mb-10 border-b-[1px] pb-2 border-green-600'>Frequently Asked Questions</h2>
            
        </div>

        <div className='max-w-6xl m-auto bg-white p-6 rounded-xl shadow-lg'>
            <div className='columns-2 gap-5 gap-y-3 items-start'>
                 {faqData.map((item) =>(

                    <div key={item.id} className={`mb-3 break-inside-avoid ${openId === item.id ? "active" : ""}`}>
                        <button className=' w-full text-left rounded-lg bg-green-100 transition-all duration-300' onClick={() => toggleFaq(item.id)}>
                           <div className='flex gap-4 justify-between items-center p-3 px-4'>
                                 <h3 className='text-sm font-bold text-black/90'>{item.question}</h3>

                         <span className={`transition-transform duration-300 ml-4  ${openId === item.id ? "rotate-180" : "rotate-0"}`}>
                             {openId === item.id ? < FiMinus className="text-bold text-black/90" /> : <FiPlus className="text-bold text-black/90" />}
                         </span>
                            </div> 
                        
                       <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                openId === item.id
                                ? "max-h-40 opacity-100 pb-4"
                                : "max-h-0 opacity-0"
                            }`}
                            >
                            <div className="px-4">
                                <p className="text-gray-500">
                                {item.answer}
                                </p>
                            </div>
                            </div>
                       

                        </button>

                    </div>
                 ))}
            </div>
            <div>

            </div>
                
        </div>
    </div>
  )
}

export default Faq;