import React, { useState, useEffect } from "react";
import cors from "cors";

const Table2 = () => {
  const [searchres2, setsearchres2] = useState([]);
  const [search2, setsearch2] = useState([]);
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const form2 = document.getElementById("form2");
    const display2 = document.getElementById("display2");
    const { search } = form2;
    if (search.value === "") {
      display2.innerText = "Must fill in search input before search!";
      return;
    }
    fetch(`/search/${search.value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsearch2(data);
      })
      .catch((err) => {
        display.innerText = err.message;
      });
  };
  const handleClick2 = (e) => {
    // e.preventDefault();
    const detail = e.target.parentElement.children.detail.value;
    setsearch2([]);
    fetch(`/device/${detail}`)
      .then((res) => res.json())
      .then((data) => {
        setsearchres2(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table2">
      {console.log(searchres2)}
      <form id="form2" onSubmit={handleSubmit2}>
        <input
          className="searchtext"
          placeholder="Search for a phone"
          type={"text"}
          name={"search"}
        />
        <button className="searchbtn">Search</button>
        <pre id="display2"></pre>
      </form>
      <div>
        {search2.map((phone, i) => {
          {
            if (i > 10) return;
          }
          return (
            <div className="searchres" key={i} onClick={handleClick2}>
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
        {searchres2 < 1 ? (
          <div></div>
        ) : (
          <div>
            <h3>{searchres2.title}</h3>
            <img src={searchres2.img} alt="phone img" />
            <table>
              {searchres2.spec_detail.map((specificationss, i, j) => {
                return searchres2.spec_detail[i].specs.map((specss, k) => {
                  return (
                    <tr>
                      {
                        (specss[k] = specss[0] ? (
                          <>
                            <th
                              rowSpan={`${searchres2.spec_detail[i].specs.length}`}
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
