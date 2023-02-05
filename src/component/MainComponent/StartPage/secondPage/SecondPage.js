import React from "react";
import './secondPage.css'
import SecondPageStaticOne from "./SecondPageStaticFirst";
import SecondPageStaticTwo from "./SecondStatic";


const SecondPage = () => {
    return(
        <>

        <div className='secondPage'>
            <div className='textUs'>
            <p className='aboutUs'>О нас</p>
                <h2>'Название компании'</h2>
                <p>Какой-то рекламный текст о компании</p>
            </div>

            <div className='icons'>
                <SecondPageStaticOne/>
                <SecondPageStaticTwo/>
            </div>
        </div>

        </>
    )
}
export default SecondPage