import { useEffect, useState } from 'react'
import Card from '../../../../components/card/Card'
import './list.scss'

function List({ categoryID, maxPrice, selectedFilters, sort}) {
    const [products, setProducts] = useState(null)
    const [displayProducts, setDisplayProducts] = useState(null)

    const PRODUCTS_API_URL = import.meta.env.VITE_PRODUCTS_API_URL

    useEffect(() => {
        fetchProducts()
    }, [])

    // filter and sort products
    useEffect(() => {
        if (products !== null) {
            let newDisplayProducts = [...products]

            if (selectedFilters.length > 0) {
                selectedFilters.forEach((filter) => {
                    newDisplayProducts = newDisplayProducts.filter((product) => {
                        switch (filter) {
                            case 'new':
                                return product.isNew === true
                            case 'featured':
                                return product.isFeatured === true
                            case 'trending':
                                return product.isTrending === true
                            default:
                                return true
                        }
                    })
                })
            }

            if (sort !== null && sort !== undefined) {
                if (sort === 'asc') {
                    newDisplayProducts.sort((a, b) => a.price - b.price)
                } else if (sort === 'desc') {
                    newDisplayProducts.sort((a, b) => b.price - a.price)
                } else if (sort === 'alpha') {
                    newDisplayProducts.sort((a, b) => a.title.localeCompare(b.title))
                }
            }

            setDisplayProducts(newDisplayProducts)
        }
    }, [products, selectedFilters, sort])

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${PRODUCTS_API_URL}`)
            if (response.ok) {
                const data = await response.json()
                setProducts(data)
                setDisplayProducts(data)
            } else {
                console.error('Failed to fetch JSON data')
            }
        } catch (error) {
            console.error('Error fetching JSON data:', error)
        }
    };

    return (
        <div className="list">
            {displayProducts?.map((product) => (
                <Card product={product} key={product.id} />
            ))}
        </div>
    )
}

export default List