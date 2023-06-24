// Cú pháp : rfc dùng để tạo 1 function trong component nhanh

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TOKEN_CYBERSOFT } from "../../constants";

export default function Home() {
  const [listMovie, setListMovie] = useState([]);
  const navigate = useNavigate();

  // redux toolkit
  // call api sau render, và 1 lần duy nhất
  useEffect(() => {
    // call api
    axios
      .get(
        "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
        {
          headers: {
            // key: value
            TokenCybersoft: TOKEN_CYBERSOFT,
          },
        }
      )
      .then((result) => {
        // console.log("result", result.data);
        setListMovie(result.data.content);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Danh sách Phim</h1>
      <div className="row">
        {listMovie.map((item) => {
          return (
            <div className="col-3" key={item.maPhim}>
              <div className="card">
                <img
                  src={item.hinhAnh}
                  width="100%"
                  height={300}
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                  <p>Tên Phim:{item.tenPhim}</p>
                  <button
                    onClick={() => {
                      navigate(`/list-movie/${item.maPhim}`);
                    }}
                    className="btn btn-success"
                  >
                    Xem Chi Tiết
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
