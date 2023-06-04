import './index.scss'
import LogoK from '../../../assets/images/logo-s.png'
import { useRef } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap-trial';
// import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin';

const Logo = () =>{

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();


    useEffect(() => {
        gsap.registerPlugin('DrawSVGPlugin')
        gsap.timeline()
        .to(bgRef.current,{duration:1,opacity:1})
        .fromTo(outlineLogoRef.current,{drawSVG:0}, {duration:20})
    })

    return(
        <div className='logo-container' ref = {bgRef}>
            <img ref = {solidLogoRef} className='solid-logo' src={LogoK} alt='K'/>
            <svg 
            
            width="559pt"
            height="897pt"
            viewBox="0 0 559 897"
            version='1.0'
            xmlns="http://www.w3.org/2000/svg"
        >
            <g 
            className='svg-container'
            transform='translate(0,457) scale(.1,-.1)'
            fill= 'none'>
                <path d='' ref={outlineLogoRef}>

                </path>
            </g>
        </svg>



        </div>
    )
}

export default Logo