/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";
import Star from "./util/Star";
function Product() {
  const [datas, setDatas] = useState([]);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    axios
      .get("https://fakestoreapi.com/products")
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
  }, []);

  return (
    <div>
      <div className="product__container">
        {datas.map((data) => (
          <div className="product__card" key={data.id}>
            <h3>{data.title}</h3>
            <img src={data.image} alt="image" className="product__image" />
            <p
              style={{
                color: "#fff",
                fontSize:"12px",
                lineHeight:"20px"
              }}
            >
              {data.description}
            </p>
            <h5>{data.category}</h5>
            <h2
              style={{
                fontWeight:700
              }}
            >
              $ {data.price}
            </h2>
            <Star reviews={data.rating.count} rating={data.rating.rate} />
          </div>
        ))}
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

export default Product;
