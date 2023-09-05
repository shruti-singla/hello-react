import { useState } from "react";

const UserFunction = ({ name }) => {
  const [count] = useState(2);

  return (
    <div className="user-class">
      <h1>count : {count}</h1>
      <h2>name :{name}</h2>
      <h2>location :Delhi....</h2>
      <h2>contactinfo : @shruti-singla</h2>
    </div>
  );
};

export default UserFunction;
