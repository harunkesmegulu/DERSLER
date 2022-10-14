import './Card.css';


import React from 'react'

const Card = ({item}) => {
  return (
    <div className='cards-ares-container'>
      <div className='bars'></div>
      <h1 className='language-title'></h1>
      <div className="cards-container"></div>
      {item.map((item)=>{
        return<Item Card={item}/>
      })}
    </div>
  )
}

export default Card
