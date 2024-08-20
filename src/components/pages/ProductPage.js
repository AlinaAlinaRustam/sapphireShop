import React from "react";
import { Link } from "react-router-dom";
import { catBanner } from "../data/Arrays";
import { useParams } from "react-router-dom";
import { products } from '../data/Product'

const ProductPage = () => {
  const  params = useParams()
  let BannerProd = catBanner.filter((x) => x.collection === params.id )
 let prod = products.filter((x) => x.category === params.id ||( params.id === 'sale' && x.salePrice))
 
  return (
    <div>
      <>
        {BannerProd.map((x) => (
          <div className="ProductHeader">
            <div className="ProductTitle">
              <h3>{x.title}</h3> 
            </div>
            <div className="ProductSec">
              {x.image.map((img, index)=>(

              <div className="ProductSecCollection">
                <Link to={`/${x.collection}/${x.category[index]}`}>
                <img src={img} alt="" />
                </Link>
               
                <p>{x.category[index]}</p>
              </div>
              ))}
            </div>
          </div>
        ))}
      </>
      <div className="ProductCatTitle">
        <div
          className="ProductCatTitleHeading
        "
        >
          <h3>Top Searches:</h3>
        </div>
        <div className="ProductCatTitleBtn">
          <a href="">
            <button>boys Embroided</button>
          </a>
          <a href="">
            <button>Girls Embroided</button>
          </a>
          <a href="">
            <button>Printed</button>
          </a>
        </div>
      </div>
      <div className="ProductfilterSection">
        <div className="filterSection">
          <button>
            <i class="fa-solid fa-arrow-down-short-wide"></i>Filter
          </button>
        </div>
        <div className="featureSection">
          <button>
            Featured <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <>

      <div className="ProductCatsec">
      {prod.map((x ) =>(

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
        
    </div>
  );
};

export default ProductPage;
