import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("themeString") || "auto");

  useEffect(() => {
    const applyTheme = (theme) => {
      if (theme === "auto") {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const newTheme = systemPrefersDark ? "dark" : "light";
        document.querySelector("html").setAttribute('data-bs-theme', newTheme);
      } else {
        document.querySelector("html").setAttribute('data-bs-theme', theme);
      }
      localStorage.setItem("themeString", theme);
    };

    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;