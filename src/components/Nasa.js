/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Nasa.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Nasa() {
  const [data, setData] = useState([]);
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=yJyoKl8OFDDjphOb8Rhh3urwHdUvKN7k4gBmQTcL"
      )
      .then((result) => {
        const { data } = result;
        setData(data);
        console.log(data);
        toast("Success");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Sorry failed to fetch data");
      });
  }, []);
  return (
    <div>
      <div className="show__container">
        <h1>{data.title ? data.title : "None"}</h1>
        <p> Name : {data.copyright ? data.copyright : "None"}</p>
        <p>Date : {data.date ? data.date : "None"}</p>
        <p>Version : {data.service_version ? data.service_version : "None"}</p>
        <h2>Description</h2>
        <p>{data.explanation ? data.explanation : "None"}</p>
        <img src={data.hdurl} alt="image"/>
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

export default Nasa;
