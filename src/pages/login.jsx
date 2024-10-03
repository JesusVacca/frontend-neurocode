import React, { useEffect, useState } from 'react';
import '../styles/login.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



const Login =({setIndexLink})=>{
    const [isRegiter, setIsRegister] = useState(true);

    const [inputs, setInputs] = useState({
        username:"",
        password:""
    });
    
    const handleChangeInpust =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({
            ...values,
            [name]:value
        }))
    }

    

    useEffect(()=>{
        setIndexLink(4);
    },[setIndexLink])

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
                            <input 
                                type='text' 
                                placeholder='Username'  
                                name='username' 
                                id='username' 
                                onChange={handleChangeInpust}
                                />
                        </div>
                        <div className='form__row'>
                            <i className="bi bi-key-fill"></i>
                            <input 
                                type='password' 
                                placeholder='Username' 
                                name='password' 
                                id='password'
                                onChange={handleChangeInpust}
                                />
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
                            <input type='text' placeholder='¿Cual es tu nombre?' name='name' id=''
                            />
                        </div>
                        <div className='form__row'>
                            <input type='text' placeholder='¿Cuales con tus apellidos?' name='lastname' id=''
                            />
                        </div>
                        <div className='form__row'>
                            <input type='number' placeholder='¿Cuales con número de telefono?' name='phoneNumber' id=''
                            />
                        </div>
                        <div className='form__row'>
                            <input type='email' placeholder='¿Cuales con correo electronico?'  name='email' id=''
                            />
                        </div>
                        <div className='form__row'>
                            <input type='number' placeholder='¿Cuales con tus número de dni?' name='dni' id=''
                            />
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