import React from "react";
import ReactDOM from "react-dom/client"

const HeadingComponent = () => <h1>Hello</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)