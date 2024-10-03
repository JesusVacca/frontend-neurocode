import React from 'react';
import '../styles/contact.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Contact=()=>{
    return(
        <section className='contact'>
            <h2>
                Contactanos
            </h2>
            <div className='content-contact'>
                <div className='address'>
                    <div className='address__item'>
                        <i className="bi bi-envelope-at"></i>
                        <div className='item-content'>
                            <h3>Correo</h3>
                            <p><a href='mailto:jesus.vacca99@gmail.com'>jesus.vacca99@gmail.com</a></p>
                        </div>
                    </div>
                    <div className='address__item'>
                        <i className="bi bi-phone"></i>
                        <div className='item-content'>
                            <h3>Telefono</h3>
                            <p>+57 3117984622</p>
                        </div>
                    </div>
                </div>
                <div className='form-content'>
                    <form className='form'>
                        <div className='row-form'>
                            <label form='name-user'>
                                <input type='text' id='name-user' placeholder='Tu nombre'/>
                            </label>
                            <label form='name-email'>
                                <input type='email' id='name-email' placeholder='Tu correo'/>
                            </label>
                        </div>
                        <label form='name-subject'>
                            <input type='text' id='name-subject' placeholder='Asunto'/>
                        </label>
                        <textarea placeholder='Mensaje'></textarea>
                        <input type='submit' value='Enviar'/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;