import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../CartUtility/Cart";
import NavBar from "../NavBar/NavBar";
import "./Products.css";

function Products() {

  // setting state for various functionality

  let [data, setdata] = useState([]);
  const [currCategory, setCurrCategory] = useState("");
  const [currCategoryName, setCurrCategoryName] = useState("");
  const [page, setpage] = useState(0);
  const [cart, setcart] = useState([]);
  const [showCart, setShowCar] = useState(false);



  const productApiCall = async () => {

    // except using useparams try new technique for url parameter

    let query = new URLSearchParams(window.location.search);
    let id = query.get("categoryId");
    let name = query.get("name");

    setCurrCategory(id);
    setCurrCategoryName(name);

    try {

      // fatching data with the help of axios and setting pagination also 
      
      let url = `https://api.escuelajs.co/api/v1/categories/${id}/products?offset=${page}&limit=10`
      let { data } = await axios(url);
      console.log(data)
      setdata(data);

    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    productApiCall();
  }, []);


  const nextClick = () => {
    setpage(page + 10);
    productApiCall();
  };

  const prevClick = () => {
    setpage(page - 10);
    productApiCall();
  };

  // adding cart functionalty 

  const handleClick = (da) => {
    let find = cart.find((e) => {
      return e.id === da.id;
    });
    if (find) {
      alert("already added in cart");
    } else {
      setcart([...cart, { ...da, quantity: 1 }]);
    }
  };


  return (
    <div>
      <NavBar count={cart.length} setshowcart={setShowCar} />
      {showCart ? (
        <Cart cart={cart} />      // aditional component for cart
      ) : (
        <div className="Products">
          <div className="container">
            <h1>{currCategory ? currCategoryName : "All Product"}</h1>
            <div className="product-card">
              <div className="row">
                {data &&
                  data.map((element) => {
                    return (
                      <div className="col-md-4 my-2" key={element.id}>
                        <div className="card" style={{ width: "18rem" }}>
                          <img
                            src={element.images}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text">
                              <i className="fa-solid fa-dollar-sign"></i>
                              {element.price}
                            </p>
                            <p className="card-text">
                              {element.description.slice(0, 100)}
                            </p>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                handleClick(element);
                              }}
                            >
                              AddToCart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="buttons">
                <button
                  className="PreviousBtn btn-primary"
                  onClick={prevClick}
                  disabled={page <= 1}
                >
              
                  &larr;previous
                </button>
                <button
                  className="NextBtn btn-primary"
                  onClick={nextClick}
                  disabled={data.length === 0}
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
