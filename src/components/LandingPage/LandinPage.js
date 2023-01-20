import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./LandingPage.css";
import { Link } from "react-router-dom";
// import get

function LandinPage({setshowcart}) {
  const [data, setdata] = useState([]);

  const apiCall = async () => {
    try {
      let url = "https://api.escuelajs.co/api/v1/categories";
      let { data } = await axios.get(url);
      console.log(data);
      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <NavBar setshowcart={setshowcart}/>
      <div className="LandinfPage">
        <h1 className="LandingHeader">Welcome To SEE&BUY</h1>
        <div className="container-fluid">
          <div className="row">
            {data &&
              data.map((element) => {
                return (
                  <div className="col-md-2 cate-box" key={element.id}>
                    <div className="category-item">
                      <img
                        className="category-img"
                        src={element.image}
                        alt="Category-Image"
                      />
                      <Link
                        to={`/products?categoryId=${element.id}&name=${element.name}`}
                        className="title-name"
                      >
                        {element.name}
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandinPage;
