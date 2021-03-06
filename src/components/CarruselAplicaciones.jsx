import React from 'react';
import '../assets/styles/components/carruselAplicaciones.scss';
import ButtonComponent from './ButtonComponent';
import SOAT from '../assets/img/Carrusel/SOAT_2.png';
import MOTO from '../assets/img/Carrusel/Seguro_moto_1.png';
import HUELLITAS from '../assets/img/Carrusel/Seguro_huellitas_2.png';
import CREDITO from '../assets/img/Carrusel/Credito_2.png'
import Curva from '../assets/img/Carrusel/curva_2.png'

const CarruselAplicaciones = () => {
  return (
    <section className='carrusel'>
      <div className='carrusel__container'>

        <div className='carrusel-item'>
          <img className='carrusel-item__img' src={SOAT} alt='Imagen' />
          <div className='carrusel-item__details'>
            <p className='carrusel-item__details__tittle'>SOAT</p>
            <div>
              <ButtonComponent location='/ingresaPlaca' color='blanco' name='Cotiza Gratis' />
            </div>

          </div>
        </div>

        <div className='carrusel-item'>
          <img className='carrusel-item__img' src={MOTO} alt='Imagen' />
          <div className='carrusel-item__details'>
            <p className='carrusel-item__details__tittle'>Seguro de moto</p>
            <div className='carrusel-item__details__button'>
              <ButtonComponent location='/ingresaPlaca' color='blanco' name='Conoce más' />
            </div>

          </div>
        </div>

        <div className='carrusel-item'>
          <img className='carrusel-item__img' src={HUELLITAS} alt='Imagen' />
          <div className='carrusel-item__details'>
            <p className='carrusel-item__details__tittle'>
              Seguro para
              <br />
              {' '}
              mascotas
            </p>
            <div>
              <ButtonComponent location='/ingresaPlaca' color='blanco' name='Conoce más' />
            </div>

          </div>
        </div>

        <div className='carrusel-item'>
          <img className='carrusel-item__img' src={CREDITO} alt='Imagen' />
          <div className='carrusel-item__details'>
            <p className='carrusel-item__details__tittle'>Crédito</p>
            <div>
              <ButtonComponent location='/ingresaPlaca' color='blanco' name='Conoce más' />
            </div>
          </div>
        </div>
      </div>
      
      <div className = 'Curva' >
        <img src={Curva} alt="Curva"/>
      </div>
      
    </section>
  );
};

export default CarruselAplicaciones;
