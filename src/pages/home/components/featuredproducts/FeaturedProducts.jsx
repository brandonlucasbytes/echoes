import { useEffect, useState } from "react"
import Card from "../../../../components/card/Card.jsx"
import './featuredproducts.scss'

const PRODUCTS_API_URL = import.meta.env.VITE_PRODUCTS_API_URL

function FeaturedProducts({ type }) {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        // Fetch the JSON data
        fetchProducts()
    }, [])

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
    }

    const filteredProducts = products
        ? (type === "featured"
            ? products.filter(product => product.isFeatured)
            : (type === "trending"
                ? products.filter(product => product.isTrending)
                : []))
        : [];

    return (
        <div className="featured-products">
            <div className="top">
                <h1>{type} products</h1>
                {(type === "featured") && 
                    <p>
                        <i>Discover timeless charm with our featured capsule. From cozy hoodies to vintage tees, Echoes 66 is embracing the spirit of &apos;66 with a contemporary swagger.</i>
                    </p>
                }
                {(type === "trending") && 
                    <p>
                        <i>Stay ahead of the curve with these trending picks. Give your style a boost with the hottest looks of the season.</i>
                    </p>
                }
            </div>
            <div className="bottom">
                {filteredProducts.map(product => (
                    <Card product={product} key={product.id} className="card"/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
