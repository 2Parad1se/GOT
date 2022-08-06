import React from "react";
import './error.css'

const Error = () => {
    return (
        <>

            <img src='./img/error.jpg' className='error' alt='error'></img>
            <div> Что-то пошло не так... </div>
        </>
        // <div className="error">Ошибка</div>
        // <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error" className="error">123</img>
        // <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='Error' className='error'></img>
        
    )
}

export default Error;