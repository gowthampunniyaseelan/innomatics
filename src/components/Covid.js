import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Covid.css";
function Covid() {
  const [datas, setDatas] = useState([]);
  const [display, setDisplay] = useState([]);
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((result) => {
        const { data } = result;
        setDatas(data.data.regional);
        console.log(data.data.regional);
        toast("Success");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Sorry failed to fetch data");
      });
    const card = document.querySelector(".show__covid__cards");
    card.style.display = "none";
  }, []);

  function showData(e, index) {
    e.preventDefault();
    const temp = datas[index];
    setDisplay(temp);
    const card = document.querySelector(".show__covid__cards");
    card.style.display = "flex";
  }
  return (
    <div className="covid__container">
      <div className="covid__side__navbar">
        <h2 className="title">Covid Dashboard</h2>
        {datas.map((data, index) => (
          <div
            className={data.loc === display.loc ? "activecard" : "covid__card"}
            onClick={(e) => showData(e, index)}
          >
            <p>{data.loc}</p>
          </div>
        ))}
      </div>
      <div className="show__covid__cards">
        <div className="show__covid__card">
          <h5
            style={{
              color: "grey",
            }}
          >
            NAME
          </h5>
          <h2
            style={{
              color: "#fff",
            }}
          >
            {display.loc}
          </h2>
        </div>
        <div className="show__covid__card">
          <h5
            style={{
              color: "grey",
            }}
          >
            CONFIRMEDCASESFOREIGN
          </h5>
          <h2
            style={{
              color: "orange",
            }}
          >
            {display.confirmedCasesForeign}
          </h2>
        </div>
        <div className="show__covid__card">
          <h5
            style={{
              color: "grey",
            }}
          >
            CONFIRMEDCASESINDIAN
          </h5>
          <h2
            style={{
              color: "orange",
            }}
          >
            {display.confirmedCasesIndian}
          </h2>
        </div>
        <div className="show__covid__card">
          <h5
            style={{
              color: "grey",
            }}
          >
            DEATHS
          </h5>
          <h2
            style={{
              color: "red",
            }}
          >
            {display.deaths}
          </h2>
        </div>
        <div className="show__covid__card">
          <h5
            style={{
              color: "grey",
            }}
          >
            DISCHARGED
          </h5>
          <h2
            style={{
              color: "green",
            }}
          >
            {display.discharged}
          </h2>
        </div>
        <div className="show__covid__card">
          <h5
            style={{
              color: "grey",
            }}
          >
            TOTALCONFIRMED
          </h5>
          <h2
            style={{
              color: "orange",
            }}
          >
            {display.totalConfirmed}
          </h2>
        </div>
      </div>

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

export default Covid;
