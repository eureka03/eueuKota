import { FaCartPlus } from "react-icons/fa";
import {useState} from 'react';

export default function MenuItem({id,name,price,src}){
    const [quantity,setQuantity] = useState(0);
    const [items,setItems] = useState([]);
    const [cartQuantity,setcartQuantity] = useState(1);

    const handleChange = (e) =>{
        setQuantity(e.target.value);
    }

    const handleClick = () =>{
         if(items.length===0){
             const newItem = {
                 id:id,
                 name:name,
                 src:src,
                 price:price,
                 quantity:cartQuantity
            }
            setItems([...items,newItem]);
         }else{ 
                const isId = items.find((idval)=>idval.id === id);
                const index = items.findIndex(idval=>idval.id ===id);
                console.log("index",index);
                console.log("isId",isId);
                if(isId){
                    alert("Hello");
                    setcartQuantity(Number(quantity)+1);
                    items[index] = {...isId,quantity:cartQuantity};
                    console.log(items);
                     
                }else{
                    const newItem = {
                        id:id,
                        name:name,
                        src:src,
                        price:price,
                        quantity:cartQuantity
                    }
                    setItems([...items,newItem]);
                }
         }
        
        
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