import './Experience.css';
import { themeContext } from "../../Context";
import React, { useContext } from "react";

const Experiences = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
            <span>completed</span>
            <span>projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
            <span>companies</span>
            <span>work</span>
        </div>
    </div>
  )
}

export default Experiences