import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

export default function DemoUseCallBack() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  //   const [, setPerson] = useState({ name: "Nguỹen Văn A", age: 18 });

  // useMemo: nhận vào 2 tham số: 1 : function , 2: deps => return về giá trị
  const person = useMemo(() => {
    return { name: "Nguỹen Văn A", age: 18 };
  }, []);

  //   const callApi = () => {
  //     //call api
  //   };
  // useCallback: nhận vào 2 tham số: 1 : function , 2: deps =>return về hàm
  //   const getDetailChild = useCallback((id) => {
  //     // callApi();
  //   }, []);
  const getDetailChild = useCallback((id) => {
    console.log(id);
  }, []);

  return (
    <div>
      DemoUseCallBack
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <button className="btn btn-success" onClick={() => setLike(!like)}>
        Click Like
      </button>
      <Child count={count} getDetailChild={getDetailChild} person={person} />
    </div>
  );
}
