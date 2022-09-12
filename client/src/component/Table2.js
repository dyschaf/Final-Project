import React, { useState, useEffect } from "react";
import cors from "cors";

const Table2 = () => {
  const [searchres, setsearchres] = useState([]);
  const [search, setsearch] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const display = document.getElementById("display");
    const { search } = form;
    if (search.value === "") {
      display.innerText = "Must fill in search input before search!";
      return;
    }
    fetch(`/search/${search.value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsearch(data);
      })
      .catch((err) => {
        console.log(err);
        display.innerText = err.message;
      });
  };
  const handleClick = (e) => {
    // e.preventDefault();
    const detail = e.target.parentElement.children.detail.value;
    setsearch([]);
    fetch(`/device/${detail}`)
      .then((res) => res.json())
      .then((data) => {
        setsearchres(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table2">
      {console.log(searchres)}
      <form id="form" onSubmit={handleSubmit}>
        <input
          className="searchtext"
          placeholder="Search for a phone"
          type={"text"}
          name={"search"}
        />
        <button className="searchbtn">Search</button>
        <pre id="display"></pre>
      </form>
      <div>
        {search.map((phone, i) => {
          {
            if (i > 10) return;
          }
          return (
            <div className="searchres" key={i} onClick={handleClick}>
              <h3>{phone.name}</h3>
              <img src={phone.img} alt="phone img" />
              <input
                type={"hidden"}
                id={"detail"}
                name={"detail"}
                value={phone.url}
              />
            </div>
          );
        })}
      </div>
      <div>
        {searchres < 1 ? (
          <div></div>
        ) : (
          <div>
            <h3>{searchres.title}</h3>
            <img src={searchres.img} alt="phone img" />
            <table>
              {searchres.spec_detail.map((specificationss, i, j) => {
                return searchres.spec_detail[i].specs.map((specss, k) => {
                  return (
                    <tr>
                      {
                        (specss[k] = specss[0] ? (
                          <>
                            <th
                              rowSpan={`${searchres.spec_detail[i].specs.length}`}
                              scope={"row"}
                            >
                              {specificationss.category}
                            </th>
                            <td className="key">{specss.name}</td>
                            <td className="val">{specss.value}</td>
                          </>
                        ) : (
                          <>
                            <td className="key">{specss.name}</td>
                            <td className="val">{specss.value}</td>
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
