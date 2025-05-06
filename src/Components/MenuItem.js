import { FaCartPlus } from "react-icons/fa";
import {useState} from 'react';

export default function MenuItem({name,price,src}){
    const [quantity,setQuantity] = useState(0);
    const [items,setItems] = useState([]);
    
    const handleChange = (e) =>{
        setQuantity(e.target.value);
    }

    const handleClick = (i) =>{
        const items1 = []
         if(items1.length===0){
             const newItem = {
                 id:i.id,
                 name:i.name,
                 src:i.src,
                 price:i.price,
                 quantity:i.quantity
            }
            items1.push(newItem);
            setItems(items1);
         }
         else{ 
             for (let j=0;j<items1.length;j++){
                 if(i.id===items1[j].id){
                     setQuantity(Number(i.quantity)+1);
                 }else{
                     const newItem = {
                         id:i.id,
                         name:i.name,
                         src:i.src,
                         price:i.price,
                         quantity:i.quantity
                 }
                 items1.push(newItem);
                 setItems(items1);
             
                 }
             }
         }
        
        console.log(items1);
     }
    return(
        
            <div className="MenuItem">
                        <div className="images">
                            <img src={src} alt = 'Kota' className='menu-images'/>
                        </div>
                        <div className="description">
                            <p>Name: {name}</p>
                            <p>Ingredients: </p>
                            <p>Price: R{price}</p>
                            <FaCartPlus onClick={handleClick}/>
                            <input type='number' name='quantity' className='quantity' value={quantity} placeholder="quantity" onChange={handleChange}/>
                        </div>
                    </div>
        
        
    )
}