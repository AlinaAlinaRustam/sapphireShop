import React from "react";
import { products } from "../data/Product";
import { useParams } from "react-router-dom";
import { useState } from "react";
const SinglePage = () => {
  const params = useParams();
  const singleProd = products.find((x) => x.sku === params.id4)
  const [quantity, setquantity] = useState(1)
  const incFun = () => {
      setquantity(quantity + 1)
  }
  const decFun = () => {
      if (quantity > 1)
      setquantity(quantity - 1)
  }
  return (
    <div>
      <div className="SinglePage">
        <div className="singlePageLeft">
          <div className="div1">
            <img src={`${singleProd.image[0]}`} alt="" />
            <img src={`${singleProd.image[1]}`} />
          </div>
          <div className="div2">
            <img src={`${singleProd.image[2]}`}/>
            <img src={`${singleProd.image[3]}`}/>
          </div>
        </div>
        <div className="singlePageRight">
          <div className="TitleProduct">
            <h1>{`${singleProd.title}`}</h1>
            <p>Rs:{`${singleProd.price}`}</p>
            <p>sku:{`${singleProd.sku}`}</p>
            <div className="count">
              <button onClick={decFun} className="CountBtn">-</button>
              <p>{quantity}</p> <button onClick={incFun} className="CountBtn">+</button>
              <button className="AddBtn">ADD TO BAG</button>
            </div>
          </div>
          <div className="productDiscription">
            <h1>Product details</h1>
            <p>{`${singleProd.discription}`}
              
             
            </p>
          </div>
          <div className="prodDetails">
            <div className="prodDetail">
              <h1>{`${singleProd.type}`}</h1>

              <h3>Shirt:</h3>
              <p className="p1">{`${singleProd.details.topdetails}`}</p>
              <div className="content">
                <h3>Fabric:</h3>
                <p>{`${singleProd.details.topFabric}`}</p>
              </div>
              <div className="content">
                <h3>Color:</h3>
                <p>{`${singleProd.details.topcolor}`}</p>
              </div>
            </div>
            <div className="prodDetail">
              <h3>Dupatta:</h3>
              <p className="p1">{`${singleProd.details.dupattadetails}`}</p>

              <div className="content">
                <h3>Fabric:</h3>
                <p>{`${singleProd.details.dupattaFabric}`}</p>
              </div>
              <div className="content">
                <h3>Color:</h3>
                <p>{`${singleProd.details.dupattacolor}`}</p>
              </div>
            </div>
            </div>
            <div className="Review">
              <h2>Leave a Review</h2>

              <div className="ReviewNote" >

                <h3>Note:</h3> <p>Actual product color may vary slightly from the
                image</p> 
              </div>
              
            </div>
            <div className="NextBtn">
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default SinglePage;
