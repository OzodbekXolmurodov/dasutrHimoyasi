import React, { useEffect, useState } from "react";
import "./Prodacts.scss";
import axios from "axios";

const bas__url = "https://6740433cd0b59228b7ef4b51.mockapi.io";
const Prodacts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${bas__url}/products`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally();
  }, []);
  console.log(data);
  const prodactsItm = data?.map((pro) => (
    <div className="prodacts__main" key={pro.id}>
      <img className="prodacts__img" src={pro.url} alt="" />
      <h3 className="prodacts__h3">{pro.tatle}</h3>
      <div className="prodacts__div">
        <div>
          <del className="prodacts__p">{pro.price}</del>
          <p className="prodacts__p3">{pro.decprice}₽</p>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="conteaner">
        <div className="prodacts">{prodactsItm}</div>
      </div>
    </>
  );
};

export default Prodacts;
