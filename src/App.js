import { Fragment } from "react";
import Home from "./component/Home";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <Fragment>
      <Sidebar />
      <Home />
    </Fragment>
  );
}

export default App;
