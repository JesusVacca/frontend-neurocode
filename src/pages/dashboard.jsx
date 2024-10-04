import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/dashboard.css'
import LogoComponent from '../components/logoComponent';
import Courses from '../pages/courses';

const Dashboard=()=>{
    const [openBar, setOpenBar] = useState(true);
    const [section, setSection] = useState(null);
    const [hiddenBar, setHiddenBar] = useState(false);
    const [classSideBar, setClassSideBar] = useState('sideBar');


    return(
        <main className='main'>
            <Header 
                hiddenBar={hiddenBar} 
                setHiddenBar={setHiddenBar} 
                setClassSideBar = {setClassSideBar}
                />
            <SideBar
                classSideBar = {classSideBar}
                setClassSideBar = {setClassSideBar}
                openBar={openBar} 
                setOpenBar={setOpenBar} 
                hiddenBar={hiddenBar}
                setSection={setSection}
                />
            <Content openBar={openBar} section={section}/>
        </main>
    );
}


const SideBar=({classSideBar,setClassSideBar,openBar, setOpenBar,hiddenBar,setSection})=>{    

    useEffect(()=>{
        if(hiddenBar === true)setOpenBar(true);
    },[hiddenBar])

    return(
        <aside className={classSideBar}>
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
                <li>
                    <a href='#' onClick={()=>setSection(<Courses/>)}>
                        <span className='icon'>
                            <i className="bi bi-person-vcard"></i>
                        </span>
                        <span>Profesores</span>
                    </a>
                </li>
                <li>
                    <a href='#' onClick={()=>setSection(<Courses/>)}>
                        <span className='icon'>
                            <i className="bi bi-person"></i>
                        </span>
                        <span>Alumnos</span>
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
                <li>
                    <a href='#' onClick={()=>setSection(<Courses/>)}>
                        <span className='icon'>
                            <i className="bi bi-gear-wide-connected"></i>
                        </span>
                        <span>Gestion de roles</span>
                    </a>
                </li>
            </ul>
            <button type='button' onClick={()=>{
                setOpenBar(!openBar);
                if(openBar) setClassSideBar("sideBar open");
                else setClassSideBar('sideBar');
            }}>
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
const Header=({hiddenBar, setHiddenBar,setClassSideBar})=>{

    const [closedProfile, setClosedProfile] = useState(false);

    const handleOpen =()=>{
        setHiddenBar(!hiddenBar);
        if(hiddenBar){
            setClassSideBar("sideBar");
        }else setClassSideBar("sideBar close");
    }
    return(
        <header className='header'>
            <button  
                    type='button'
                    className='hamburguesa'
                    onClick={handleOpen}
                >
                    {
                        hiddenBar?
                        <i className="bi bi-x"></i>
                        :
                        <i className="bi bi-list"></i>
                    }
            </button>
            <LogoComponent/>
            <nav className='navBar'>
                <button
                        type='button'
                    >
                    <i className="bi bi-bell-fill"></i>
                </button>
                <button 
                    type='button'>
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
                                <a href='#' style={{color:"red"}}>
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

const Content=({section})=>{
    
    return(
        <div className={'content'}>
            {section}
        </div>
    )
}
export default Dashboard;
