import React from "react";
import { useState } from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import DemoUseEffect from "./pages/DemoUseEffect";
import DemoUseCallBack from "./pages/DemoUseCallBack";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  // useState dùng để khởi tạo state trong component functional
  // setState sử dụng cơ chế replace chứ không phải merge
  // useState là hàm bất đồng bộ
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [like, setLike] = useState(1);
  const [person, setPerson] = useState({ name: "Hậu", age: 26 });
  const [listProducts, setListProducts] = useState([{}]);

  const handleClickCount = () => {
    setCount(count + 1);
  };

  // return (
  //   <div className="container">
  //     {/* <HomePage />
  //     <p>Count : {count}</p>
  //     <button className="btn btn-success" onClick={handleClickCount}>
  //       Increase
  //     </button> */}
  //     {/* <DemoUseEffect /> */}
  //     <DemoUseCallBack />
  //   </div>
  // );
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <p>Footer</p>
    </>
  );
}

export default App;
