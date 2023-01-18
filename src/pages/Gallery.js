function Gallery() {
  function GalleryCarousel() {
    return (
      <div id="carouselExampleCaptions" className="carousel slide" style={{'max-width': '720px', margin: 'auto'}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/pizza/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash.jpg" className="d-block w-100" alt="First" />
            <div className="carousel-caption">
              <h1>Pizza XYZ</h1>
              <p>Swipe left/right or use arrow icons to see more</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/pizza/carissa-gan-_0JpjeqtSyg-unsplash.jpg" className="d-block w-100" alt="2..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/pizza/ivan-torres-MQUqbmszGGM-unsplash.jpg" className="d-block w-100" alt="3..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/pizza/jonas-kakaroto-zlKdLdMREtE-unsplash.jpg" className="d-block w-100" alt="4..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/pizza/nik-owens-40OJLYVWeeM-unsplash.jpg" className="d-block w-100" alt="5..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              
            </div>
          </div>
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
    );
  }
  return (
    <>
      <h1 className="text-danger text-center">Gallery page</h1>
      <GalleryCarousel />
    </>
  );
}
  
export default Gallery;