import React, { useState } from 'react';
import './WorriorCardSection.css'
import { GrMoney } from 'react-icons/gr';

import { AiOutlineMinusCircle } from 'react-icons/ai';


import WorriorCard from './WorriorCard';
const order = [
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 },
    { name: 22 }
]
const WorriorCardSection = () => {
    const [product, setProduct] = useState([]);
    const handleOrderCollect = (e, i) => {
        console.log(e, i)
        if (e.target.checked) {
            setProduct([...product, i])
        }
        else {
            setProduct(product.filter((item) => item !== i))
        }
    }
    console.log(product);
    const handleCancel =()=>{
        setProduct([])
    }
    return (
        <div className='worriors'>
            <h1>My Worriors</h1>
            <div >

                <div className='select-count-area'>
                    <div className='battle-area'>
                        <div className='battle-area-two'>
                            <button className='battle-area-btn'>Battle Arena </button>
                        </div>
                        <div className='battle-area-two'>
                            <button className='battle-area-btn battle-btn-two'>Junkyard Tab</button>
                        </div>
                    </div>
                    <div className='selceted-item'>
                        <button className='selected-item-btn selected'>All</button>
                        <button className='selected-item-btn'>Slumber</button>
                        <button className='selected-item-btn'>Prophets</button>
                    </div>
                    <div className='select-cancel-area'>
                        <div>
                            <span ><AiOutlineMinusCircle style={{ background: "red", color: "white", borderRadius: "50%" }} /></span>
                            <span> {product.length} selected</span>
                            <button className='selected-area-btn'>restart</button>
                            <button className='selected-area-btn' onClick={handleCancel} >cancel</button>
                        </div>
                        <div>Level: hight to low <span> + </span></div>
                    </div>
                </div>
            </div>

            {/* make a card are  */}

            <div className='warrior-card-section'>
                {
                    order.map((item, index) => <WorriorCard item={item} handleOrderCollect={handleOrderCollect} index={index} ></WorriorCard>)
                }
            </div>
            <div className="pagination">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default WorriorCardSection;