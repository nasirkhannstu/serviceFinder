import React, { useState, useEffect } from 'react';

const CardBa = ({setCardType}) => {
    const [cardBa, setCardBa] = useState({});

  useEffect(() => {
    fetch('/api/cardBa').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setCardBa(data));
  }, [])

    return (
        <div className="card bg-dark text-white">
            <div className="card-body p-5">
              <div className="row">
                  <h2>{cardBa?cardBa.text:""}</h2>
                  {cardBa ? cardBa.options && cardBa.options.length > 0 && cardBa.options.map(op => (
                      <div className="col-6 py-5 border mt-4" style={{cursor: "pointer"}}>{op}</div>
                  )):""}
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button className="btn btn-outline-dark text-white" onClick={e=>setCardType('Aa')}> Back </button>
              <button className="btn btn-outline-dark text-white" disabled> Send </button>
            </div>
        </div>
    )
}
export default CardBa