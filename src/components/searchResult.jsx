import React from 'react'
import '../CSS/search.css'
import Entity from './Entity'
import { useEffect } from 'react'
import image from '../assets/smart-search.png'
import { useSelector, useDispatch } from 'react-redux'
// import {AddToWatchlist,RemoveFromWatchlist} from '../../redux/counterSlice'


const searchResult = ({searchkey,watchlist}) => {
 
  const data = [
    { name: "RTNINDIA", price: 35, daychange: 5, type: "stock", exchange: "BSE" },
    { name: "TCS", price: 3500, daychange: -10, type: "stock", exchange: "NSE" },
    { name: "INFY", price: 1450, daychange: 8, type: "stock", exchange: "BSE" },
    { name: "WIPRO", price: 400, daychange: 2, type: "stock", exchange: "NSE" },
    { name: "HDFCBANK", price: 1650, daychange: -3, type: "stock", exchange: "BSE" },
    { name: "RELIANCE", price: 2500, daychange: 6, type: "stock", exchange: "BSE" },
    { name: "ADANIENT", price: 2200, daychange: -15, type: "stock", exchange: "NSE" },
    { name: "ITC", price: 350, daychange: 1, type: "stock", exchange: "NSE" },
    { name: "BAJAJFINSV", price: 1900, daychange: 10, type: "stock", exchange: "BSE" },
    { name: "ONGC", price: 180, daychange: -1, type: "stock", exchange: "NSE" },
    { name: "POWERGRID", price: 250, daychange: 3, type: "stock", exchange: "BSE" },
    { name: "BHARTIARTL", price: 700, daychange: 5, type: "stock", exchange: "NSE" },
    { name: "MARUTI", price: 9600, daychange: -12, type: "stock", exchange: "NSE" },
    { name: "SUNPHARMA", price: 1040, daychange: 4, type: "stock", exchange: "BSE" },
    { name: "HCLTECH", price: 1200, daychange: -8, type: "stock", exchange: "NSE" },
    { name: "JSWSTEEL", price: 750, daychange: 7, type: "stock", exchange: "BSE" },
    { name: "TATAMOTORS", price: 620, daychange: -6, type: "stock", exchange: "BSE" },
    { name: "ULTRACEMCO", price: 8600, daychange: 3, type: "stock", exchange: "NSE" },
    { name: "COALINDIA", price: 220, daychange: -2, type: "stock", exchange: "BSE" },
    { name: "SBIN", price: 620, daychange: 4, type: "stock", exchange: "NSE" },
  ];
  const watchlistx=useSelector((state) => {
    return state[`watchlist${watchlist}`]
  }
  )
  
//   useEffect(() => {
//  console.log(watchlist)
  
    
//   }, [watchlist])
  
  
  return (

    <>
    {
      searchkey===""?<div className='search11 flex'>
        <img src={image} alt="" />
        Enter script to begin search
        
        
        </div>:
    <div className='search11'>

{
  data.filter((entities) => {
    return entities.name.toLowerCase().includes(searchkey.toLowerCase())
  }
  ).map((element) => {
    const exists=watchlistx.some((watchlist1_element) => {
      return (
   element.name===watchlist1_element.name &&
   element.exchange===watchlist1_element.exchange
      )
    }
    )

    return <Entity key={element.name} name={element.name} current_price={element.price} daychange={element.daychange} exchange={element.exchange} watchlist={watchlist} exists={exists}/>
  }
  )
}


    </div>
}
    </>
  )
}

export default searchResult
