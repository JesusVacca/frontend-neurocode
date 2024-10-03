import React from 'react';
import '../styles/headerComponent.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import LogoComponent from './logoComponent';

const FooterComponent =()=>{
    return(
        <footer className='footer'>
            <div className='content__logo'>
                <LogoComponent/>
            </div>
            <div className='redes'>
                <div className='item__redes'>
                    <i className="bi bi-facebook"></i>
                </div>
                <div className='item__redes'>
                    <i className="bi bi-instagram"></i>
                </div>
                <div className='item__redes'>
                    <i className="bi bi-whatsapp"></i>
                </div>
                <div className='item__redes'>
                    <i className="bi bi-youtube"></i>
                </div>
               
            </div>
            <div className='copy'>
                <p>
                    Creado por equipo <strong>NeuroCode</strong>
                </p>
            </div>
        </footer>
    )
}
export default FooterComponent;
