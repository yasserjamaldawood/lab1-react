import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';


export const Shop = () => {
  useEffect(() => {
    fechData()
  }, [])

  const fechData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }
  const [products, setProducts] = useState([]);
  console.log(products)


  return (
    <div className='container'>


      <div className='row my-5'>
        {products.map((product) => (
          <div className="card col-md4 mx-2 my-2" key={product.id} style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.category}</p>
              <p className="card-text">{product.price}</p>
              <Link to={`${product.id}`} className="btn btn-primary">show details</Link>
            </div>
          </div>
        ))}

      </div>


    </div>
  )
}
export default Shop;
