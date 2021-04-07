import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import '../App.css';

let options = []

const CardBb = ({setCardType}) => {
    const [cardBb, setCardBb] = useState({});
  useEffect(() => {
    fetch('/api/cardBb').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => {
        setCardBb(data)
        data.options.map(op => {
            let opt = {value:op, label: op}
            options.push(opt)
        })
    });
  }, [])

  const onSubmitClick = (e) => {
    
  }
    return (
        <div className="card bg-dark text-white">
            <div className="card-body p-5">
              <h2 class="mb-4">{cardBb.text}</h2>
                {cardBb?cardBb.options && cardBb.options.length > 0 && <Select options={options} styles={{color:"black", backgroundColor:"red"}} />:""}
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button className="btn btn-outline-dark text-white" onClick={e=>setCardType('Aa')}> Back </button>
              <button className="btn btn-outline-dark text-white" disabled>Yes</button>
            </div>
        </div>
    )
}
export default CardBb