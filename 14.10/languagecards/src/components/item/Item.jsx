import React from 'react';
import {useState} from 'react';
import './Item.css';

const Item = ({Card}) => {
    const[logo, setLogo]=useState(true)
   
    const{name,img,options}=Card;
     // console.log(Card)
     const prewClick=()=>{
        setLogo(!logo)
     }

  return (
    <div className='card' onClick={prewClick}>
        {logo ?(
            <div>
            <img className = "card-logo" src={img} alt="img"   />
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
