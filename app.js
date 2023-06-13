import React from "react";
import ReactDOM from "react-dom/client";


//const jsxHeading = <h1>hello react using jsx</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
// functional component


const Title = () => <h1>hello react using arrow function</h1>;


const HeadingComponent = () => (
    <div id = "container">
        <Title />
        <h1>hello from frunctional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);