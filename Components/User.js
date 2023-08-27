import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  return (
    <div className="user-class">
      <h1>count : {count}</h1>
      <h2>name :{name}</h2>
      <h2>location :Delhi</h2>
      <h2>contactinfo : @shruti-singla</h2>
    </div>
  );
};

export default User;
