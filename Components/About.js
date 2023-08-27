import User from "./user";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is about us page</h1>
      {/* <User name = {"Shruti...." }location = {"Delhi .. "} /> */}
      <UserClass name = {"Shruti..  "} location = {"Delhi .. "}  />
    </div>
  );
};

export default About;