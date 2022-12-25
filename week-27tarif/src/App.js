import React from 'react';
import tariflist from './components/Tariflist';
import Tarifs from './components/Tarifs';
import "./styles/mainStyle.scss";
import Wrapper from './components/Wrapper';

function App() {

const tCard = tariflist.map((tarif) => <Tarifs key={tarif.name} name={tarif.name} speed={tarif.speed} price={tarif.price} color={tarif.color}></Tarifs>)
return (
  <div className='scssClass'>
    <Wrapper>
      {tCard}
    </Wrapper>
  </div>
);

}

export default App;
