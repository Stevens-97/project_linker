import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProjectViewer from "../ProjectViewer/ProjectViewer";

function App() {
  return (
    <Fragment>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Navbar />
        <ProjectViewer />
        <Footer />
      </div>
    </Fragment>
  );
}

export const Home = () => (
  <div>
    <h1>Home page!</h1>
  </div>
);

export default App;
