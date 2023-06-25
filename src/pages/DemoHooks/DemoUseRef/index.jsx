import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";

export default function DemoUseRef() {
  /**
   * useRef: dùng để lưu giá trị giống useState sau mỗi lần component render, tuy nhiên nhiên nó sẽ không làm ui thay đổi khi ref thay đổi
   */

  // const [userLogin, setUserLogin] = useState({
  //   username: "",
  //   password: "",
  // });

  const { listMessage } = useSelector((state) => state.appChat);
  // console.log("states", listMessage);

  const userLoginRef = useRef({
    username: "",
    password: "",
  });

  const usernameRef = useRef(null);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    userLoginRef.current[name] = value;
    // setUserLogin({ ...userLogin, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("userLoginRef", userLoginRef);
  };

  console.log("userLogin");

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  return (
    <div className="container">
      DemoUseRef
      <input ref={usernameRef} />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="username"
          name="username"
          onChange={handleOnchange}
        />
        <input
          className="form-control"
          placeholder="password"
          name="password"
          onChange={handleOnchange}
        />
        <button className="btn btn-success">Login</button>
      </form>
      <Button type="dashed" size="large">Dashed Button</Button>
    </div>
  );
}
