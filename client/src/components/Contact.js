import "./Contact.css"
import React, {useState} from "react";
import {sendData} from "../services/contact.service";

export const Contact = () => {
    const [form, setForm]= useState({name:'',email:'',message:'' })

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    console.log(form)
    const sendMessage = async () => {
        const formData = new FormData()
        formData.append("name", form.name)
        formData.append("email", form.email)
        formData.append("message", form.message)

        for (let value of formData.values()) {
            console.log(value);
        }

        const a = await sendData(form);
        console.log(a)

    }


    return (
        <div className={"Q"}>
            <div className={"A"} >


                <input placeholder="Your name*"
                       id="name"
                       type="text"
                       name="name"
                    onChange={changeHandler}
                />
                <input placeholder="Your e-mail*"
                       id="email"
                       type="email"
                       name="email"
                    onChange={changeHandler}
                />
                <input placeholder="Your message*"
                       id="message"
                       type="text"
                       name="message"
                    onChange={changeHandler}
                />

                <button onClick={sendMessage}>Send message</button>

            </div>

        </div>
    )
}