import React, { Component } from 'react';
import Product from './Product'; // Assuming Product.jsx is in the same directory
import ProductDetailsPopup  from '../ProductDetails/ProductDetailsPopup';
import PaymentPage from '../payment/PaymentPage';
import "./productList.css";
import "../ProductDetails/ProductDetailsPopup.css";
class ProductsList extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge Bluetooth Headset (Sage Green, On the Ear) ',
        description: 'boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge Bluetooth Headset (Sage Green, On the Ear) ',
        imageUrl: '/img/headphones.jpeg',
        cutPrice: '₹ 6999',
        percentage: "99.1% OFF",
        discountedPrice: '₹ 699',
      },
      {
        id: 2,
        name: 'SONY HT-S20R 5.1ch Home Theatre with Dolby Digital, Subwoofer, Rear Speakers, 400 W Bluetooth Soundbar (Black, 5.1 Channel)',
        description: 'SONY HT-S20R 5.1ch Home Theatre with Dolby Digital, Subwoofer, Rear Speakers, 400 W Bluetooth Soundbar (Black, 5.1 Channel)',
        imageUrl: '/img/sony-ht.webp',
        cutPrice: '₹ 49990',
        percentage: "90.01% OFF",
        discountedPrice: '₹ 499',
      },
      {
        id: 3,
        name: 'boAt Aavante Bar 3100D 260 W Bluetooth Soundbar (Premium Black, 5.1 Channel)',
        description: 'boAt Aavante Bar 3100D 260 W Bluetooth Soundbar (Premium Black, 5.1 Channel)',
        imageUrl: '/img/2.webp',
        cutPrice: '₹ 24900',
        percentage: "96.36% OFF",
        discountedPrice: '₹ 299',
      },
      {
        id: 4,
        name: 'SONY CFI-1208A-PS5 Console EA SPORTS FC 24 Bundle 825 GB SSD GB with EA SPORTS FC 24 full game voucher (White)',
        description: 'SONY CFI-1208A-PS5 Console EA SPORTS FC 24 Bundle 825 GB SSD GB with EA SPORTS FC 24 full game voucher (White)',
        imageUrl: '/img/3.webp',
        cutPrice: '₹ 48999',
        percentage: "90.01% OFF",
        discountedPrice: '₹ 599',
      },
      {
        id: 5,
        name: 'Fire-Boltt Hurricane 1.3 Curved Glass Display with 360 Health Training, 100+ Sports Modes Smartwatch (Black Strap, Free Size)',
        description: 'Fire-Boltt Hurricane 1.3 Curved Glass Display with 360 Health Training, 100+ Sports Modes Smartwatch (Black Strap, Free Size)',
        imageUrl: '/img/4.webp',
        cutPrice: '₹ 8447',
        percentage: "98.45% OFF",
        discountedPrice: '₹ 269',
      },
      {
        id: 6,
        name: 'SONY WF-H800 With 16hrs Battery Life Bluetooth Headset (Black, True Wireless)',
        description: 'SONY WF-H800 With 16hrs Battery Life Bluetooth Headset (Black, True Wireless)',
        imageUrl: '/img/5.webp',
        cutPrice: '₹ 12999',
        percentage: "99% OFF",
        discountedPrice: '₹ 199',
      },
      {
        id: 7,
        name: 'SONY SRS-XP700 with IPX4 Splashproof Protection, 25hrs Battery Portable Wireless Bluetooth Party Speaker (Black, Grey, Stereo Channel)',
        description: 'SONY SRS-XP700 with IPX4 Splashproof Protection, 25hrs Battery Portable Wireless Bluetooth Party Speaker (Black, Grey, Stereo Channel)',
        imageUrl: '/img/6.webp',
        cutPrice: '₹ 14990',
        percentage: "99.61% OFF",
        discountedPrice: '₹ 149',
      },
      {
        id: 8,
        name: 'Kenstar 40 L Room/Personal Air Cooler',
        description: 'Kenstar 40 L Room/Personal Air Cooler',
        imageUrl: '/img/7.webp',
        cutPrice: '₹ 10990',
        percentage: "99.1% OFF",
        discountedPrice: '₹ 299',
      },
      {
        id: 9,
        name: 'BAJAJ 23 L Room/Personal Air Cooler (White, FRIO NEW)',
        description: 'BAJAJ 23 L Room/Personal Air Cooler (White, FRIO NEW)',
        imageUrl: '/img/8.webp',
        cutPrice: '₹ 7590',
        percentage: "97.61% OFF",
        discountedPrice: '₹ 179',
      },
      {
        id: 10,
        name: 'LG 201 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Smart Inverter Compressor, Fast Ice Making (Blue Charm, GL-D211HBCZ) ',
        description: 'LG 201 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Smart Inverter Compressor, Fast Ice Making (Blue Charm, GL-D211HBCZ) ',
        imageUrl: '/img/9.webp',
        cutPrice: '₹ 20990',
        percentage: "% OF60.02% OFF",
        discountedPrice: '₹ 4399',
      },
      {
        id: 11,
        name: 'BAJAJ 10 L Storage Water Geyser (Popular Plus 10 L, White) ',
        description: 'BAJAJ 10 L Storage Water Geyser (Popular Plus 10 L, White) ',
        imageUrl: '/img/10.webp',
        cutPrice: '₹ 15999',
        percentage: "60.1% OFF",
        discountedPrice: '₹ 3459',
      },
      {
        id: 12,
        name: 'Women Black Shoulder Bag ',
        description: 'Women Black Shoulder Bag ',
        imageUrl: '/img/11.webp',
        cutPrice: '₹ 4599',
        percentage: "90.1% OFF",
        discountedPrice: '₹ 199',
      },
      {
        id: 13,
        name: 'SAMSUNG Galaxy Z Flip3 5G (Phantom Black, 128 GB) (8 GB RAM)',
        description: 'SAMSUNG Galaxy Z Flip3 5G (Phantom Black, 128 GB) (8 GB RAM)',
        imageUrl: '/img/12.webp',
        cutPrice: '₹ 105900',
        percentage: "80.1% OFF",
        discountedPrice: '₹ 21399',
      },
      {
        id: 14,
        name: 'vivo V27 Pro 5G (Magic Blue, 256 GB) (12 GB RAM)',
        description: 'vivo V27 Pro 5G (Magic Blue, 256 GB) (12 GB RAM)',
        imageUrl: '/img/13.webp',
        cutPrice: '₹ 45990',
        percentage: "80.1% OFF",
        discountedPrice: '₹ 14599',
      },
      {
        id: 15,
        name: 'Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens (Black) ',
        description: 'Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm is STM Lens (Black) ',
        imageUrl: '/img/14.webp',
        cutPrice: '₹ 61999',
        percentage: "60.1% OFF",
        discountedPrice: '₹ 15495',
      },
      {
        id: 16,
        name: 'LG 7 kg 5 star rating and Wind jet dry Semi Automatic Top Load Grey, White (P7020NGAZ)',
        description: 'LG 7 kg 5 star rating and Wind jet dry Semi Automatic Top Load Grey, White (P7020NGAZ)',
        imageUrl: '/img/15.webp',
        cutPrice: '₹ 11990',
        percentage: "99.1% OFF",
        discountedPrice: '₹ 399',
      },
      {
        id: 17,
        name: 'APPLE Watch Ultra GPS + Cellular (Midnight Strap, Regular)',
        description: 'APPLE Watch Ultra GPS + Cellular (Midnight Strap, Regular)',
        imageUrl: '/img/16.webp',
        cutPrice: '₹ 95990',
        percentage: "99.1% OFF",
        discountedPrice: '₹ 456',
      },
      {
        id: 18,
        name: 'SAMSUNG Galaxy S23 5G (Phantom Black, 256 GB) (8 GB RAM)',
        description: 'SAMSUNG Galaxy S23 5G (Phantom Black, 256 GB) (8 GB RAM)',
        imageUrl: '/img/17.webp',
        cutPrice: '₹ 95990',
        percentage: "99.09% OFF",
        discountedPrice: '₹ 946',
      },
      {
        id: 19,
        name: 'APPLE iPhone 14 Pro (Silver, 1 TB)',
        description: 'APPLE iPhone 14 Pro (Silver, 1 TB)',
        imageUrl: '/img/18.webp',
        cutPrice: '₹ 175990',
        percentage: "99% OFF",
        discountedPrice: '₹ 1759',
      },
      {
        id: 20,
        name: 'LG AI Convertible 6-in-1 Cooling 2023 Model 1.5 Ton 5 Star Split AI Dual Inverter 4 Way Swing, HD Filter with Anti-Virus Protection AC - Silver Deco (RS-Q19RNZE, Copper Condenser)',
        description: 'Description for Product 2LG AI Convertible 6-in-1 Cooling 2023 Model 1.5 Ton 5 Star Split AI Dual Inverter 4 Way Swing, HD Filter with Anti-Virus Protection AC - Silver Deco (RS-Q19RNZE, Copper Condenser)g/19.webp',
        imageUrl: "/img/19.webp",
        cutPrice: '₹ 74999',
        percentage: "99.1% OFF",
        discountedPrice: '₹ 749',
      },
      {
        id: 21,
        name: 'SAMSUNG 253 L Frost Free Double Door 3 Star Refrigerator (Elegant Inox, RT28A3453S8/HL)',
        description: 'SAMSUNG 253 L Frost Free Double Door 3 Star Refrigerator (Elegant Inox, RT28A3453S8/HL)',
        imageUrl: '/img/20.webp',
        cutPrice: '₹ 31999',
        percentage: "79.1% OFF",
        discountedPrice: '₹ 1459',
      },
      {
        id: 22,
        name: 'Samsung 2 Door Cooling 2023 Model 1.5 Ton 5 Star Split AI Dual Inverter 4 Way Swing, HD Filter with Anti-Virus Protection AC - Silver Deco (RS-Q19RNZE, Copper Condenser)',
        description: 'Samsung 2 Door Cooling 2023 Model 1.5 Ton 5 Star Split AI Dual Inverter 4 Way Swing, HD Filter with Anti-Virus Protection AC - Silver Deco (RS-Q19RNZE, Copper Condenser)',
        imageUrl: '/img/22.jpeg',
        cutPrice: '₹219999',
        percentage: "90.1% OFF",
        discountedPrice: '₹21999',
      },
      // Add more products here
    ],
    selectedProduct: null,
    isPopupVisible: false,
    showPaymentPage: false,
  };
  handleProductClick = (product) => {
    this.setState({ selectedProduct: product, isPopupVisible: true });
  };

  handleGoBack = () => {
    this.setState({ selectedProduct: null, isPopupVisible: false ,selectedProduct: null,
      showPaymentPage: false});
  };
  togglePaymentPage = () => {
    this.setState((prevState) => ({
      showPaymentPage: !prevState.showPaymentPage,
    }));
  };


  render() {
    const { products, selectedProduct, isPopupVisible, showPaymentPage } = this.state;

    return (
      <div>
        <div className="products-list" style={selectedProduct ? { display: 'none' } : {}}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onClick={() => this.setState({ selectedProduct: product, isPopupVisible: true })} // Handle product click
              togglePaymentPage={this.togglePaymentPage}
            />
          ))}
        </div>

        {/* Render the product details popup when a product is selected */}
        {selectedProduct && !showPaymentPage && (
        <ProductDetailsPopup
          product={selectedProduct}
          onClose={this.handleGoBack}
          togglePaymentPage={this.togglePaymentPage} // Pass the method to toggle payment page
        />
      )}
      {showPaymentPage && (
        <PaymentPage />
      )}
      </div>
    );
  }
}

export default ProductsList;