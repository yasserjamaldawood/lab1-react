import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export const SingleProduct = () => {
    const mySingleProduct = useParams();
    useEffect(() => {
        fechSingleProduct()
      }, [])
    
      const fechSingleProduct = () => {
        fetch(`https://fakestoreapi.com/products/${mySingleProduct.id}`)
          .then(res => res.json())
          .then(json => setProduct(json))
      }
      const [product, setProduct] = useState({});
      console.log(product)

  return (
    <div>
        <div>

        <div className="card col-md-6 mx-2 my-2 wd-50 mx-auto" key={product.id} style={{ width: "18rem" }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.category}</p>
            <p className="card-text">{product.description}</p>

            <p className="card-text">{product.price}</p>
          </div>
        </div>

        </div>
    </div>
  )
}
export default SingleProduct;
