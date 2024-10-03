import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/dashboard.css'
import LogoComponent from '../components/logoComponent';
import Courses from '../pages/courses';

const Dashboard=()=>{
    const [openBar, setOpenBar] = useState(true);
    const [section, setSection] = useState(null);
    return(
        <main className='main'>
            <Header/>
            <SideBar asideClass={'sideBar'} openBar={openBar} setOpenBar={setOpenBar} setSection={setSection}/>
            <Content openBar={openBar} section={section}/>
        </main>
    );
}


const SideBar=({openBar, setOpenBar, setSection})=>{    
    return(
        <aside className={
            openBar? 'sideBar':'sideBar open'
        }>
            <ul>
                <li>
                    <a href='#' onClick={()=>setSection(null)}>
                        <span className='icon'>
                            <i className="bi bi-houses"></i>
                        </span>
                        <span>Inicio</span>
                    </a>
                </li>
                <li>
                    <a href='#' onClick={()=>setSection(<Courses/>)}>
                        <span className='icon'>
                            <i className="bi bi-book-half"></i>
                        </span>
                        <span>Cursos</span>
                    </a>
                </li>
            </ul>
            <button onClick={()=>setOpenBar(!openBar)}>
                <span>
                    {
                        openBar?
                        <i className="bi bi-chevron-bar-right"></i>
                        :<i className="bi bi-chevron-bar-left"></i>
                    }
                </span>
                <span>Colapsar menu</span>

            </button>
        </aside>
    )
}
const Header=()=>{
    const [closedProfile, setClosedProfile] = useState(false);
    return(
        <header className='header'>
            <button className='hamburguesa'>
                <i className="bi bi-list"></i>
            </button>
            <LogoComponent/>
            <nav className='navBar'>
                <button>
                    <i className="bi bi-person-circle" onClick={()=>setClosedProfile(!closedProfile)}></i>
                    {
                        closedProfile?
                            <div className='profile'>
                                <header className='header__profile'>
                                    <h3>Jesus Vacca</h3>
                                    <p>Estudiante</p>
                                </header>
                                <a href='#'>
                                    <span><i className="bi bi-person-badge"></i></span>
                                    <span>Perfil</span>
                                </a>
                                <a href='#'>
                                    <span><i className="bi bi-pencil"></i></span>
                                    <span>Mi aprendizaje</span>
                                </a>
                                <a href='#'>
                                    <span><i className="bi bi-graph-up-arrow"></i></span>
                                    <span>Clasificación</span>
                                </a>
                                <a href='#'>
                                    <span><i className="bi bi-door-closed-fill"></i></span>
                                    <span>Salir</span>
                                </a>
                            </div>
                        : null
                    }
                </button>
            </nav>
        </header>
    );
}

const Content=({openBar,section})=>{
    
    return(
        <div className={
            openBar?'content':'content open'
        }>
            {section}
        </div>
    )
}
export default Dashboard;
