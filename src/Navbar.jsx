import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ThemeContext from './contexts/ThemeContext';

function Navbar({page_name}) {
  const [pageName, setPageName] = useState(page_name);
  const navigate = useNavigate();

  const { theme, setTheme } = useContext(ThemeContext);
  // const presentPageRef = useRef(null);
  const default_value = { className: 'nav-link', 'data-bs-toggle': 'collapse', 'data-bs-target': '.navbar-collapse.show'};
  let linkAttributes = {
    main: default_value,
    reservation: default_value,
    status: default_value,
    gallery: default_value,
  };
  linkAttributes[pageName] = {
    className: 'nav-link active',
    'aria-current': 'page',
    'data-bs-toggle': 'collapse',
    'data-bs-target': '.navbar-collapse.show'
  };

  function goMain() {
    navigate("/");
    setPageName("main");
  }

  function goReservation() {
    navigate("/reservation");
    setPageName("reservation");
  }

  function goStatus() {
    navigate("/status");
    setPageName("status");
  }

  function goGallery() {
    navigate("/gallery");
    setPageName("gallery");
  }

  function loginEmployee() {
    console.log("login");
  }

  function logoffEmployee() {
    console.log("logout");
  }

  function ChangeUserDropdown() {
    return (
      <>
        <div className="dropdown d-grid">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Change User">
            <i className="bi bi-person-fill" />
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={logoffEmployee}>Client (unregistered)</button></li>
            <li><button className="dropdown-item" onClick={loginEmployee}>Employee</button></li>
          </ul>
        </div>
      </>
    )
  }

  function SwitchThemeButtonIcon() {
    let icon;

    icon = theme === "dark"
    ? (<><i className="bi bi-moon-stars-fill" /></>)
    : theme === "light"
    ? (<><i className="bi bi-sun-fill" /></>)
    : (<><i className="bi bi-circle-half" /></>);

    return (
      <>
        {icon}
      </>
    );
  }
  
  function switchTheme() {
    if (theme === "auto") {
      setTheme('dark')
    } else if(theme === "dark") {
      setTheme('light')
    } else {
      setTheme('auto');
    }
  }

  function SwitchThemeButton() {
    return (
      <div className='d-grid'>
        <button className="btn btn-outline-secondary" type="button" onClick={switchTheme} title="Switch theme">
          <SwitchThemeButtonIcon />
        </button>
      </div>
    );
  }

  // if (presentPageRef === "Gallery") {
  //   goGallery();
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid limit-and-center">
          <button type="button" className="btn navbar-brand text-danger" data-bs-toggle = "collapse" data-bs-target = ".navbar-collapse.show" onClick={goMain}>
            <i className="bi bi-pie-chart-fill" /> React Pizzeria
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="btn nav-item">
                <a {...linkAttributes['main']} onClick={goMain}>
                  Main Page
                </a>
              </li>
              <li className="btn nav-item">
                <a {...linkAttributes['reservation']} onClick={goReservation}>
                  Reserve
                </a>
              </li>
              <li className="btn nav-item">
                <a {...linkAttributes['status']} onClick={goStatus}>
                  Check Order
                </a>
              </li>
              <li className="btn nav-item">
                <a {...linkAttributes['gallery']} onClick={goGallery}>
                  Gallery
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="btn nav-item">
                {/* <a {...linkAttributes['switchUserButton']} onClick={switchUser}>
                  <ChangeUserDropdown />
                </a> */}
                <ChangeUserDropdown />
              </li>
              <li className="btn nav-item">
                <SwitchThemeButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  auto_set_theme: PropTypes.func.isRequired,
  page_name: PropTypes.string.isRequired,
  theme_string: PropTypes.string.isRequired
};

export default Navbar;