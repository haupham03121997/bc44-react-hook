import React, { useEffect, useState } from "react";

export default function DemoUseEffect() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  // useEffect nhận vào 2 tham số : 1. callback function, 2: dependencies
  //   useEffect(() => {}, [dependencies]);
  // componentDidMount, componentDidUpdate, componentWillUnmount

  // TH1: sử dụng 1 tham số là callback và không có deps
  // Đại diện cho componentDidUpdate. Effect function sẽ chạy lại mỗi khi component render
  //   useEffect(() => {
  //     if (count < 10) {
  //       //   console.log("useEffect");
  //       setCount(count + 1);
  //     }
  //   });

  // TH2: sử dụng 2 tham số: 1 - callback function, 2: []
  // Đại diện cho componentDidMount. Effect function sẽ chạy 1 lần đầu tiên sau render
  useEffect(() => {
    // call api
    console.log("useEffect có deps rỗng");
  }, []);

  // Th3: Sử dụng 2 tham số : 1 callback funtion, 2 : [value1 , value2]
  // Đại diện cho componentDidMount, nhưng bonus thêm là sự phụ thuộc vào giá trị trong deps
  useEffect(() => {
    console.log("useEffect có giá trị trong deps");
  }, [count]);

  // Th4: Sử dụng 2 tham số : 1 callback funtion, 2 : [] nhưng trong callback function sẽ có return
  // Đại diện cho componentWillUnMount, dùng để clear: interval, events , api...
  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      //   console.log("useEffect unmount");
      // remove sự kiện, cancel api
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container" style={{ minHeight: "200vh" }}>
      DemoUseEffect
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Increase
      </button>
      <button onClick={() => setLike(!like)} className="btn btn-primary">
        Increase Like
      </button>
      <p>Height: {scrollHeight}</p>
    </div>
  );
}
