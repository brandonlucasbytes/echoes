import { DeleteOutlined } from '@mui/icons-material'
import './cart.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, resetCart } from '../../store/cartReducer'
// import { loadStripe } from '@stripe/stripe-js'

function Cart() {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    // const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)
    const SERVER_URL = import.meta.env.VITE_DOMAIN_URL

    const [totalPrice, setTotalPrice] = useState(0)

    function getTotalPrice(data) {
        return parseFloat(data.reduce((total, item) => {
            if (item.price) {
                return total + (item.quantity * item.price)
            }
            return total
        }, 0)).toFixed(2)
    }

    useEffect(() => {
        setTotalPrice(getTotalPrice(products))
    }, [products])

    async function handlePayment() {
        try {
            // const stripe = await stripePromise;
            const res = await fetch(`${SERVER_URL}/checkout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(products),
            })
            // await stripe.redirectToCheckout({
            //     sessionId: res.data.stripeSession.id,
            // })
            if (res.ok) {
                const data = await res.json()
                const redirectURL = data.url;
                window.location = redirectURL;
                // console.log(redirectURL)
            } else {
                throw await res.json()
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="cart">
            <h1>My Cart</h1>
            <div className="cart-products">
                {products?.map(productData => (
                    <div className="cart-product" key={productData.id}>
                        <img src={productData.img} alt="" />
                        <div className="details">
                            <h1>{productData.title}</h1>
                            <p>{productData.description.substring(0, 100)}...</p>
                            <p>{productData.size && productData.size}</p>
                            <div className="price">
                                {productData.quantity} x ${productData.price}
                            </div>
                        </div>
                        <DeleteOutlined className="delete" onClick={() => dispatch(removeFromCart(productData.id))} />
                    </div>
                ))}
            </div>
            <div className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</div>
            <div className="total">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
            </div>
            <button onClick={handlePayment}>Proceed to Checkout</button>
        </div>
    )
}

export default Cart
