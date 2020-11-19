import React from 'react';

import '../assets/styles/pages/pago.scss';
import TusDatos from '../components/TusDatos';
import ListOfProducts from '../containers/ListOfProducts';

const Pago = () => {
  return (
    <div className='pago'>
      <h1 className='pago-title'>Pago</h1>
      <TusDatos />
      <button className='elegir'>Elige tu forma de pago</button>
      <div className='containerList'>
        <ListOfProducts />
      </div>
      <button className='pagar'>COMPRAR</button>
    </div>
  );

};

export default Pago;
