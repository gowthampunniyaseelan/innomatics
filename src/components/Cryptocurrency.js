/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cryptocurrency.css";
function Cryptocurrency() {
  const [datas, setDatas] = useState([]);
  const [display, setDisplay] = useState([]);
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((result) => {
        const { data } = result;
        setDatas(data);
        console.log(data);
        toast("Success");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Sorry failed to fetch data");
      });
    const card = document.querySelector(".card");
    card.style.display = "none";
  }, []);

  function showData(e, index) {
    e.preventDefault();
    const temp = datas[index];
    console.log(temp);
    setDisplay(temp);
    const card = document.querySelector(".card");
    card.style.display = "block";
  }

  return (
    <div className="crypto__container">
      <div className="side__navbar">
        <h3 className="crypto__title">Cryptocurrency Dashboard</h3>
        {datas.map((data, index) => (
          <div
            key={data.id}
            className={display.id === data.id ? "activecard" : "card2"}
            onClick={(e) => showData(e, index)}
          >
            <p>{data.name}</p>
            <img src={data.image} alt="image" className="image" />
          </div>
        ))}
      </div>

      {
        <div className="card">
          <p>
            {display.image ? (
              <img src={display.image} alt="image" className="card_image" />
            ) : (
              ""
            )}
          </p>
          <div>
            {display.name ? (
              <p>
                NAME : <span className="show__data">{display.name}</span>{" "}
              </p>
            ) : (
              ""
            )}
          </div>

          <div>
            {display.ath ? (
              <p>
                ATH : <span className="show__data">{display.ath}</span>{" "}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.ath_change_percentage ? (
              <p>
                ATH_CHANGE_PERCENTAGE :{" "}
                <span className="show__data">
                  {display.ath_change_percentage}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.ath_date ? (
              <p>
                ATH_DATE :{" "}
                <span className="show__data">{display.ath_date}</span>{" "}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.atl ? (
              <p>
                ATL : <span className="show__data"> {display.atl}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.atl_change_percentage ? (
              <p>
                ATL_CHANGE_PERCENTAGE :{" "}
                <span className="show__data">
                  {display.atl_change_percentage}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.atl_date ? (
              <p>
                ATL_DATE :{" "}
                <span className="show__data">{display.atl_date}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.circulating_supply ? (
              <p>
                CIRCULATING_SUPPLY :{" "}
                <span className="show__data">{display.circulating_supply}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.current_price ? (
              <p>
                CURRENT_PRICE :{" "}
                <span className="show__data">{display.current_price}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.fully_diluted_valuation ? (
              <p>
                FULLY_DILUTED_VALUATION :{" "}
                <span className="show__data">
                  {display.fully_diluted_valuation}
                </span>{" "}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.high_24h ? (
              <p>
                HIGH_24H :{" "}
                <span className="show__data">{display.high_24h}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.last_updated ? (
              <p>
                LAST_UPDATED :{" "}
                <span className="show__data">{display.last_updated}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.low_24h ? (
              <p>
                LOW_24H : <span className="show__data">{display.low_24h}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.market_cap ? (
              <p>
                MARKET_CAP :{" "}
                <span className="show__data">{display.market_cap}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.market_cap_change_24h ? (
              <p>
                MARKET_CAP_CHANGE_24H :{" "}
                <span className="show__data">
                  {display.market_cap_change_24h}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.market_cap_change_percentage_24h ? (
              <p>
                MARKET_CAP_CHANGE_PERCENTAGE_24H :{" "}
                <span className="show__data">
                  {display.market_cap_change_percentage_24h}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.market_cap_rank ? (
              <p>
                MARKET_CAP_RANK :{" "}
                <span className="show__data">{display.market_cap_rank}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.max_supply ? (
              <p>
                MAX_SUPPLY :{" "}
                <span className="show__data">{display.max_supply}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.price_change_24h ? (
              <p>
                PRICE_CHANGE_24H :{" "}
                <span className="show__data">{display.price_change_24h}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.price_change_percentage_24h ? (
              <p>
                PRICE_CHANGE_PERCENTAGE_24H :{" "}
                <span className="show__data">
                  {display.price_change_percentage_24h}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.roi ? (
              <div>
                <div>
                  ROI_CURRENCY :{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#fff",
                      fontWeight: 700,
                      marginLeft: "0.2em",
                    }}
                  >
                    {display.roi.currency}
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "1em",
                  }}
                >
                  ROI_PERCENTAGE :{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#fff",
                      fontWeight: 700,
                      marginLeft: "0.2em",
                    }}
                  >
                    {" "}
                    {display.roi.percentage}
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "1em",
                  }}
                >
                  ROI_TIMES :{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      color: "#fff",
                      fontWeight: 700,
                      marginLeft: "0.2em",
                    }}
                  >
                    {display.roi.times}
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.total_supply ? (
              <p>
                TOTAL_SUPPLY :{" "}
                <span className="show__data">{display.total_supply}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {display.total_volume ? (
              <p>
                TOTAL_VOLUME :{" "}
                <span className="show__data">{display.total_volume}</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      }
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "#fff", color: "#000" }}
      />
    </div>
  );
}

export default Cryptocurrency;
