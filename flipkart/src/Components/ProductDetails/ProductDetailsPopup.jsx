import React from "react";
import "./ProductDetailsPopup.css";
// import Product from '../Products/Product';

var el = document.querySelectorAll(".product-details-popup");
el.scrollTop = el.scrollHeight;

setTimeout(function () {
  el.scrollTop = 0;
}, 500);

const ProductDetailsPopup = ({ product, onClose,togglePaymentPage}) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        overflow: "auto",
        fontFamily: "League Spartan, sans-serif",
        fontWeight: "550",
      }}
      className="product-details-popup  product-popup-content"
    >
      <div className="popup-header">
        <img src={product.imageUrl} alt={""} />
      </div>
      <div
        className="product-buy-button"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
         onClick={togglePaymentPage}
          style={{ background: "#ff9f00" }}
        >
          Add to Cart
        </button>
        <button
          onClick={togglePaymentPage}
        >
          Buy Now
        </button>
      </div>
      <div className="right">
        <div className="popup-content">
          <div className="product-title">
            <p>{product.description}</p>
          </div>
          <span>
            <b id="box-green">
              4.3 <img src="/img/starwhite.png" alt="" width="10px" />
            </b>
            <a id="retings" href="#">
              727 Ratings & 62 Reviews
            </a>
          </span>
          <br />
          <img src="/img/assured.png" alt="" width="100px" />
          <br />
          <div className="product-price1">
            <span className="product-discounted-price1">
              <b>{product.discountedPrice}</b> &nbsp;
            </span>
            <span className="product-cut-price1">{product.cutPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span className="percentage1">{product.percentage}</span>&nbsp;
            <br />
          </div>

          <div className="product_sort_info font-xs mb-30">
            <p
              className="available"
              style={{ fontSize: "20px", fontWeight: "600" }}
            >
              Coupons for you
            </p>
            <p style={{ color: "#212121", fontSize: "16px" }}>
              <span style={{ fontWeight: "550" }}>
                <b> Special Price</b>{" "}
              </span>{" "}
              Get extra 30% off upto ₹50 on 1 item(s) (price inclusive of
              discount){" "}
              <a href="#">
                {" "}
                <span style={{ color: "#2874f0", fontWeight: "800" }}>
                  {" "}
                  T&amp;C{" "}
                </span>
              </a>
            </p>
            <p style={{ fontSize: "18px" }} className="available">
              <b> Available offers</b>
            </p>
            <br />
            <ul style={{ listStyle: "none", marginLeft: "-40px" }}>
              <li className="" style={{ marginTop: "10px", color: "#212121" }}>
                {" "}
                <img
                  src="/img/shopping.png"
                  width="15"
                  style={{
                    marginRight: "10px",
                    position: "absolute",
                    right: "3%",
                  }}
                />{" "}
                <span style={{ fontWeight: "550" }}>
                  <b> Bank Offer</b>{" "}
                </span>{" "}
                Additional ₹2000 off on HDFC Bank Credit Card{" "}
                <a href="#">
                  {" "}
                  <span style={{ color: "#2874f0", fontWeight: "800" }}>
                    {" "}
                    T&amp;C{" "}
                  </span>
                </a>
              </li>
              <br />
              <br />
              <li className="mb-10" style={{ color: "#212121" }}>
                {" "}
                <img
                  src="/img/shopping.png"
                  width="15"
                  style={{
                    marginRight: "10px",
                    position: "absolute",
                    right: "3%",
                  }}
                />{" "}
                <span style={{ fontWeight: "550" }}>
                  <b> Partner Offer</b>{" "}
                </span>{" "}
                Buy this product and get upto ₹500 off on Flipkart Furniture{" "}
                <a href="#">
                  {" "}
                  <span style={{ color: "#2874f0", fontWeight: "800" }}>
                    {" "}
                    Know More{" "}
                  </span>
                </a>
              </li>
              <br />
              <br />
              <li className="mb-10" style={{ color: "#212121" }}>
                {" "}
                <img
                  src="/img/shopping.png"
                  width="15"
                  style={{
                    marginRight: "10px",
                    position: "absolute",
                    right: "3%",
                  }}
                />{" "}
                <span style={{ fontWeight: "550" }}>
                  <b> Partner Offer</b>{" "}
                </span>{" "}
                Sign up for Flipkart Pay Later and get Flipkart Gift Card worth
                ₹100*{" "}
                <a href="#">
                  {" "}
                  <span style={{ color: "#2874f0", fontWeight: "800" }}>
                    {" "}
                    Know More{" "}
                  </span>
                </a>
              </li>
              <br />
              <br />
              <li className="mb-10" style={{ color: "#212121" }}>
                {" "}
                <img
                  src="/img/calendar.png"
                  width="15"
                  style={{
                    marginRight: "10px",
                    position: "absolute",
                    right: "3%",
                  }}
                />{" "}
                <span style={{ fontWeight: "550" }}>
                  <b> No cost EMI ₹2,990/month </b>
                </span>{" "}
                Standard EMI also available{" "}
                <a href="#">
                  {" "}
                  <span style={{ color: "#2874f0", fontWeight: "800" }}>
                    {" "}
                    View Plan{" "}
                  </span>
                </a>
              </li>
              <br />
              <br />
              <li className="mb-10" style={{ color: "#212121" }}>
                {" "}
                <span style={{ fontWeight: "550" }}>
                  <b> 1 Year Warranty </b>
                </span>{" "}
                <a href="#">
                  {" "}
                  <span style={{ color: "#2874f0", fontWeight: "800" }}>
                    {" "}
                    Know More{" "}
                  </span>
                </a>
              </li>
              <br />
              <br />
            </ul>
          </div>
          {/* Add other product details as needed */}
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          right: "50%",
          backgroundColor: "#ff7300",
          width: "80px",
          height: "30px",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        Close
      </button>
      <br />
      <br />
    </div>
  );
};

export default ProductDetailsPopup;
