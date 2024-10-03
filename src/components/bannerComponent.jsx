import React from 'react';
import banner from '../img/banner.png'
import '../styles/headerComponent.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const BannerComponent=()=>{
    return(
        <div className='banner'>
            <div className='child__1'>
                <h2>Bienvenidos a<span> NeuroCode </span></h2>
                <p>
                    ¡Hola! Prepárate para mejorar tus habilidades de programación y 
                    desbloquear tu verdadero potencial. En este espacio, cada reto es una oportunidad de crecimiento, 
                    cada línea de código te acerca a tus metas. Ya sea que estés empezando o perfeccionando tus conocimientos, 
                    estamos aquí para guiarte en cada paso. ¡Atrévete a descubrir hasta dónde puedes llegar!.
                </p>
                <button type='button'>
                    <span>Empezar</span>
                    <i className="bi bi-chevron-double-right"></i>
                </button>
            </div>
            <div>
                <div className='img__container'>
                    <img src={banner} alt='banner'/>
                </div>
            </div>
        </div>
    )
}
export default BannerComponent;
