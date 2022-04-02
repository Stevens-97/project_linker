import React from 'react';
import styles from './App.module.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Footer/>
    {/* <div>my Navbar</div>
    <div className={styles.footer}>my footer</div> */}
    </div>
  );
}

export default App;
