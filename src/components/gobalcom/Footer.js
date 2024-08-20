import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="footer">
           <div class='footer-heading'>
            <h5 >CONTACT US</h5>
            <p> <i class="fa-solid fa-location-dot"></i>Sapphire Retail Head Office 
            1.5-Km,<br /> Defence Road, Bhobtian Chowk, Off Raiwind <br />Road, Opposite University of Lahore, Lahore.</p>
            <p><i class="fa-regular fa-envelope"></i><a href="">wecare@sapphireonline.pk</a></p>
            <p><i class="fa-solid fa-phone"></i>+92(0)42 111-738-245</p>
           </div>
           <div class='footer-heading'>
            <h5>CUSTOMER CARE
            </h5>
            <p><a href="">Exchange Policy</a></p>
            <p><a href="">FAQs</a></p>
            <p><a href="">Contact Us</a></p>
           </div>
           <div class='footer-heading'>
            <h5>INFORMATION</h5>
            
            <p><a href="">About Us</a></p>
            <p><a href="">Privacy Policy</a></p>
            <p><a href="">SafePay Guide</a></p>
            <p><a href="">Payments</a></p>
            <p><a href="">Store Locator</a></p>
            <p><a href="">Fabric Glossary</a></p>
            <p><a href="">Blogs</a></p>
           </div>
           <div class='footer-heading'>
            <h5>NEWSLETTER SIGNUP</h5>
            <p>Subscribe to our Newsletter for Exclusive Updates</p>
            <div className="footer-serachBar">
            <input type="text" id='main-input' placeholder='your email address'/>
        <div className="search-btn">

            <button>Subscribe</button>
        </div>
        </div>
           <div className="footer-icons">
            <div>

           <i class="fa-brands fa-facebook"></i>
            </div>
            <div>

           <i class="fa-brands fa-instagram"></i>
            </div>
            <div>

           <i class="fa-brands fa-youtube"></i>
            </div>
           </div>
           </div>
        </div>
        <div className="bottem-sec">
            <div><p>© COPYRIGHT 2024 SAPPHIRE</p></div>
            
        </div>
    </div>
  )
}

export default Footer