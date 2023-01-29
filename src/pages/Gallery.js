import React from 'react';
function Gallery() {
  function GalleryCarousel() {
    const listOfPizzas = [
      ["Neapolitan","images/pizza/nik-owens-40OJLYVWeeM-unsplash.jpg"], 
      ["Bianca","images/pizza/jonas-kakaroto-zlKdLdMREtE-unsplash.jpg"],
      ["Sicilian","images/pizza/ivan-torres-MQUqbmszGGM-unsplash.jpg"],
      ["Ziti","images/pizza/carissa-gan-_0JpjeqtSyg-unsplash.jpg"],
      ["New York","images/pizza/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg"]
    ];

    function CarouselItems(props) {
      const items = [];
      for (let index = props.begin_index; index < props.list.length; index++) {
        items.push(
          <div className="carousel-item">
            <img src={listOfPizzas[index][1]} className="d-block w-100" alt={listOfPizzas[index][0]} />
            <div className="carousel-caption">
              <h1>{listOfPizzas[index][0]}</h1>
            </div>
          </div>
        );
      }
      return <>{items}</>;
    }

    function CarouselButtons(props) {
      const items = [];
      for (let index = props.begin_index; index < props.list.length; index++) {
        items.push(
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={String(index)} aria-label={"Slide".concat(" ",String(index+1))}></button>
        );
      }
      return <>{items}</>;
    }

    return (
      <div className='row px-3 row-gap-5'>
        <div className='col py-1'>
          <div id="carouselExampleCaptions" className="carousel slide limit-and-center">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <CarouselButtons list={listOfPizzas} begin_index={1} />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={listOfPizzas[0][1]} className="d-block w-100" alt={listOfPizzas[0][0]} />
                <div className="carousel-caption">
                  <p>Swipe left/right or use arrow icons to see more</p>
                  <h1>{listOfPizzas[0][0]}</h1>
                </div>
              </div>
              
              <CarouselItems list={listOfPizzas} begin_index={1} />
              
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-danger text-center pt-2">Gallery page</h1>
      <GalleryCarousel />
    </>
  );
}
  
export default Gallery;