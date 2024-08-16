import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import {themeContext} from '../../Context';
import {useContext} from 'react';


const Services = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
        <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>services</span>
            <span>
                Loren is simpley dummy text of printing of printing Lorem 
                <br/>
                ispum is simpley dummy text of printing
            </span>
            <button className = "button s-button">Download CV</button>
            <div className="blur s-blurl" style={{background:"#ABF1FF94"}} ></div>
        </div>
        <div className="cards">
            <div style={{left:'14rem'}}>
                <Card emoji={HeartEmoji} heading={'Design'} detail={"Figma, Sketch, Photoshop, Adobe, Adobe Xd"}>
                </Card>
            </div>
            <div style={{top:"12rem", left:"-4rem"}}>
                <Card emoji={Glasses} heading={'Frontend'} detail={"HTML, CSS, Javascript, React"}>
                </Card>
            </div>
            <div style={{top:"19rem", left:"12rem"}}>
                <Card emoji={Humble} heading={'Backend'} detail={"Java, Spring Boot, MySQL"} color="rgba(252, 166, 31, 0.45)">
                </Card>
            </div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services