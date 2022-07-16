import React from 'react'
import product from '../sanity_ecommerce/schemas/product'

const Home = () => {
  return (
    <>
      HeroBanner
    
      <div>
        <h2> Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div>
          {['Product 1' , 'Product 2'].map((product)=> product )}
      </div>



    </>
  )
}

export default Home