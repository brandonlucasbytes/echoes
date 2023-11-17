import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './footer.scss'

function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link to="products/women"><div>Women</div></Link>
          <Link to="products/men"><div>Men</div></Link>
          <Link to="products/shoes"><div>Shoes</div></Link>
          <Link to="products/accessories"><div>Accessories</div></Link>
          <Link to="products/new-arrivals"><div>New Arrivals</div></Link>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            <i>Welcome to Echoes 66, where we weave the threads of vintage fashion into the vibrant tapestry of modern life. We&apos;re on a mission to embrace the free spirit of our roots while pushing boundaries.</i>
          </p>
        </div>
        <div className="item">
          <h1>Social</h1>
          <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h2 className="logo">Echoes 66</h2>
          <div className="copyright">
            © Copyright 2023. All Rights Reserved
          </div>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
