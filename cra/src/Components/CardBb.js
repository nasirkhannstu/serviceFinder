import React, { useState, useEffect } from 'react';
import { TransitionGroup  } from 'react-transition-group'; 
import Select from 'react-select'
import '../App.css';

let options = []

const CardBb = ({setCardType}) => {
    const [cardBb, setCardBb] = useState({});
    const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    fetch('/api/cardBb').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => {
        setCardBb(data)
        options = []
        data.options.map(op => {
            let opt = {value:op, label: op}
            options.push(opt)
        })
    });
  }, [])

  const handleBack = e => {
    console.log("Clicked")
    selectedValue !== "" ? setSelectedValue(""):setCardType('Aa')
    
  }
  const handleChange = e => {
    console.log(e.value)
    setSelectedValue(e.value);
  }
  const serviceConfirmed = e => {
    const url = `https://www.google.com/search?q=${selectedValue}`
    window.location.href = url;
  }
    return (
            <div className="card bg-dark text-white" style={{height: "100%", border:"unset"}}>
              <div className="card-body mt-5">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    {selectedValue === '' && <div className="card-sbody">
                      <h2 className="mb-4">{cardBb.text}</h2>
                        {cardBb?cardBb.options && cardBb.options.length > 0 && 
                          <Select 
                            options={options} 
                            onChange={handleChange}
                            styles={{color:"black", backgroundColor:"red"}}
                          />
                        :""}
                    </div>}
                    {selectedValue !== '' && <div className="card-sbody">
                      <h2 className="mb-4">Do you want to go at:</h2>
                      <h1 className="text-primary text-uppercase">{selectedValue}</h1>
                    </div>}                    
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <button className="btn btn-outline-dark text-white btn-lg" onClick={e=>handleBack()} style={{backgroundColor: "#2f3a78"}}> Back </button>
                <button className="btn btn-outline-dark text-white btn-lg" onClick={e=>serviceConfirmed()} disabled={selectedValue === '' ? true:false} style={{backgroundColor: "#2f3a78"}}>Yes</button>
              </div>
          </div>
    )
}
export default CardBb