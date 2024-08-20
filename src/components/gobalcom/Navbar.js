import React from "react";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import { useState } from "react";
const Navbar = () => {
  const [activecartslider, setactivecartslider] = useState(false)
  const cartFun = ()=>{
    setactivecartslider(!activecartslider)
  }
  return (
    <div>
      <div className="main-header">
        <div className="left-header">
          <div className="main-logo">
            <Link to={'/'}>

            <img
              src="https://cdn.shopify.com/s/files/1/1592/0041/files/NEW_LOGO_-_Black.svg?v=1675150363"
              alt=""
            />
            </Link>
          </div>
          <div className="serachBar">
            <input
              type="text"
              id="main-input"
              placeholder="Find Your Favourites"
            />
            <div className="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div className="right-header">
          <div className="main-icons">
            <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-bag-shopping" onClick={cartFun}></i>

          </div>
        </div>
      </div>
      <hr />
      <Cart activecartslider={activecartslider}/>

      <div className="navbar-links">
        <ul>
         
          <li>
            <Link to={'/women'}>Women</Link>
    <ul className="Dropdown">
        <li className="dropdownImg">
            <img src="./images/u1.avif " alt="" />
        </li>
        <li className="DropdownList">
<li>
    <h3>Ready to Wear</h3>
    <ul className="NestedDropdown">
      <Link to={'/women/ready-to-wear/new-arrivals/shirts'}>
        Shirts
      </Link>
      <Link to={'/women/ready-to-wear/new-arrivals/dupatta'}>
        Dupatta
      </Link>
      <Link to={'/women/ready-to-wear/new-arrivals/bottom'}>
      Bottom
      </Link>
      <Link to={'/women/ready-to-wear/new-arrivals/short-sleeve'}>
      Short Sleeve
      </Link>
    </ul>
</li>
<li>
    <h3>Unstitch</h3>
    <ul className="NestedDropdown">
    <Link to={'/women/unstitch/new-arrivals/summer-24'}>
     Summer's 24
      </Link>
      <Link to={'/women/unstitch/new-arrivals/lawn-24'}>
     Lawn 24
      </Link>
      <Link to={'/women/unstitch/new-arrivals/1-piece'}>
     1 piece
      </Link>
      <Link to={'/women/unstitch/new-arrivals/2-piece'}>
    2 Piece
      </Link>
      
    </ul>
</li>
<li>
    <h3>West</h3>
    <ul className="NestedDropdown">
    <Link to={'/women/west/new-arrivals/w-summer-24'}>
    Summer'24
      </Link>
      <Link to={'/women/west/new-arrivals/t-shirt'}>
      T-Shirts
      </Link>
      <Link to={'/women/west/new-arrivals/top'}>
      Top
      </Link>
      <Link to={'/women/west/new-arrivals/dresses'}>
      Dresses
      </Link>
        
    </ul>
</li>
<li>
    <h3>Sleepwear</h3>
    <ul className="NestedDropdown">
    <Link to={'/women/sleep-wear/new-arrivals/sets'}>
     Sets
      </Link>
      <Link to={'/women/sleep-wear/new-arrivals/dresses-sleep'}>
      Dresses
      </Link>
      <Link to={'/women/sleep-wear/new-arrivals/t-shirt'}>
      T-shirts
      </Link>
      <Link to={'/women/sleep-wear/new-arrivals/pajama'}>
     Pajamas
      </Link>
    </ul>
</li>
        </li>

    </ul>

               
            
    
          </li>
          <li>
          <Link to={'/men'}>Men</Link>
            <ul className="Dropdown">
        <li className="dropdownImg">
            <img src="./images/u2.avif " alt="" />
        </li>
        <li className="DropdownList">
<li>
    <h3>Mens Stitch</h3>
    <ul className="NestedDropdown">
    <Link to={'/men/stitch/new-arrivals/summer-24s'}>
     Summer's 24
      </Link>
      <Link to={'/men/stitch/new-arrivals/fabric-glossary'}>
      Fabric Glossary
      </Link>
       
       
    </ul>
</li>
<li>
    <h3>Mens Unstitch</h3>
    <ul className="NestedDropdown">
    <Link to={'/men/unstitched/new-arrivals/Summer-24'}>
     Summer-24
      </Link>
      <Link to={'/men/unstitched/new-arrivals/kurtas'}>
      Kurtas
      </Link>
      <Link to={'/men/unstitched/new-arrivals/outfits'}>
     Outfits
      </Link>
        </ul>
</li>
        </li>
      </ul>
      </li>
    
          <li>
          <Link to={'/kids'}>Kids</Link>
            <ul className="Dropdown">
        <li className="dropdownImg">
            <img src="./images/u3.avif " alt="" />
        </li>
        <li className="DropdownList">
<li>
    <h3>Girls</h3>
    <ul className="NestedDropdown">
    <Link to={'/kids/girls/new-arrivals/girl-kurtas'}>
    Kurtas
      </Link>
      <Link to={'/kids/girls/new-arrivals/Outfits'}>
     Outfits
      </Link>
      <Link to={'/kids/girls/new-arrivals/fusion'}>
      Fusion
      </Link>
      <Link to={'/kids/girls/new-arrivals/g-bottom'}>
      Bottoms
      </Link>
    
       
    </ul>
</li>
<li>
    <h3>Boys</h3>
    <ul className="NestedDropdown">
    <Link to={'/kids/boys/new-arrivals/summer-24b'}>
    Summer'24
      </Link>
      <Link to={'/kids/boys/new-arrivals/boy-kurtas'}>
      Kurtas
      </Link>
      <Link to={'/kids/boys/new-arrivals/outfits-b'}>
      Outfits
      </Link>

        </ul>
</li>
<li>
    <h3>Kids Bedding</h3>
    <ul className="NestedDropdown">
    <Link to={'/kids/bedding/new-arrivals/boys-bedding'}>
      Boys Bedding
      </Link>
      <Link to={'/kids/bedding/new-arrivals/girls-bedding'}>
      Girls Bedding
      </Link>
        </ul>
</li>
        </li>
      </ul>
      
            
          </li>
          <li>
          <Link to={'/beauty'}>Beauty</Link>
            <ul className="Dropdown">
        <li className="dropdownImg">
            <img src="./images/u4.avif " alt="" />
        </li>
        <li className="DropdownList">
<li>
    <h3>Cosmetics</h3>
    <ul className="NestedDropdown">
    <Link to={'/beauty/Cosmetics/new-arrivals/face'}>
    Face
      </Link>
      <Link to={'/beauty/Cosmetics/new-arrivals/eyes'}>
      Eyes
      </Link>
      <Link to={'/beauty/Cosmetics/new-arrivals/lips'}>
     Lips
      </Link>
      <Link to={'/beauty/Cosmetics/new-arrivals/nails'}>
     Nails
      </Link>
       
    </ul>
</li>
<li>
    <h3>Fragrences</h3>
    <ul className="NestedDropdown">
    <Link to={'/beauty/Fragrences/new-arrivals/women-fragrences'}>
     Women's Fragrences
      </Link>
      <Link to={'/beauty/Fragrences/new-arrivals/men-fragrences'}>
     Men's Fragrences
      </Link>
      <Link to={'/beauty/Fragrences/new-arrivals/body-mists'}>
     Body Mists
      </Link>
        </ul>
</li>
<li>
    <h3>Shop By scents</h3>
    <ul className="NestedDropdown">
    <Link to={'/beauty/shop-by-scents/new-arrivals/floral'}>
    Floral
      </Link>
      <Link to={'/beauty/shop-by-scents/new-arrivals/fruity'}>
    Fruity
      </Link>
      <Link to={'/beauty/shop-by-scents/new-arrivals/woody'}>
     Woody
      </Link>
       <Link to={'/beauty/shop-by-scents/new-arrivals/oriental'}>
    Oriental
      </Link>
      
        </ul>
</li>
        </li>
      </ul>
      
          </li>

          <li>
          <Link to={'/home'}>Home</Link>
            <ul className="Dropdown">
       
        <li className="DropdownList">
<li>
    <h3>Bedding</h3>
    <ul className="NestedDropdown">
    <Link to={'/home/bedding/new-arrivals/bedsets'}>
    Bed Sets
      </Link>
      <Link to={'/home/bedding/new-arrivals/bedsheets'}>
    Bed Sheets
      </Link>
      <Link to={'/home/bedding/new-arrivals/fittedsheets'}>
    Fitted Sheets
      </Link>
      <Link to={'/home/bedding/new-arrivals/bedspreads'}>
    Bed Spreads
      </Link>
       
    </ul>
</li>
<li>
    <h3>Bath & Linen</h3>
    <ul className="NestedDropdown">
    <Link to={'/home/living/new-arrivals/towels'}>
    Towels
      </Link>
        
        </ul>
</li>
<li>
    <h3>Tables & Kitchen </h3>
    <ul className="NestedDropdown">
    <Link to={'/home/living/new-arrivals/table-runner'}>
    Table Runner
      </Link>
        </ul>
</li>
<li>
    <h3>Living</h3>
    <ul className="NestedDropdown">
    <Link to={'/home/living/new-arrivals/cusions&covers'}>
    Cusions & Covers
      </Link>
      
        </ul>
</li>
        </li>
      </ul>
      
            
          </li>
          <li>
          <Link to={'/sale'}>Sale</Link>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Navbar;
