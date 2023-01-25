import React from 'react';
import './App.css';
import Main from './pages/Main';
import Navbar from './Navbar';
import { useState, useRef, useEffect } from 'react';



function App() {
  const [page, setPage] = useState(<Main />);
  const [themeString, setThemeString] = useState("dark");

  const appContainerRef = useRef(null);

  useEffect(() => {
    setTheme(themeString);
  });
  
  function setTheme(themeString) {
    appContainerRef.current.setAttribute('data-bs-theme', themeString);
  }

  return (
    <div ref={appContainerRef}>
      <Navbar page_name="main" set_page={setPage} set_theme={setTheme} />
      {page}
    </div>
  );
}

export default App;

