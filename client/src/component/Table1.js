// import React from "react";
import React, { useState, useEffect } from "react";
import SearchRes from "./SearchRes";

var cors = require("cors");

cors();

const Table1 = () => {
  const [searchres, setsearchres] = useState([]);
  const [search, setsearch] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.phone1.value);
    // if (e.target.parentElement[0].value > 3) {
    //   console.log(e.target);
    const options = {
      method: "get",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "X-BLOBR-KEY": "17BFH0yvMcNu9ONOkkDy9MvnHdLklICX",
      },
      body: JSON.stringify({ category: "string" }),
    };
    fetch(
      `http://api-mobilespecs.azharimm.site/v2/search?query= ${e.target.phone1.value}`
      //   { method: "get", mode: "no-cors" }
      //   options
    )
      .then((res) => res.json())
      .then((data) => {
        setsearch(data.data.phones);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const handleClick = (e) => {
    setsearch([]);
    fetch(e.target.parentNode.children.detail.value)
      .then((res) => res.json())
      .then((data) => {
        setsearchres(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table1">
      {console.log(searchres)}
      <form onSubmit={handleSubmit}>
        <input type={"text"} name={"phone1"} />
        <button className="btn">Search</button>
      </form>
      <div>
        {search.map((phone, i) => {
          return (
            <div className="searchres" key={i} onClick={handleClick}>
              <h3 key={i}>{phone.phone_name}</h3>,
              <img key={i} src={phone.image} alt="phone img" />
              <input type={"hidden"} name={"detail"} value={phone.detail} />
            </div>
          );
        })}
      </div>
      <div>
        {searchres < 1 ? (
          <div></div>
        ) : (
          <div>
            <h3>{searchres.phone_name}</h3>
            <img src={searchres.thumbnail} alt="phone img" />
            <p>Brand: {searchres.brand}</p>
            <p>Size: {searchres.dimension}</p>
            <p>OS: {searchres.os}</p>
            <p>Release Date: {searchres.release_date}</p>
            <p>Storage: {searchres.storage}</p>
            <table>
              {console.log(searchres)}
              {searchres.specifications.map((specificationss, i, j) => {
                return (
                  <tbody>
                    <tr>
                      <th>{specificationss.title}</th>
                      {searchres.specifications[i].specs.map((specss, k) => {
                        console.log(specss);
                        return (
                          <>
                            <td className="key">{specss.key}</td>
                            <td className="val">{specss.val}</td>
                          </>
                        );
                      })}
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table1;
