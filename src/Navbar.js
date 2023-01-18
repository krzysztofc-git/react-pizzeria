import React from 'react';
import Main from "./pages/Main";
import Reservation from "./pages/Reservation";
import Status from "./pages/Status";
import Gallery from "./pages/Gallery";
import { useState } from 'react';

function Navbar(props) {
    const [pageName, setPageName] = useState(props.page_name);
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
    };

    function goMain() {
      props.set_page(<Main />);
      setPageName("main");
    }
  
    function goReservation() {
      props.set_page(<Reservation />);
      setPageName("reservation");
    }
  
    function goStatus() {
      props.set_page(<Status />);
      setPageName("status");
    }
  
    function goGallery() {
      props.set_page(<Gallery />);
      setPageName("gallery");
    }
  
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button type="button" className="btn navbar-brand text-danger" onClick={goMain}>
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
            </div>
          </div>
        </nav>
      </>
    );
  }

export default Navbar;