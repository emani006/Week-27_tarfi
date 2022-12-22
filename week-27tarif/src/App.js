//import styles from './App.css';
import React from 'react';
import tariflist from './components/Tariflist';
import Tarifs from './components/Tarifs';
import "./styles/mainStyle.css";

function App() {

const tarifCard = tariflist.map((tarif) => <Tarifs key={tarif.name} name={tarif.name} speed={tarif.speed} price={tarif.price}></Tarifs>)

return (
  <div className='container'>
    {tarifCard}
  </div>
);

}

export default App;
