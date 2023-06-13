import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>hello react using jsx</h1>;
// functional component

const Title = () => <h1>hello react using arrow function</h1>;

const data = 100;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {data}
    <h1>hello from functional component</h1>
    {DemoComponent()}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

const DemoComponent = () => (
  <>
    <div id="container1">
      <h1>hello from demo1</h1>
    </div>
    <div id="container2">
      <h1>hello from demo2</h1>
    </div>
    <>
      <div id="container3">
        <h1>hello from demo1</h1>
      </div>
      <div id="container4">
        <h1>hello from demo2</h1>
      </div>
    </>
  </>
);
