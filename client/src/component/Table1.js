import React, { useState, useEffect } from "react";
import cors from "cors";

const Table1 = () => {
  const [searchres1, setsearchres1] = useState([]);
  const [search1, setsearch1] = useState([]);
  const handleSubmit1 = (e) => {
    e.preventDefault();
    const form1 = document.getElementById("form1");
    const display1 = document.getElementById("display1");
    const { search } = form1;
    if (search.value === "") {
      display1.innerText = "Must fill in search input before search!";
      return;
    }
    fetch(`/search/${search.value}`)
      .then((res) => res.json())
      .then((data) => {
        setsearch1(data);
      })
      .catch((err) => {
        console.log(err);
        display1.innerText = err.message;
      });
  };
  const handleClick1 = (e) => {
    // e.preventDefault();
    const detail = e.target.parentElement.children.detail.value;
    setsearch1([]);
    fetch(`/device/${detail}`)
      .then((res) => res.json())
      .then((data) => {
        setsearchres1(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table1">
      <form id="form1" onSubmit={handleSubmit1}>
        <input
          className="searchtext"
          placeholder="Search for a phone"
          type={"text"}
          name={"search"}
        />
        <button className="searchbtn">Search</button>
        <pre id="display1"></pre>
      </form>
      <div>
        {search1.map((phone, i) => {
          {
            if (i > 10) return;
          }
          return (
            <div className="searchres" key={i} onClick={handleClick1}>
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
        {searchres1 < 1 ? (
          <div></div>
        ) : (
          <div>
            <h3>{searchres1.title}</h3>
            <img src={searchres1.img} alt="phone img" />
            <table>
              {searchres1.spec_detail.map((specificationss, i, j) => {
                return searchres1.spec_detail[i].specs.map((specss, k) => {
                  return (
                    <tr>
                      {
                        (specss[k] = specss[0] ? (
                          <>
                            <th
                              rowSpan={`${searchres1.spec_detail[i].specs.length}`}
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

export default Table1;
