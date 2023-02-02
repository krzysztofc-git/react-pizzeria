import React from 'react';
import './App.css';
import Main from './pages/Main';
import Navbar from './Navbar';
import { useState } from 'react';
import { initFakeDatabase } from './fakeDatabase';

function App() {
  // using Web Storage API - setting value to auto if not exists yet
  if (!localStorage.getItem("themeString")) {
    localStorage.setItem("themeString", "auto");
  }
  const themeStringFromStorage = localStorage.getItem("themeString");

  const [page, setPage] = useState(<Main />);

  function setTheme(themeString) {
    document.querySelector("html").setAttribute('data-bs-theme', themeString);
  }

  function autoSetTheme() {
    // get preferred by system value
    if (localStorage.getItem("themeString") === "auto") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    } else if (localStorage.getItem("themeString") === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  autoSetTheme();
  //dropFakeDatabase();
  initFakeDatabase();

  return (
    <>
      <Navbar page_name="main" set_page={setPage} theme_string={themeStringFromStorage} auto_set_theme={autoSetTheme} />
      <div className="container-fluid limit-and-center">
        {page}
      </div>
    </>
  );
}

export default App;