import { FaCartPlus } from "react-icons/fa";

export default function MenuItem({quantity,name,price,src,handleClick,handleChange}){
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