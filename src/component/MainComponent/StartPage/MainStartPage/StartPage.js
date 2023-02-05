import React from "react";
import './startPage.css'
import Illustration from './illustration.png'
import SecondPage from "../secondPage/SecondPage";
import ThirdPage from "../thirdPage/ThirdPage";
import WelcomDiagramMain from "../WelcomStatic/WelcomStatic";
import GetStarted from "../GetStarted/GetStarted";
const StartPage = () => {
    return(
        <>
        <div className='startPage'>
            <div className='startInfo'>
                <h6>Статистика маркетплейсов</h6>
                <h4>Планируй и зарабатывай</h4>
                <p className='advertising'>Какой-то текст рекламирующий </p>
            </div>
            <div>
                <img className='mainImg' src={Illustration}/>
            </div>
        </div>
        <SecondPage/>
            <div>
                <ThirdPage/>
            </div>
            <div className='welcomDiagram'>
                <WelcomDiagramMain/>
            </div>
            <GetStarted/>
        </>
    )
}

export default StartPage;