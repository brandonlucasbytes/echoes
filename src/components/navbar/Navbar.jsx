import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../cart/Cart'
import Products from '../../pages/products/Products'
import './navbar.scss'

function Navbar() {
    const [openCart, setOpenCart] = useState(false)
    const [cartLength, setCartLength] = useState(0)
    const products = useSelector(state => state.cart.products)

    function getCartLength() {
        let sum = 0
        products.forEach(product => (sum += product.quantity))
        setCartLength(sum)
    }

    useEffect(() => {
        getCartLength()
    }, [products])

    return (
        <nav className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/images/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <div className="center">
                    <Link to="/">
                        <h1>Echoes 66</h1>
                    </Link>
                    <h2>Serving apparel since 1966</h2>
                </div>
                <div className="right">
                    <div className="item">
                        <Link to="/products">Shop</Link>
                    </div>
                    <div className="icons">
                        {/* <FavoriteBorderIcon />
                        Favorites */}
                        <div className="cart-icon" onClick={() => setOpenCart(!openCart)}>
                            <ShoppingCartOutlinedIcon />
                            <div>{cartLength}</div>
                        </div>
                    </div>
                </div>
            </div>
            {openCart && <Cart />}
        </nav>
    )
}

export default Navbar
