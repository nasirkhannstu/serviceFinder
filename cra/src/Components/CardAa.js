import React, { useState, useEffect } from 'react';

const CardAa = ({setCardType}) => {
    const [cardAa, setCardAa] = useState({});
    const [age, setAge] = useState('');

  useEffect(() => {
    fetch('/api').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setCardAa(data));
  }, [])

  const onSubmitClick = (e) => {
    console.log(age)
    fetch('/api',{
        method: "POST", 
        body: JSON.stringify({
            state: "A",
            age: age
        })
    }).then(response => {
        if(response.ok){
          return response.json()
        }
    }).then(data => {
        if(data.status){
            console.log(data.state)
            data.state == 'Ba' ? setCardType('Ba') : setCardType('Bb')
        }else{
            setCardAa({...cardAa, message:data.state})
        }
    });
  }
    return (
        <div className="card bg-dark text-white" style={{height: "100%", border:"unset"}}>
            <div className="card-body mt-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <h2>{cardAa.text}</h2>
                  {cardAa.message && <span className="text-danger">{cardAa.message}</span>}
                  <input 
                    type="text"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    className="form-control mt-3"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <button className="btn btn-outline-dark text-white btn-lg" style={{backgroundColor: "#2f3a78"}}> Back </button>
              <button className="btn btn-outline-dark text-white btn-lg" onClick={e=>onSubmitClick(e)} style={{backgroundColor: "#2f3a78"}}> Send </button>
            </div>
        </div>
    )
}
export default CardAa