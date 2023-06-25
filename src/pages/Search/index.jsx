import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../constants";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    if (searchParams.get("q")) {
      // call api search
      // console.log("searchParams", searchParams.get("q"));
      let searchValue = searchParams.get("q");
      //` https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02&tenPhim=${searchValue}`
      axios
        .get(
          ` https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02&tenPhim=${searchValue}`,
          {
            headers: {
              TokenCyberSoft: TOKEN_CYBERSOFT,
            },
          }
        )
        .then((result) => {
          console.log("result", result);
          // setListMovies
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [searchParams]);

  const handleChangePage = () => {
    // searchParams: { q : a}
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <div>
      Search
      <button className="btn btn-success" onClick={handleChangePage}>
        Click Page
      </button>
    </div>
  );
}
