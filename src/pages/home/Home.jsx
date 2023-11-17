import Categories from './components/categories/Categories.jsx'
import Contact from './components/contact/Contact.jsx'
import FeaturedProducts from './components/featuredproducts/FeaturedProducts.jsx'
import Slider from './components/slider/Slider.jsx'
import './home.scss'

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured"/>
      <Categories />
      <FeaturedProducts type="trending"/>
      <Contact />
    </div>
  )
}

export default Home
