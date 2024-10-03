import React, { useState } from 'react';
import image from '../img/course1.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/courses.css'
const Courses=()=>{
    const [openModal, setOpenModal] = useState(false);
    const [courseName, setCourseName] = useState("");
    return(
        <section className='section__courses'>
            {
                openModal? <BoxModal courseName={courseName} openModal={openModal} setOpenModal={setOpenModal} />:null
            }
            <ItemCourse openModal={openModal} setOpenModal={setOpenModal} setCourseName={setCourseName} />            
        </section>
    )
}

const BoxModal=(props)=>{
    return(
        <div className='box__modal'>
            <div className='box__modal__content'>
                <h3>¡Matricula exitosa!</h3>
                <p>
                    La matricula al cursos
                    <strong> {props.courseName} </strong>
                    ha sido exitosa
                </p>
                <button onClick={()=>props.setOpenModal(false)}>Cerrar</button>
            </div>
        </div>
    )
}

const ItemCourse=({openModal,setOpenModal, setCourseName})=>{
    const dataCourse = [
        {
            id:1,
            name:"programacion 1",
            professor:"Carlos Alberto",
            numberStudent:10
        },
        {
            id:2,
            name:"programacion 2",
            professor:"Carlos Alberto",
            numberStudent:30
        },
        {
            id:3,
            name:"programacion 3",
            professor:"Carlos Alberto",
            numberStudent:40
        },
        {
            id:4,
            name:"programacion 4",
            professor:"Carlos Alberto",
            numberStudent:10
        },
        {
            id:5,
            name:"programacion 5",
            professor:"Carlos Alberto",
            numberStudent:40
        },
    ]
    const handleOpenModal=(name)=>{
        setOpenModal(!openModal);
        setCourseName(name);
    }
    return(
        <>
            {
                dataCourse.map(course=>
                    
                    <div className='item__course' key={course.id}>
                        <div className='like'>
                            <button title='¿Te gusta el curso?'>
                            <i className="bi bi-heart-fill"></i>
                            </button>
                        </div>
                        <img src={image} alt=''/>
                        <h3>{course.name}</h3>
                        <p>
                            <span>
                                <i className="bi bi-person-video3"></i>
                                <strong>{course.professor}</strong>
                            </span>
                            <span>
                                <i className="bi bi-people"></i>
                                <strong>{course.numberStudent}</strong>
                            </span>
                        </p>
                        <p>
                            Un curso para mejorar la logica utilizando <strong> Python </strong> 
                            como lenguaje de programación
                        </p>
                        
                        <button onClick={()=>handleOpenModal(course.name)}>Matricularse</button>
                    </div>
                    
                )
            }
        </>
    );
}

export default Courses;