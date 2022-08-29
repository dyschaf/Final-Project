// import React from "react";
import React, { useState, useEffect } from "react";
import SearchRes from "./SearchRes";

// import cors from "cors";
var cors = require("cors");
// const axios = require("axios");((
cors();
// router.use(cors());
const Table2 = () => {
  const [search, setsearch] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.parentElement[0].value);
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
    const response = await fetch(
      `https://api-mobilespecs.azharimm.site/v2/search?query= ${e.target.parentElement[0].value}`
      //   options
    );
    const searchresponce = await response.json();
    await setsearch(searchresponce);
    console.log(searchresponce);
    console.log(search);
    return await search.map((data, i) => (
      <div>
        <div>
          key={i}
          data={data}
          img={data.phones.image}
          <h1>device={data.phones.phone_name}</h1>
        </div>
      </div>
    ));
    // }

    //   return;
  };
  return (
    <div>
      <form onClick={handleSubmit}>
        <input type={"text"} name={"phone1"} />
        <input type={"submit"} />
      </form>
    </div>
  );
};
export default Table2;
