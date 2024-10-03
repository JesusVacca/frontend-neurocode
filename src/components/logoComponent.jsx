import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/logo.css'

const LogoComponent=()=>{
    return(
        <div className='logo'>
            <h1>
                <i className="bi bi-mortarboard"></i>
                &lt;Neuro<span>Code</span>/&gt;
            </h1>
        </div>
    )
}

export default LogoComponent;