import React, {  useState } from 'react'
import { useHistory } from 'react-router-dom'
import Stocks from './Stocks'
import Api from './Api'


const StockList = () => {
    const [stocks] = useState(Api)
    const history = useHistory();
    const myHome = () =>{
        history.push("/");
    }
    return (
                     <div className='pt4 bg-purple h-100'>
                         <div className='top-sec'>
                         <h1>stocks Simplified</h1>
                         <button onClick={myHome} className='nav-btn ph4 pv3'>Back</button>
                     </div>
                        <div className= 'bottom-sec'>
                    
                        {
                             stocks.map(stock =>{
                                return(
                                 <Stocks
                                 key={stock.image}
                                 image = {stock.image}
                                 title = {stock.title}
                                 stockbtn = {stock.Btn}
                                 />
                                )
                             })
                         }
                        </div>
                     </div>
                 )
}

export default StockList
