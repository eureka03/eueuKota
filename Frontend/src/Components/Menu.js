import Kota1 from '../Assets/Kota1.jpg';
import Kota2 from '../Assets/Kota2.jpg';
import Kota3 from '../Assets/Kota3.jpg';
import Kota4 from '../Assets/Kota4.jpg';
import './Menu.css';
import MenuItem from './MenuItem';

import {useState} from 'react';

export default function Menu({items,setItems}){
    
   

    const Images = [
        {
            id:1,
            name:'Kota1',
            src:Kota1,
            price:30.45
            
        },
        {
            id:2,
            name:'Kota2',
            src:Kota2,
            price:50.65
            
        },
        {
            id:3,
            name:'Kota3',
            src:Kota3,
            price:23.56
            
        },
        {
            id:4,
            name:'Kota4',
            src:Kota4,
            price:25.54
            
        }
    ];

    
   
    
    return(
        <div className="Menu-config">   
              {Images.map((i)=>
                    <MenuItem key={i.id} id={i.id} name={i.name} src={i.src} price={i.price} items={items} setItems={setItems}/>
                )}
        </div>
    )
}