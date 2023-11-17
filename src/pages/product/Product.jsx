import { useEffect, useState } from 'react'
import './product.scss'
import { AddShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartReducer';

function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState("");
  const [saved, setSaved] = useState(false);

  const PRODUCTS_API_URL = import.meta.env.VITE_PRODUCTS_API_URL

  const [products, setProducts] = useState(null)

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${PRODUCTS_API_URL}`)
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      } else {
        console.error('Failed to fetch JSON data')
      }
    } catch (error) {
      console.error('Error fetching JSON data:', error)
    }
  };

  useEffect(() => {
    fetchProducts(addToCart)
  }, [])

  const addProductToCart = useDispatch();

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={products && products[id - 1].img} alt="" onClick={e => setSelectedImage(products[id - 1].img)} />
          <img src={products && products[id - 1].img2} alt="" onClick={e => setSelectedImage(products[id - 1].img2)} />
        </div>
        <div className="main-image">
          <img src={selectedImage === "" ? (products && products[id - 1].img) : selectedImage} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{products && products[id - 1].title}</h1>
        <div className="price">${products && products[id - 1].price}</div>
        <p><i>{products && products[id - 1].description}</i></p>
        <div className="sizes">
          {products && products[id - 1].sizes && products[id - 1].sizes.map((sizeItem, index) => (
            <button 
              className="size" 
              key={index}
              onClick={() => setSize(sizeItem)}>{sizeItem}</button>
          ))}
        </div>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => prev === 0 ? 0 : prev - 1)}
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button 
          className="add" 
          onClick={() =>
          addProductToCart(
              addToCart({
                id: products[id - 1].id,
                title: products[id - 1].title,
                description: products[id - 1].description,
                price: products[id - 1].price,
                img: products[id - 1].img,
                size,
                quantity
              })
            )
          }
        >
          <AddShoppingCart /> Add to Cart
        </button>
        {/* <div className="links">
          <div className="item" onClick={() => setSaved(prev => !prev)}>
            {saved ? <Favorite /> : <FavoriteBorder />}
            Add to Wish List
          </div>
        </div>
        <div className="info">
          <div>Vendor: Mindanao</div>
          <div>Product Type: T-shirt</div>
          <div>Tag: T-Shirt, Women, Top</div>
        </div> */}
      </div>
    </div>
  )
}

export default Product
