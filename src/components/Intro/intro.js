import React from 'react' ;
import './intro.css' ; 
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png' ;
import {Link} from 'react-scroll';
const Intro = ()=>{
    return (
        <section id = "intro">
            <div className = "introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className = "introName">Gayathiri Easwar</span><br/>Software Developer<br/>UI/UX Designer</span>
                <p className='introPara'>I am a skilled Software Developer and passionate engineer in designing </p>
                <Link><button className= "btn"><img src = {btnImg} alt = "Hire" className = "btnImg"/>Hire me</button></Link>

            </div>
            <img src = {bg} alt = "Profile" className = "bg"/>
        </section>
    );
}
export default Intro ;