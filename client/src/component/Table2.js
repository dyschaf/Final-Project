// import React from "react";
import React, { useState, useEffect } from "react";
import SearchRes from "./SearchRes";

// import cors from "cors";
var cors = require("cors");
// const axios = require("axios");((
cors();
// router.use(cors());
const Table2 = () => {
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
      `https://gsmarena-api.herokuapp.com/search/ ${e.target.phone1.value}`
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
    <div
      className="table2"
      // className="tables-container"
    >
      {console.log(searchres)}
      <form onSubmit={handleSubmit}>
        <input
          className="searchtext"
          placeholder="Search for a phone"
          type={"text"}
          name={"phone1"}
        />
        <button className="searchbtn">Search</button>
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
                return searchres.specifications[i].specs.map((specss, k) => {
                  console.log(specss);
                  return (
                    <tr>
                      {
                        (specss[k] = specss[0] ? (
                          <>
                            {console.log(
                              searchres.specifications[i].specs.length
                            )}
                            <th
                              rowSpan={`${searchres.specifications[i].specs.length}`}
                              scope={"row"}
                            >
                              {specificationss.title}
                            </th>

                            <td className="key">{specss.key}</td>
                            <td className="val">{specss.val}</td>
                          </>
                        ) : (
                          <>
                            <td className="key">{specss.key}</td>
                            <td className="val">{specss.val}</td>
                          </>
                        ))
                      }
                    </tr>
                  );
                });
              })}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table2;
