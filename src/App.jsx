import './App.css';
import Navbar from './Navbar';
import initFakeDatabase from './fakeDatabase';
import { Outlet } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  // using Web Storage API - setting value to auto if not exists yet
  if (!localStorage.getItem("themeString")) {
    localStorage.setItem("themeString", "auto");
  }
  const themeStringFromStorage = localStorage.getItem("themeString");

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
  //autoSetTheme();
  //dropFakeDatabase();
  initFakeDatabase();

  return (
    <ThemeProvider>
      <Navbar page_name="main" theme_string={themeStringFromStorage} auto_set_theme={autoSetTheme} />
      <div className="container-fluid limit-and-center">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;