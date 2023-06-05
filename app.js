const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "heading1" }, [
    React.createElement("h1", { id: "heading2" }, "im h1"),
    React.createElement("h2", { id: "heading3" }, "im h2"),
  ]),
  React.createElement("div", { id: "heading1" }, [
    React.createElement("h1", { id: "heading2" }, "im h1"),
    React.createElement("h2", { id: "heading3" }, "im h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root1"));

root.render(heading);
