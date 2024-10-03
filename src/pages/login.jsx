import React, { useEffect, useState } from 'react';
import '../styles/login.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
const Login =({setIndexLink})=>{
    const [isRegiter, setIsRegister] = useState(true);
    useEffect(()=>{
        setIndexLink(4);
    },[])
    const handleOpenForm=()=>{
        setIsRegister(!isRegiter);
    }
    return(
        <section className='section__regirter'>
                {
                    isRegiter?
                    <form className='form login'>
                        <i className="bi bi-person-circle"></i>
                        <h3>¡Inicia sesión!</h3>
                        <div className='form__row'>
                            <i className="bi bi-person-check-fill"></i>
                            <input type='text' placeholder='Username'  name='username' id='username'/>
                        </div>
                        <div className='form__row'>
                            <i className="bi bi-key-fill"></i>
                            <input type='password' placeholder='Username' name='password' id='password'/>
                        </div>
                        <div className='form__row'>
                            <input type='submit' value='Entrar'/>
                        </div>
                        
                        <div className='form__row enlaces'>
                            <a href='#' onClick={handleOpenForm}>¿No tiene cuenta?</a>
                            <a href='#'>¿Olvidó su contraseña?</a>
                        </div>
                    </form>
                    :
                    <form className='form register'>
                        <h3>¡Registrate!</h3>
                        <div className='form__row'>
                            <input type='text' placeholder='¿Cual es tu nombre?'/>
                        </div>
                        <div className='form__row'>
                            <input type='text' placeholder='¿Cuales con tus apellidos?'/>
                        </div>
                        <div className='form__row'>
                            <input type='number' placeholder='¿Cuales con número de telefono?'/>
                        </div>
                        <div className='form__row'>
                            <input type='email' placeholder='¿Cuales con correo electronico?' value=''/>
                        </div>
                        <div className='form__row'>
                            <input type='number' placeholder='¿Cuales con tus número de dni?'/>
                        </div>
                        <div className='form__row'>
                            <input type='submit' value='Registrate'/>
                        </div>
                        
                        <div className='form__row enlaces'>
                            <a href='#' onClick={handleOpenForm}>¿Ya tienes cuenta?</a>
                        </div>
                    </form>
                }
        </section>
    )
}

export default Login;