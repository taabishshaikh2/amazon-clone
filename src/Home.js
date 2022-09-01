import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <>
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="123450"
            title="The learn Startup how constant inovation creates Readicall Successful business"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={11.96}
            rating={5}
          />
          <Product
            id="123450"
            title="Amazon Echo 3rd Genertation"
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
            price={98.99}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="123450"
            title="The learn Startup how constant inovation creates Readicall Successful business"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={11.96}
            rating={5}
          />
          <Product
            id="123450"
            title="The learn Startup how constant inovation creates Readicall Successful business"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={11.96}
            rating={5}
          />
          <Product
            id="123450"
            title="The learn Startup how constant inovation creates Readicall Successful business"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={11.96}
            rating={5}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
