import { useParams } from 'react-router-dom';
import List from './components/list/List'
import './products.scss'
import { useEffect, useState } from 'react';

function Products() {
  const categoryID = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  function selectFilter(selectedFilter) {
    if (selectedFilters.includes(selectedFilter)) {
      setSelectedFilters(
        [...selectedFilters.filter(selectedFiltersItem => selectedFiltersItem !== selectedFilter)]
      )
    }
    else {
      setSelectedFilters([...selectedFilters, selectedFilter])
    }
  }

  useEffect(() => {
    console.log(selectedFilters)
  }, [selectedFilters])

  return (
    <div className="products">
      <div className="left">
        <div className="filter-item">
          <h2>Categories</h2>
          <div className="filter-select">
            <input type="checkbox" id="1" value={1} onClick={() => selectFilter("new")}/>
            <label htmlFor="1">New</label>
          </div>
          <div className="filter-select">
            <input type="checkbox" id="2" value={2} onClick={() => selectFilter("featured")} />
            <label htmlFor="2">Featured</label>
          </div>
          <div className="filter-select">
            <input type="checkbox" id="3" value={3} onClick={() => selectFilter("trending")}/>
            <label htmlFor="3">Trending</label>
          </div>
        </div>
        {/* <div className="filter-item">
          <h2>Filter by price</h2>
          <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
        </div> */}
        <div className="sort-item">
          <h2>Sort</h2>
          <div className="sort-select">
            <input 
              type="radio" 
              id="asc" 
              value="asc" 
              name="price" 
              onChange={e => setSort("asc")}
            />
            <label htmlFor="asc">Price Low to High</label>
          </div>
          <div className="sort-select">
          <input 
              type="radio" 
              id="desc" 
              value="desc" 
              name="price" 
              onChange={e => setSort("desc")}
            />
            <label htmlFor="desc">Price High to Low</label>
          </div>
          <div className="sort-select">
          <input 
              type="radio" 
              id="alpha" 
              value="alpha" 
              name="price" 
              onChange={e => setSort("alpha")}
            />
            <label htmlFor="alpha">Alphabetical Order</label>
          </div>
        </div>
      </div>
      {/* {selectedFilters && selectedFilters.map((filter, index) => (
        <div className="filter" key={index}>
          {filter}
        </div>
      ))} */}
      <div className="right">
        <img
          className="category-image"
          src="/images/banner.jpg"
          alt=""
          />
        <h1>Shop</h1>
        <List 
          categoryID={categoryID} 
          maxPrice={maxPrice} 
          sort={sort} 
          selectedFilters={selectedFilters}
        />
      </div>
    </div>
  )
}

export default Products
