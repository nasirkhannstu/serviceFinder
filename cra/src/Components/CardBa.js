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

  const linkConfirmed = link => {
    const url = `https://www.${link}.com`
    window.location.href = url;
  }
    return (
        <div className="card bg-dark text-white" style={{height: "100%", border:"unset"}}>
            <div className="card-body mt-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="row">
                    <h2>{cardBa?cardBa.text:""}</h2>
                    {cardBa ? cardBa.options && cardBa.options.length > 0 && cardBa.options.map(op => (
                        <div className="col-6 py-5 border mt-4"  onClick={e=>linkConfirmed(op)} style={{cursor: "pointer"}}>{op}</div>
                    )):""}                    
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <button className="btn btn-outline-dark text-white btn-lg" onClick={e=>setCardType('Aa')} style={{backgroundColor: "#2f3a78"}}> Back </button>
              <button className="btn btn-outline-dark text-white btn-lg" disabled style={{backgroundColor: "#2f3a78"}}> Send </button>
            </div>
        </div>
    )
}
export default CardBa