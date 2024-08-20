import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/Product';
import { Link } from 'react-router-dom';
const NavDropdown = () => {
    const {  id3 } = useParams();
    const navDrop = products.filter((x)=> x.type === id3 )
    console.log(navDrop)
  return (
    <div>
          <div className="ProductCatsec">
      {navDrop.map((x ) =>(
<>
        <div className="ProductCatProd">
          <div className="ProductCatImg">
        <Link to={`/${x.category}/${x.collection}/${x.sku}`}>
            <img src={x.image[0]} alt="" />
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
</>
      ))}
      </div>
    </div>
  )
}

export default NavDropdown