const heading = React.createElement("h1", { id: "head" }, "hello");
console.log(heading);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
