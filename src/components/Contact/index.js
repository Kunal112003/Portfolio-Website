import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'



const Contact = () =>{

    const refForm = useRef()
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000);
    },[])

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_f6y6sdg','template_08rg14l',
        refForm.current,'p8fmri4Tsd2JeNvu8')
        .then(
            ()=>{alert('Message sent successfully')
            window.location.reload(false)},
            ()=>{
                alert('Message not sent, please try again')
            }
        )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        
                        <AnimatedLetters
                        letterClass={letterClass}
                         strArray={['C','o','n','t','a','c','t',' ', 'D','e','t','a','i','l','s']} idx={15}>
                        </AnimatedLetters>
                    </h1>

                    <p>
                        I am available for internships and software development related jobs. 
                        <br/>

                    </p>
                    

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                    type='text' 
                                    name= 'name' 
                                    placeholder='Name' required/>

                                </li>

                                <li className='half'>
                                    <input 
                                    type='email' 
                                    name= 'email' 
                                    placeholder='Email' required/>
                                </li>

                                <li >
                                    <input placeholder='Subject'
                                     type="text" 
                                     name="subject" required/>
                                </li>
                                <li>
                                    <textarea 
                                    placeholder='Message' 
                                    name='message'required/>
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>

                            </ul>
                        </form>

                    </div>

                </div>
                <div className='info-map'>
                    Kunal Rao,
                    <br/>
                    Edmonton, AB, Canada
                    <br/>
                    8210 111 Street NW, T6G 2C7
                    <br/>
                    <span> +1 587 338 0761 </span>
                    
                    <span> kunalrao2003@gmail.com </span>
                   

                </div>

                <div className='map'>
                    <MapContainer center={[53.5178073 ,-113.5205383]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[53.5178073 ,-113.5205383]}

                        />
                    </MapContainer>

                </div>
            </div>
            <Loader type ="ball-zig-zag-deflect"/>
        </>
    )
}

export default Contact

