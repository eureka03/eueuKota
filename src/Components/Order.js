import React from 'react';
import { useState } from 'react';
import './Order.css';

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
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Thank you,${form.name}! Your order for ${form.kotaType} has been recieved.`);
        console.log(form);
        setForm({name:'',phone:'',kotaType:'',extras:''});
    };

    return(
        <section className="page-section">
            <section className="order-section">
                
                <form onSubmit={handleSubmit} className="order-form">
                    <h2>Place Your Order</h2>
                    <input type="text" name="name" value={form.name} placeholder="Your name" onChange={handleChange} required/>
                    <input type="tel" name="phone" value={form.phone} placeholder="Phone Number" onChange={handleChange} required/>
                    <select name="kotaType" value={form.kotaType} onChange={handleChange} required>
                        <option value="">Select Kota Type</option>
                        <option value="Beef Kota">Beef Kota</option>
                        <option value="Chicken Kota">Chicken Kota</option>
                        <option value="Russian & Cheese Kota">Russian & Cheese Kota</option>
                    </select>
                    <textarea
                     name="extras"
                     value={form.extras}
                     placeholder="Any extras or notes"
                     onChange={handleChange}/>
                     <button type="submit">Submit Order</button>
                    
                </form>
            </section>
        </section>
    )
}