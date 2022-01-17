import React from 'react'
import './donate.css'

const Donate = () => {
    return (
        <div className='donation-sec'>
           
           <h1>Your Gift</h1>
           <h2>Please Select your donation below</h2>
           <div className='pay-btn'>
               <button>one time</button>
               <button>Monthly</button>
           </div>
           <div className="rupee-btn">
               <button className='home-btn'>$10</button>
               <button className='home-btn'>$25</button>
               <button className='home-btn'>$50</button>
               <button className='home-btn'>$100</button>
           </div>
          <button className='amount-btn'>other amount: ___</button>
          <button className='nav-btn'>pay & donate</button>
         <div>
         <img src="images/thinker.gif" alt="adv" className='banner' />
         </div>
        </div>
    )
}

export default Donate
