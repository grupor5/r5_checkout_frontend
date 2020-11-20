/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import '../assets/styles/components/producto.scss';
import moto from '../assets/img/Product/moto.jpg';
import trash from '../assets/img/Product/trash.png';

const Producto = () => (
  <section className='product-section'>
    <div className='product-header'>
      <h2>
        <input type='checkbox' name='checkbox' id='1' />
        Producto
      </h2>
      <Link to='/'>
        <button type='button'><img src={trash} alt='trash' /></button>
      </Link>
    </div>

    <div className='product-main'>
      <img src={moto} alt='image product' />

      <div className='product-main_info'>
        <p>Soat placa BLMN </p>
        <p>COP $455.400</p>
        <p>Seguro valido por un año</p>
        <div className='product-main_info_subtotal'>
          <p className='subtotal-title'>Subtotal</p>
          <p className='subtotal-price'>$455.400</p>
        </div>
        <Link to='/'>
          <button type='button'>Agregar bono de descuento</button>
        </Link>
      </div>

    </div>

    <div className='product-footer'>
      <p>Total $455.400</p>
    </div>

  </section>

);

export default Producto;
