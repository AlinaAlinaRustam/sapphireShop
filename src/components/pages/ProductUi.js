import React from 'react'
import { products } from '../data/Product'
import { Link } from 'react-router-dom'
import {  useParams } from 'react-router-dom'

const ProductUi = () => {
    const params = useParams();
    const newArry = products.filter((x) => x.collection === params.id2 || params.id === 'sale' && (x.salePrice === 40 ||x.salePrice === 30 || x.salePrice === 50)
   
      );
  return (
    <>
      <div className="ProductCatsec">
      {newArry.map((x ) =>(

        <div className="ProductCatProd">
          <div className="ProductCatImg">
           <Link to={`/${x.category}/${x.collection}/${x.sku}`}>
            <img src={x.image[0]} alt="" />
            {x.salePrice && <p className="saleTag">{x.salePrice}%OFF</p>}
           </Link>
           
          </div>
          <div className="ProductCatdis">
            <h3>
              <a href="">{x.title}</a>
            </h3>
            <p>{x.campain}</p>
            <p>Rs.{x.price}</p>
          </div>
        </div>
      ))}
      </div>
    
    
    
    </>
  )
}

export default ProductUi
