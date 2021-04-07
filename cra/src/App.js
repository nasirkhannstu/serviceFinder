import React, { useState } from 'react';

import Header from './Components/layout/Header';
import CardAa from './Components/CardAa';
import CardBa from './Components/CardBa';
import CardBb from './Components/CardBb';

function App() {
  const [card, setCard] = useState('Aa');
  return (
    <>
      <Header />
      <div className="row text-center mt-5 w-100">
        <div className="col-md-6 offset-md-3">
          {card === 'Aa' && <CardAa setCardType={setCard} />}
          {card === 'Ba' && <CardBa setCardType={setCard} />}
          {card === 'Bb' && <CardBb setCardType={setCard} />}
        </div>
      </div>
    </>
  );
}

export default App;
