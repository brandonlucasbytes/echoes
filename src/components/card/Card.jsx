import { Link } from 'react-router-dom'
import './card.scss'

function Card({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="card">
        <div className="image">
          {product.isNew && <span>New Season</span>}
          <img src={product.img} alt="" className='main-image' />
          <img src={product.img2} alt="" className='second-image' />
        </div>
        <h2>{product.title}</h2>
        <div className="prices">
          { product.oldPrice ? <h3>${product.oldPrice}</h3> : ''}
          <h3>${product.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card