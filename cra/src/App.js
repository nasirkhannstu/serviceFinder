import React, { useState } from 'react';

import CardAa from './Components/CardAa';
import CardBa from './Components/CardBa';
import CardBb from './Components/CardBb';

function App() {
  const [card, setCard] = useState('Aa');
  return (
    <div className="container-fluid" style={{height: "100%"}}>
      <div className="row text-center" style={{height: "100%"}}>
        <div className="col-md-12" style={{height: "100%"}}>
          {card == 'Aa' && <CardAa setCardType={setCard} />}
          {card == 'Ba' && <CardBa setCardType={setCard} />}
          {card == 'Bb' && <CardBb setCardType={setCard} />}
        </div>
      </div>
    </div>
  );
}

export default App;
