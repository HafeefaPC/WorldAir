import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import t1 from '../../assets/t1.svg'
import t2 from '../../assets/t2.svg'
import t3 from '../../assets/t3.svg'
import t4 from '../../assets/t4.svg'
import t5 from '../../assets/t5.svg'
import t6 from '../../assets/t6.svg'
import t7 from '../../assets/t7.svg'
import t8 from '../../assets/t8.svg'
import curve from '../../assets/curve.svg'
import ticket from '../../assets/ticket.svg'
import travel from '../../assets/travel.svg'
import card from '../../components/card/card'


export default function home() {
    
  return (
    <>
     <Navbar/> 
     <div className='flex bg-[#171A1F] w-full  text-center'>
        <img src={t1} alt="t1" className='  py-[14rem] px-9'/>
        <img src={t3} alt="t3"  className='  '/>
        <img src={t2} alt="t2"  className='p-3'/>
        <img src={t4} alt="t4" className='  '/>
        <img src={t5} alt="t5"  className='  '/>
        <img src={t6} alt="t6" className='  '/>
        <img src={t7} alt="t7"  className='  '/>
        <img src={t8} alt="t8"  className='  '/>
     </div>
     <div className='bg-white w-full'>
        <h1>About Us</h1>
        <img src={ticket} className=''/>
         <img src={curve} className=''/>
      <p>Here we arrive as your trusted companion in the world of exploration, where every second counts and every connection matters. In the dynamic realm of global commerce, where opportunities are boundless and distances are mere numbers, we elevate your journey to new heights.</p>
      <button>
        <img src={travel} className=''/>
      </button>
     </div>
     <div>
        <h1>Services</h1>
        <card name="" img=" " para=" " />
     </div>
     <Footer/>
    </>
  )
}
