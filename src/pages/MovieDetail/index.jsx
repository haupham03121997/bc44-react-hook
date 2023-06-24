import React, { useEffect, useState } from "react";
import { parsePath, useParams } from "react-router-dom";
import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../constants";

export default function MovieDetail() {
  // lấy id từ url
  const { id } = useParams();
  // {id : 11771}

  const [movie, setMovie] = useState({});

  // call api lấy chi tiết phim
  useEffect(() => {
    if (id) {
      axios
        .get(
          `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
          {
            headers: {
              TokenCybersoft: TOKEN_CYBERSOFT,
            },
          }
        )
        .then((result) => {
          console.log("result", result);
          setMovie(result.data.content);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [id]);
  console.log("movie", movie);

  return <div>Tên Phim : {movie.tenPhim}</div>;
}
