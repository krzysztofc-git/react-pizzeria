import React from 'react';
function Main() {
    function MainIntroduction() {
      return(
        <>
          <div className='row px-5 row-gap-5'>
            <div className='col-lg-8 col-sm-12'>
              <p className='fs-2 fw-bold'>New flavors</p>
              <p className='fs-3'>See what's new in e-pizzeria</p>
            </div>
            <div className='col text-center'>
              <img className="img-fluid" src="images/pizza_index.png" alt="Pizza box icon" />
            </div>
          </div>
        </>
      )
    }
    return (
      <>
        <h1 className="text-danger text-center pt-2">Main page</h1>
        <MainIntroduction />
      </>
    );
  }
  
export default Main;