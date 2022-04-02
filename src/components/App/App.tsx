import React from "react";
import styles from "./App.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export const Home = () => (
  <div>
    <h1>Home page!</h1>
  </div>
);

export default App;
