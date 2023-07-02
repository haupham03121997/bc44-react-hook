// Cú pháp : rfc dùng để tạo 1 function trong component nhanh

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TOKEN_CYBERSOFT } from "../../constants";

import { Card, Row, Col, Button, Skeleton, Avatar } from "antd";
import SkeltonListMovie from "../../components/SkeletonListMovie";
import useFetchListMovie from "../../hooks/useFetchListMovie";
import useStickyState from "../../hooks/useStickyState";
const { Meta } = Card;

export default function Home() {
  /**
   * Rule hooks
   * - sử dụng trong function component
   * - Đinh nghĩa trên top level
   * - Không được gọi hook trong vòng lặp , điều kiện (if, else...) , hàm con
   *
   */

  const navigate = useNavigate();
  const { data: listMovie, isLoading, error } = useFetchListMovie();
  const { value, setValue } = useStickyState("green", "persisted-color");
  // console.log("value", value);
  // redux toolkit
  // call api sau render, và 1 lần duy nhất
  // useEffect(() => {
  //   // call api
  //   setIsLoading(true);
  //   axios
  //     .get(
  //       "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
  //       {
  //         headers: {
  //           // key: value
  //           TokenCybersoft: TOKEN_CYBERSOFT,
  //         },
  //       }
  //     )
  //     .then((result) => {
  //       // console.log("result", result.data);
  //       setListMovie(result.data.content);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div className="container">
      <h1>Danh sách Phim</h1>
      <Button type="primary" onClick={() => setValue("red")}>
        Change color
      </Button>
      {isLoading && <SkeltonListMovie />}
      <Row gutter={[32, 32]}>
        {!isLoading &&
          listMovie.map((item) => {
            return (
              <Col span={6} key={item.maPhim}>
                <Card
                  hoverable
                  cover={
                    <div style={{ height: 300 }}>
                      <img
                        alt="example"
                        src={item.hinhAnh}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  }
                  actions={[
                    <Button
                      onClick={() => navigate(`/list-movie/${item.maPhim}`)}
                    >
                      View Detail
                    </Button>,
                    <Button type="primary">Booking</Button>,
                  ]}
                >
                  <Meta
                    title={item.tenPhim}
                    description={<div>{item.moTa.slice(0, 25)}</div>}
                  />
                </Card>
              </Col>
              // <div className="col-3" key={item.maPhim}>
              //   <div className="card">
              //     <img
              //       src={item.hinhAnh}
              //       width="100%"
              //       height={300}
              //       style={{ objectFit: "cover" }}
              //     />
              //     <div className="card-body">
              //       <p>Tên Phim:{item.tenPhim}</p>
              //       <button
              //         onClick={() => {
              //           navigate(`/list-movie/${item.maPhim}`);
              //         }}
              //         className="btn btn-success"
              //       >
              //         Xem Chi Tiết
              //       </button>
              //     </div>
              //   </div>
              // </div>
            );
          })}
      </Row>
    </div>
  );
}
