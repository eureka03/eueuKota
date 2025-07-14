import './Cart.css';
export default function Cart({items,setItems}){
    const length = items.length;
    return(
        <div className="Cart">
            <h1>Your Cart({length} items)</h1>
            <div className='cart-header'>
                <div className='item'>
                    <p>Item</p>
                </div>
                <div className='price'>
                    <p>Price</p>
                </div>
                <div className='Quantity'>
                    <p>Quantity</p>
                </div>
                <div className='total'>
                    <p>Total</p>
                </div>
            </div>
            
                
            {items.length === 0 ? (
                <p class="cart-message">Your cart is empty</p>
            ) : (
                items.map((item) => (
                    
                        <div key={item.id} className="cart-item">
                            
                            <div className="cart-item-details">
                                <img src={item.src} alt={item.name} />
                                <h2>{item.name}</h2>
                                
                            </div>
                            <div className='cart-item-price'>
                                <p>R{item.price}</p>
                            </div>
                            <div className='cart-item-quantity'>
                                <button>-</button>
                                <input value= {item.quantity}/>
                                <button>+</button>
                            </div>
                            <div className='cart-item-total'>
                                <p>R{item.quantity*item.price}</p>
                            </div>
                        </div>
                        
                    
                    
                ))
            )}
        </div>
    );
}