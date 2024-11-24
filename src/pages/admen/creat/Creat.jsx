import React, { useRef } from "react";
import "./Creat.scss";
import axios from "axios";

const Creat = () => {
  const tatle = useRef(null);
  const url = useRef(null);

  const creatProdacts = (e) => {
    e.preventDefault();
    let newProdacts = {
      tatle: tatle.current.value,
      url: url.current.value,
      price: 1300,
      decprice: 1000,
    };
    console.log(newProdacts);
    axios
      .post("https://6740433cd0b59228b7ef4b51.mockapi.io/products", newProdacts)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2 className="creat__h2">Creat Prodaucts</h2>
      <form onSubmit={creatProdacts} action="">
        <input
          ref={tatle}
          className="creat__input"
          placeholder="title"
          type="text"
        />
        <input
          ref={url}
          className="creat__input"
          placeholder="price"
          type="text"
        />
        <button className="creat__btn">creat</button>
      </form>
    </>
  );
};

export default Creat;
