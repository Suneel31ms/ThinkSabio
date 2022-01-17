import React from 'react'
import { useHistory } from 'react-router-dom'
import './footer.css'

const Footer = () => {
const history = useHistory();
const myStock = () =>{
    history.push('/stock');
}
const myOption = () =>{
    history.push('/option');
}
const myCrypto = () =>{
    history.push('/crypto');
}

    return (
        <div>
            <div className="footer-sec">
               
                <button onClick={myStock} className='home-btn'>stock</button>
                <button onClick={myOption} className='home-btn'>options</button>
                <button onClick={myCrypto} className='home-btn'>crypto</button>
               
             
               
            </div>
        </div>
    )
}

export default Footer
