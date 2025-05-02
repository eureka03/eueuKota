import Kota1 from '../Assets/Kota1.jpg';
import Kota2 from '../Assets/Kota2.jpg';
import Kota3 from '../Assets/Kota3.jpg';
import Kota4 from '../Assets/Kota4.jpg';
import './Menu.css';
import { FaCartPlus } from "react-icons/fa";
import {useState} from 'react';

export default function Menu(){
    const [quantity,setQuantity] = useState(0);

    const Images = [
        {
            name:'Kota1',
            src:Kota1,
            price:30.45
        },
        {
            name:'Kota2',
            src:Kota2,
            price:50.65
        },
        {
            name:'Kota3',
            src:Kota3,
            price:23.56
        },
        {
            name:'Kota4',
            src:Kota4,
            price:25.54
        }
    ];

    const handleClick = (i) =>{
        setQuantity(i.quantity+1);
    }
    const handleChange = (e) =>{
        setQuantity(e.target.value);
    }
    
    return(
        <div className="Menu-config">   
              {Images.map((i)=>
                    <div className="Menu">
                        <div className="images">
                            <img src={i.src} alt = 'Kota' class='menu-images'/>
                        </div>
                        <div className="description">
                            <p>Name: {i.name}</p>
                            <p>Ingredients: </p>
                            <p>Price: R{i.price}</p>
                            <FaCartPlus onClick={(i)=>{setQuantity(i.quantity+1)}}/>
                            <input type='number' name='quantity' className='quantity' value={i.quantity} onChange={handleChange}/>
                        </div>
                    </div>
                )}
            
           

        </div>
    )
}