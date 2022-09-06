import React, { useState, useEffect } from "react";
import Specs from "react";
const SearchRes = (props) => {
  const [searchres, setsearchres] = useState([]);
  const [search, setsearch] = useState([]);
  console.log("search state" + search);
  const handleClick = async () => {
    // if (props.phones.detail.length > 0) {
    const response = await fetch(
      "http://api-mobilespecs.azharimm.site/v2/apple_iphone_x-8858"
    );
    const data = await response.json();
    setsearchres(data);
    console.log(data);
    return data.map((data, i) => <Specs key={i} data={data} />);
  };

  return (
    <>
      {console.log()}
      {props.map((search, i) => {
        return (
          <div key={i + 20} onClick={handleClick()}>
            <h3>{props.phone_name}</h3>
            <img src={props.image} alt="phone img" />
          </div>
        );
      })}
    </>
  );
};
export default SearchRes;
