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

  //   <div>
  //   {search.data.phones.map((data, i) => (

  //         {console.log(data)}
  //         <div>
  //           key={i}
  //           data={search.data.phones}
  //           img={search.data.phones.image}
  //           <h1>device={search.data.phones.phone_name}</h1>
  //         </div>
  //       </div>
  //     ));
  //     // }

  //     //   return;
  const handleClick = (e) => {
    setsearch([]);
    console.log(e.target.parentNode.children.detail.value);
    // if (props.phones.detail.length > 0) {
    fetch(e.target.parentNode.children.detail.value)
      .then((res) => res.json())
      //   .then((res) => console.log(res))
      .then((data) => {
        setsearchres(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
    // remove(e.target.parentNode.children);
    //   .then(console.log(searchres));
    // console.log(data);
    // return data.map((data, i) => <Specs key={i} data={data} />);
  };

  return (
    <div>
      {console.log(searchres)}
      <form onSubmit={handleSubmit}>
        <input type={"text"} name={"phone1"} />
        <input type={"submit"} />
      </form>
      {/* <SearchRes search={search} /> */}
      <div>
        {// !searchres < 1?
        search.map((phone, i) => {
          return (
            // !searchres ?
            <div key={i} onClick={handleClick}>
              {/* {console.log(search)} */}
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
            {console.log()}
            {/* {console.log(search)} */}
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
                {
                  j[i].specs.map((specss, k) => {
                    {
                      j[i].specs[k].val.map((vall, l) => {
                        // console.log(specificationss.title);
                        // console.log(i);
                        // console.log(j);
                        // console.log(k);
                        // console.log(k);
                        console.log(
                          searchres.specifications[i].specs[k].val[l]
                        );
                        console.log(j[i].title); //specifications[0].title
                        console.log(j[i].specs[k].key); //specifications[4].specs[4].key
                        console.log(j[i].specs[k].val[l]); //specifications[4].specs[0].val[0]
                        return (
                          <tbody>
                            <tr>
                              {console.log("test")}
                              <th>hi</th>
                              {/* <td>{j[i].specs[k].key}</td> */}
                              {/* <td>{j[i].specs[k].val[l]}</td> */}
                            </tr>
                          </tbody>
                        );
                      });
                    }
                  });
                }
              })}
            </table>
          </div>
        )}
        {/* // :<div>hi</div> */}
      </div>
    </div>
  );
};

export default Table2;
