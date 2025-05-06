import Kota1 from '../Assets/Kota1.jpg';
import Kota2 from '../Assets/Kota2.jpg';
import Kota3 from '../Assets/Kota3.jpg';
import Kota4 from '../Assets/Kota4.jpg';
import './Menu.css';
import MenuItem from './MenuItem';

import {useState} from 'react';

export default function Menu(){
    const [quantity,setQuantity] = useState(0);
    const [items,setItems] = useState([]);

    const Images = [
        {
            id:1,
            name:'Kota1',
            src:Kota1,
            price:30.45,
            quantity:quantity
        },
        {
            id:2,
            name:'Kota2',
            src:Kota2,
            price:50.65,
            quantity:quantity
        },
        {
            id:3,
            name:'Kota3',
            src:Kota3,
            price:23.56,
            quantity:quantity
        },
        {
            id:4,
            name:'Kota4',
            src:Kota4,
            price:25.54,
            quantity:quantity
        }
    ];

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
    const handleChange = (e) =>{
        setQuantity(e.target.value);
    }
    
    return(
        <div className="Menu-config">   
              {Images.map((i)=>
                    <MenuItem key={i.id} quantity={quantity} name={i.name} src={i.src} price={i.price} handleChange={handleChange} handleClick={()=>handleClick(i)}/>
                )}
        </div>
    )
}