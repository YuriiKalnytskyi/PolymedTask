import "./Contact.css"
import React, {useState} from "react";
import {sendData} from "../services/contact.service";
import circle from "../image/Group1.png"
import circle1 from '../image/goodie1.png'
import circle2 from "../image/Group3.png"
import circle3 from '../image/red_cartoon 6.png'
import circle4 from '../image/Group 80.png'
import circle5 from '../image/Group2.png'
import circle6 from '../image/Group 5041.png'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';

export const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const sendMessage = async () => {
        console.log(form)
        const a = await sendData(form);
        console.log(a)
    }

    return (
        <div className="Contact_container">
            <div className="main_container">

                <div className='map'></div>
                <div className='circle0'></div>
                <img className='circle' src={circle} alt="dcdkc"/>
                <img className={'circle1'} src={circle1} alt={'ckdkkc'}/>
                <img className={'circle2'} src={circle2} alt={'ckdkkc'}/>


                <div className='vector'></div>
                <div className='vector1'></div>
                <div className='vector2'></div>
                <div className='vector3'></div>
                <div className='vector4'></div>
                <div className='vector5'></div>
                <div className='vector6'></div>


                <div className="info_container">
                    <p className="text_class">Reach out to us!</p>
                    <input className='input_name' placeholder="Your name*"
                           id="name"
                           type="text"
                           name="name"
                           onChange={changeHandler}
                    />
                    <input className='input_name' placeholder="Your e-mail*"
                           id="email"
                           type="email"
                           name="email"
                           onChange={changeHandler}
                    />
                    <input className='input_message' placeholder="Your message*"
                           id="message"
                           type="text"
                           name="message"
                           onChange={changeHandler}
                    />

                    <button className="btn_class" onClick={sendMessage}>Send message</button>
                </div>
            </div>

            <div className="main_container1">
                <img className='circle3' src={circle3} alt={'ckdkkc'}/>
                <img className='circle4' src={circle4} alt={'ckdkkc'}/>
                <img className='circle5' src={circle5} alt={'ckdkkc'}/>
                <img className='circle6' src={circle6} alt={'kckd'}/>

                <div className='icon'>
                    <LinkedInIcon></LinkedInIcon>
                    <TwitterIcon></TwitterIcon>
                    <FacebookIcon></FacebookIcon>
                    <PinterestIcon></PinterestIcon>
                </div>

            </div>
        </div>
    )
}