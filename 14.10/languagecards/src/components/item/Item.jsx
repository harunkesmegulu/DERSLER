import React from 'react';
import {useState} from 'react';

const Item = (Card) => {
    const[logo, setLogo]=useState(true)
   
    const{name,img,options}=Card
     // console.log(Card)
  return (
    <div className='card' onClick={prewClick}>
        {logo ?(
            <div>
            <img src={img} alt="" className="card-logo" />
            <h3 className="card-title">{name}</h3>
    
            </div>

        ) :(
            <ul className="list">
                {options.map((a,index) => {
                    return (<li key={index}> {a} </li>)
                }       
                )}
            </ul>
        )
    }
        
      
    </div>
  )
}

export default Item
