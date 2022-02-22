import React, { useEffect, useState } from 'react';
import { GrMoney } from 'react-icons/gr';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { FiDatabase } from "react-icons/fi";
import pic from '../../Image/card-img.png'
import pic1 from '../../Image/Screenshot_3-removebg-preview (2) 2.png'
import './WorriorCardSection.css'
const WorriorCard = ({item,index,handleOrderCollect}) => {
     const [time,setTime] = useState([]);
    const times = new Date();
         
      
    return (
        <div className='card-section'>
          <div className='worrior-card'>
            <div className='card-img'>
                <img src={pic} />
                <div className='card-selected'>
                    <input type="checkbox"  onChange={(e)=>{handleOrderCollect(e,index)}}    className='checkbox-round' />
                    <h6><span>IN BATTLE</span></h6>
                </div>
            </div>
            <div className='card-body'>
                <div className='game-level'>
                    <span className='level-serial'>#12</span>
                    <span className='level-up'>lvl 30</span>
                </div>
                <div className='reward'>
                    <p>Reward</p>
                    <h2><FiDatabase /> <span>22000</span></h2>
                </div>
                <div className='duration'>
                    <div className='game-time'>
                        <p>Duration</p>
                     
                        <span>12h </span>
                        <span>12m </span>
                        <span>12s</span>
                     
                    </div>
                    <div className='game-logo'>
                        <img src={pic1} />
                    </div>
                </div>
            </div>
         </div>
    </div>


    );
};

export default WorriorCard;