import UserFunction from "./UserFunction";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is about us page</h1>
      {/* <UserFunction name = {"Shruti......    " }location = {"Delhi"} /> */}
      <UserClass name = {"Shruti..  "} location = {"Delhi .. "}  />
    </div>
  );
};

export default About;