import React from 'react';
import './App.css';
import Main from './pages/Main';
import Navbar from './Navbar';
import { useState } from 'react';



function App() {
  //value about theme read from local browser storage - to implement
  const themeStringFromStorage = "light";

  const [page, setPage] = useState(<Main />);
  const [themeString, setThemeString] = useState(themeStringFromStorage);

  // useEffect(() => {
  //   setTheme(themeString);
  // });
  
  function setTheme(themeString) {
    document.querySelector("html").setAttribute('data-bs-theme', themeString);
  }

  return (
    <>
      <Navbar page_name="main" set_page={setPage} set_theme={setTheme} theme_string={themeString} />
      {page}
    </>
  );
}

export default App;

