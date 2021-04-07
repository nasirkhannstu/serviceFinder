import React, { useState, useEffect } from 'react';

const CardAa = ({setCardType}) => {
    const [cardAa, setCardAa] = useState({});
    const [age, setAge] = useState(0);

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
        <div className="card bg-dark text-white">
            <div className="card-body p-5">
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
            <div className="card-footer d-flex justify-content-between">
              <button className="btn btn-outline-dark text-white"> Back </button>
              <button className="btn btn-outline-dark text-white" onClick={e=>onSubmitClick(e)}> Send </button>
            </div>
        </div>
    )
}
export default CardAa