import React from 'react';
import { useState } from 'react';
import './Contact.css';
import Thankyou from './Thankyou';

export default function Order(){
    const [form,setForm] = useState({
        name:'',
        phone:'',
        kotaType:'',
        extras:''
    });
    const handleChange = (e) => {
        setForm({
            ...form,[e.target.name]:e.target.value

        });
    };
    const [submited,setSubmited] = useState(false);

    const handleSubmit = (e) =>{
        setSubmited(true);
        e.preventDefault();
        //alert(`Thank you,${form.name}! Your Message has been recieved.
           // We shall get back to you`);
        console.log(form);
        setForm({name:'',phone:'',kotaType:'',extras:''});
    };
    if(submited){
        return(
            <Thankyou/>
        )

    }else{
        return(
            <section className="page-section">
                <section className="order-section">
                    
                    <form onSubmit={handleSubmit} className="order-form">
                        <h2>Contact Us</h2>
                        <input type="text" name="name" value={form.name} placeholder="Your name" onChange={handleChange} required/>
                        <input type="tel" name="phone" value={form.phone} placeholder="Phone Number" onChange={handleChange} required/>
                        
                        <textarea
                         name="extras"
                         value={form.extras}
                         placeholder="How can we assist you?"
                         onChange={handleChange}/>
                         <button type="submit">Submit</button>
                    </form>
                </section>
            </section>
        )
    }


   
}