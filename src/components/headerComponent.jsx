import React, { useState } from 'react';
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import '../styles/headerComponent.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import LogoComponent from './logoComponent';
import BannerComponent from './bannerComponent';
import Contact from '../pages/contact';
import Login from '../pages/login';




const HeaderComponent=()=>{
    const [indexLink, setIndexLink] = useState(0);
    const [openNav, setOpenNav] = useState(false);
    
    const handleChangeIndex=(index)=>{
        setIndexLink(index);
        setOpenNav(false);
    }
    const handleOpenMenu=()=>{
        setOpenNav(!openNav);
    }
    return(
        <>
            <Router>
                <header className='header'>
                    <button 
                        className='hamburguesa__'
                        type='button'
                        onClick={handleOpenMenu}
                        >
                        {
                            !openNav?<i className="bi bi-list"></i>:<i className="bi bi-x"></i>
                        }
                    </button>
                    <LogoComponent/>
                    <nav className={openNav?'open':''}>
                        <ul className='sub__menu'>
                            <li>
                                <Link 
                                    to='/'
                                    className={indexLink === 0? 'active':''}
                                    onClick={()=>handleChangeIndex(0)}
                                >Inicio</Link>
                            </li>
                            <li>
                                <Link 
                                    to='/about'
                                    className={indexLink === 1 ?'active':''}
                                    onClick={()=>handleChangeIndex(1)}
                                >Sobre nosotros</Link>
                            </li>
                            <li>
                                <Link 
                                    to='/contact'
                                    className={indexLink === 2 ?'active':''}
                                    onClick={()=>handleChangeIndex(2)}
                                >Contacto</Link>
                            </li>
                            <li>
                                <Link 
                                    to='/testimonies'
                                    className={indexLink === 3 ?'active':''}
                                    onClick={()=>handleChangeIndex(3)}
                                >Testimonios</Link>
                            </li>
                            <li>
                                <Link 
                                    to='/register'
                                    className={indexLink === 4 ?'active':''}
                                    onClick={()=>handleChangeIndex(4)}
                                >Regístrate</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path='/' axact element={<BannerComponent/>}/>
                    <Route path='/about' element={null}/>
                    <Route path='/contact' element={<Contact setIndexLink = {setIndexLink}/>}/>
                    <Route path='/testimonies' element={null}/>
                    <Route path='/register' element={<Login setIndexLink = {setIndexLink} />}/>
                </Routes>
            </Router>
        </>
    )
}



export default HeaderComponent;