import React from "react";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div>
      <div className="category-sec">
      <div className="sale-Category">
        <div className="sale-content">
          <h1>
            Mid <br /> Summer <br /> Sale
          </h1>
        </div>
        <div className="sale-cat-images">
          <div className="sale-cat-sec">
            <div className="sale-cat-img">
              <Link to={`/women/unstitch`}>
              <img src="./images/i1.webp" alt="" />
              </Link>
            </div>
            <div className="saleCat-img-con">
              <p>Unstitched</p>
              <p>Up to 50% OFF</p>
            </div>
          </div>
          <div className="sale-cat-sec">
            <div className="sale-cat-img">
              <Link to={'/women/west'}>
              <img src="./images/i2.webp" alt="" />
              </Link>
            </div>
            <div className="saleCat-img-con">
              <p>West</p>
              <p>Up to 50% OFF</p>
            </div>
          </div>

          <div className="sale-cat-sec">
            <div className="sale-cat-img">
              <Link to={'/men/stitch'}>

              <img src="./images/i4.avif" alt="" />
              </Link>
            </div>
            <div className="saleCat-img-con">
              <p>Men's stitch</p>
              <p>Up to 50% OFF</p>
            </div>
          </div>
          <div className="sale-cat-sec">
            <div className="sale-cat-img">
              <Link to={'/women/ready-to-wear'}>
              <img src="./images/i8.webp" alt="" />
              </Link>
            </div>
            <div className="saleCat-img-con">
              <p>Ready to wear</p>
              <p>Up to 50% OFF</p>
            </div>
          </div>
          <div className="sale-cat-sec">
            <div className="sale-cat-img">
              <Link to={'/beauty'}>
              <img src="./images/i5.webp" alt="" />
              </Link>
            </div>
            <div className="saleCat-img-con">
              <p>Beauty</p>
              <p>Up to 50% OFF</p>
            </div>
          </div>
          <div className="sale-cat-sec">
            <div className="sale-cat-img">
              <Link to={'/home'}>
              <img src="./images/i7.avif" alt="" />
              </Link>
            </div>
            <div className="saleCat-img-con">
              <p>Home</p>
              <p>Up to 50% OFF</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-by-cat">
        <div className="header-cat">
          <p>Shop by Category</p>
        </div>

        <div className="slider-wraper">
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/kids'}>
              <img src="./images/s1.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>Kids</h6>
              <p>As Low as Rs 1000</p>
            </div>
          </div>
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/beauty'}>
               <img src="./images/s2.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>Beauty</h6>
              <p>As Low as Rs 600</p>
            </div>
          </div>
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/women/modest-wear'}>
              <img src="./images/s3.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>Modest wear</h6>
              <p>As Low as Rs 600</p>
            </div>
          </div>
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/home'}>
               <img src="./images/s4.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>Home</h6>
              <p>As Low as Rs 300</p>
            </div>
          </div>
         
        
        
        </div>
      </div>
      <div className="shop-by-cat">
        <div className="header-cat">
          <p>Trending On Sale</p>
        </div>

        <div className="slider-wraper">
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/kids/kids-bedding/AL2012'}>
              <img src="./images/ks7.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>MELONIE - QUILT COVER</h6>
              <p>As Low as Rs 1000</p>
            </div>
          </div>
          <div className="image-list">
            <div className="image-sec">
              <Link to={"/women/unstitch/AL2023"}>
               <img src="./images/w6.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>2 PIECE - PRINTED LAWN SUIT</h6>
              <p>As Low as Rs 600</p>
            </div>
          </div>
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/women/west/AL2038'}>
              <img src="./images/w64.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>DENIM STRAIGHT JEANS</h6>
              <p>As Low as Rs 600</p>
            </div>
          </div>
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/men/stitch/AL2005'}>
               <img src="./images/m12.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>EMBROIDERED WASH & WEAR KURTA</h6>
              <p>As Low as Rs 300</p>
            </div>
          </div>
          
         
        
        
        </div>
      </div>
      <div className="shop-by-cat">
        <div className="header-cat">
          <p>More To Explore</p>
        </div>

        <div className="slider-wraper">
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/home/bedding'}>
              <img src="./images/ks7.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>Bedding</h6>
              <p>As Low as Rs 1000</p>
            </div>
          </div>
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/beauty/Cosmetics'}>
               <img src="./images/bs3.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>Cosmetics</h6>
              <p>As Low as Rs 600</p>
            </div>
          </div>
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/beauty/Fragrences'}>
              <img src="./images/bs11.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>Fragrences</h6>
              <p>As Low as Rs 600</p>
            </div>
          </div>
          <div className="image-list">
            <div className="image-sec">
              <Link to={'/home/Table & Kitchen Linen'}>
               <img src="./images/h20.webp" alt="" />
              </Link>
            </div>

            <div className="image-content">
              <h6>Table & Kitchen</h6>
              <p>As Low as Rs 300</p>
            </div>
          </div>
         
        
          </div>
        </div>
      </div>
    </div>
  );
};

 


export default Category;
