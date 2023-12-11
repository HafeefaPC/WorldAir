import React from 'react'
import Navbar from '../../components/Navbar/navbar'

import './about.css'
import image35 from '../../assets/image35.svg'
import traveller from '../../assets/traveller.png'
import flight from '../../assets/flight.png'



export default function About() {
  return (
    <div className='About'>
        <Navbar/> 
        <div className='about-container'>
          <div className='about-content'>
            <h1>
              About us
            </h1>
           <img id='image1' src={image35} />
           <div className='para'>
           <p><p>At WorldAir,</p> <br />we are passionate about transforming the way you explore the world. Our enthusiasm lies in reshaping your exploration of the world. We aspire to curate a travel experience that transcends the conventional, turning each journey into a gateway for meaningful discovery and connection. 
Embark your journey with us and let WorldAir be the wings that carry your ambitions to new horizons. <br />Discover a world of convenience, connectivity, and unparalleled service – experience business travel like never before</p>
           </div>

          </div>
          <div className='about-elements'>
            <div className='elements'>
              <img id='image2' src={traveller}/>
            <img id='image3' src={flight} /></div>
            

          </div>
          
          </div>
          <div className='footer'>
            <div className='footercontent'>
              
            </div>

          </div>
          

        </div>
      
       

     
  )
}
