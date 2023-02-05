import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "./Home.css";

function Home() {
  return (
    <div className="home__container">
      <div className="title__container">
        <h1>Dashboards</h1>
        <h2>What we have?</h2>
      </div>

      <div className="card__container">
        <div className="home__card" onClick={()=>{
          window.location.href = "/cryptocurrency"
        }}>
          <CurrencyBitcoinIcon />
          CRYPTO CURRENCY
        </div>
        <div className="home__card" onClick={()=>{
          window.location.href = "/nasa"
        }}>
          <RocketLaunchIcon />
          NASA
        </div>
        <div className="home__card" onClick={()=>{
          window.location.href = "/covid"
        }}>
          <CoronavirusIcon />
          CORONO
        </div>
        <div className="home__card" onClick={()=>{
          window.location.href = "/product"
        }}>
          <LocalMallIcon />
          E-COMMERCE
        </div>
      </div>
    </div>
  );
}

export default Home;
