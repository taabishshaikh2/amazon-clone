import React from 'react';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }, ] = useStateValue()
  return (
  
    <div className='checkout'>
        <div className="checkout_Left">
        <img className='checkout_ad'  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt='' />

        {basket?.length === 0 ? (
            <div>
                <h2>
                    Your Shopping basket is empty.
                </h2>
                <p>
                                You have no items in your basked. To
                                buy one or more items, click
                                "Add to basket" next to the item.
                    </p>
            </div>
        ) : (
            <div>
                <h2 className='checkout_title'>Your Shopping Basket.</h2>
                {/* List out all of the checkout products */}
                {basket.map((item)=> (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} 
                    />
                ))}
            </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className="checkout_right">
                <Subtotal/>
            </div>
        )}
     </div>
    
  )
}

export default Checkout