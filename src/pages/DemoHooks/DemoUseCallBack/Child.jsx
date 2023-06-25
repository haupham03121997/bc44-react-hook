import React, { memo } from "react";

// export default function Child(props) {
//   console.log("Child Render", props);
//   return <div>Child</div>;
// }

// memo nó sẽ kiểm tra props cũ với props mới có thay đổi hay không để dựa và đó render lại component.
// memo nhận vào 2 tham số : 1 -  component , 2 - là 1 function có 2 tham số (prevProps , newProps)
// memo sử dụng cơ chế sallow compare( sử dụng === )

const Child = (props) => {
  console.log("Child Render", props);
  return (
    <div>
      Child
      <button onClick={() => props.getDetailChild("aaa")}></button>
    </div>
  );
};

export default memo(Child);
