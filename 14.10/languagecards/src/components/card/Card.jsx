import './Card.css';
import React from 'react'
import Item from '../item/Item'
import data from '../../helper/data'

const Card = () => {
  return (
    <div className='cards-ares-container'>
      <div className='bars'></div>
      <h1 className='language-title'>Languages</h1>
      <div className="cards-container"></div>
      {data.map((item)=>{
        return<Item Card={item}/>
      })}
    </div>
  )
};

export default Card
