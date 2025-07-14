import './Cart.css';
export default function Cart({items,setItems}){
    const length = items.length;
    return(
        <div className="Cart">
            <h1>Your Cart({length} items)</h1>
            {items.length === 0 ? (
                <p class="cart-message">Your cart is empty</p>
            ) : (
                items.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.src} alt={item.name} />
                        <div className="cart-item-details">
                            <h2>{item.name}</h2>
                            <p>Price: R{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}