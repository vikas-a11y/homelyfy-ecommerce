import { useState } from "react";
import { MdEmail } from "react-icons/md";

const Subscribe = () => {

    const [email, setEmail] = useState ("");
    const handleSubscribe = () => {

        if (!email) {
            alert("Please enter your email address");
            return;
        }

        console.log(email);

        alert(`subscribed successfully: ${email}`);

        setEmail("");
    };
  return (
    <div>
       <div className='relative p-14  max-w-7xl m-12 rounded-xl  flex gap-5 justify-between bg-cover bg-center bg-no-repeat' style={{backgroundImage: "url('/assets/images/genral-pgyscian-2.webp')"}}>

        {/* Gradient Overlay */}
  <div className="absolute rounded-xl  inset-0 bg-gradient-to-br from-black/80 via-gray-900/85 to-black/90"></div>
          <div className='relative z-10 flex gap-5'>
             <div className='w-16 h-16 rounded-full bg-green-600/40  border border-green-600/50 shadow-lg  flex items-center justify-center'>
                  <MdEmail size={35} className="text-white" />
             </div>
             <div className=''>
                <h2 className='text-2xl font-bold text-white mb-2'>Stay Updated With Homelyfy</h2>        
                <p className='text-gray-400 text-base'>Get the latest deals and offers & new arrivals straight <br /> to your inbox!</p>

             </div>
          </div>

          <div className='relative z-10'>
              <div className='flex '>
                 <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' className='p-3 rounded-l-lg w-72'/>
                 <button onClick={handleSubscribe} className='bg-green-600 text-white p-3 rounded-r-lg font-semibold cursor-pointer hover:bg-green-700 transition-all duration-300'>Subscribe</button>
              </div>
              <div>
                  <p className='text-sm text-gray-400  mt-4'>No spam, unsubscribe anytime.</p>
              </div>
          </div>
       </div>


    </div>
  )
}

export default Subscribe;