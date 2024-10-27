import './App.css';
import Navbar from './Navbar';
import initFakeDatabase from './fakeDatabase';
import { Outlet } from "react-router-dom";
import ThemeProvider from './contexts/ThemeProvider';

function App() {
  // using Web Storage API - setting value to auto if not exists yet
  if (!localStorage.getItem("themeString")) {
    localStorage.setItem("themeString", "auto");
  }

  initFakeDatabase();

  return (
    <ThemeProvider>
      <Navbar page_name="main" />
      <div className="container-fluid limit-and-center">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;