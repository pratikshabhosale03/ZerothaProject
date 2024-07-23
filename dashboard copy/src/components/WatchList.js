import React, { useState,useContext} from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import { Link } from "react-router-dom";


//import BuyActionWindow from "./BuyActionWindow";
import { Tooltip, Grow } from "@mui/material";
import {KeyboardArrowDown,KeyboardArrowUp,BarChartOutlined,MoreHoriz} from "@mui/icons-material";
import {watchlist}from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";
import "./WatchList.css";
const labels=watchlist.map((subArray)=>subArray["name"]);
/*
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  */

  // export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  // datasets: [
  //   {
  //     label: "# of Votes",
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       "rgba(255, 99, 132, 0.2)",
  //       "rgba(54, 162, 235, 0.2)",
  //       "rgba(255, 206, 86, 0.2)",
  //       "rgba(75, 192, 192, 0.2)",
  //       "rgba(153, 102, 255, 0.2)",
  //       "rgba(255, 159, 64, 0.2)",
  //     ],
  //     borderColor: [
  //       "rgba(255, 99, 132, 1)",
  //       "rgba(54, 162, 235, 1)",
  //       "rgba(255, 206, 86, 1)",
  //       "rgba(75, 192, 192, 1)",
  //       "rgba(153, 102, 255, 1)",
  //       "rgba(255, 159, 64, 1)",
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // };

  const WatchList=()=>{

    const data = {
      labels,
      datasets: [
        {
          label: "Price",
          data: watchlist.map((stock) => stock.price),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };




  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => { 
          return <WatchListItem stock={stock} key={index}/>
          
        })}
      </ul>
    
    <DoughnutChart data={data}/>




</div>      
  );
};

export default WatchList;

const WatchListItem =({stock})=>{
  const[showWatchlistActions,setShowWatchlistActions]=useState(false);

  const handleMouseEnter=(e)=>{
    setShowWatchlistActions(true);
  }

  const handleMouseLeave=(e)=>{
    setShowWatchlistActions(false);
  }
return(
  <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
   
   <div className="item">
    <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
    <div className="itemInfo">
      <span className="percent">{stock.percent}</span>
     {stock.isDown ?(
      <KeyboardArrowDown className="down" />
     ):(
      <KeyboardArrowUp className="down" />
     )}
    
    <span className="price">{stock.price}</span>


    </div>
   </div>
  {showWatchlistActions && <WatchListActions uid={stock.name}/>}


  </li>
);


};
  const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    })
/*
    .then(response => {
      console.log('Order placed successfully:', response.data);
    })
    .catch(error => {
      if (error.response) {
        // Server responded with a status code outside the range of 2xx
        console.error('Server error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request
        console.error('Error:', error.message);
      }
    });

  };

  const handleCancelClick = () => {
    console.log("close")
  };
*/


.then(response => {
  setMessage('Order placed successfully!');
  setTimeout(() => {
    handleClose(); // Close the window after success
  }, 1000); // Display message for 2 seconds
})
.catch(error => {
  if (error.response) {
    setMessage('Failed to place order. Please try again.');
  } else if (error.request) {
    setMessage('No response received from server.');
  } else {
    setMessage('Error occurred: ' + error.message);
  }
});
};

const handleCancelClick = () => {
handleClose(); // Close the window
};

if (!isVisible) return null;
  
  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
         </fieldset>
         <fieldset>

            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        
          <button className="btn btn-blue" onClick={handleBuyClick}>
          
            Buy
          </button>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    
  );
};

// SellActionWindow Component
const SellActionWindow= ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSellClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    })
    .then(response => {
      setMessage('Order placed successfully!');
      setTimeout(() => {
        handleClose(); // Close the window after success
      }, 1000); // Display message for 2 seconds
    })
    .catch(error => {
      if (error.response) {
        setMessage('Failed to place order. Please try again.');
      } else if (error.request) {
        setMessage('No response received from server.');
      } else {
        setMessage('Error occurred: ' + error.message);
      }
    });
  };

  const handleCancelClick = () => {
    handleClose(); // Close the window
  };

  if (!isVisible) return null;

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <button className="btn btn-blue" onClick={handleSellClick}>
          Sell
        </button>
        <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
          Cancel
        </Link>
      </div>
    </div>
  );
};






const WatchListActions=({uid})=>{
  const [displayBoardBuy, setDisplayBoardBuy] = useState(false)
  const [displayBoardSell, setDisplayBoardSell] = useState(false)
 // const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    console.log("buy")
    setDisplayBoardBuy(true);
  };
  const handleSellClick = () => {
    console.log("buy")
    setDisplayBoardSell(true);
  };


  return ( <span className="actions">
  <span>
  {displayBoardBuy &&   
      <BuyActionWindow uid={uid}/>
      }

{displayBoardSell &&   
      <SellActionWindow uid={uid}/>
      }
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
      <button className="buy" onClick={handleBuyClick}>Buy</button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
      <button className="sell" onClick={handleSellClick}>Sell</button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
       <button className="action" > 
        <BarChartOutlined className="icon"/>
       </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
      <button className="action" > 
        <MoreHoriz className="icon"/>
       </button>
      </Tooltip>

  </span>
  </span>

  );
};