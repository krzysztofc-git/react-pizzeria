import React from 'react';
import { getFakeDatabaseTable } from '../fakeDatabase';
function Gallery() {
  function GalleryCarousel() {
    const listOfPizzas = getFakeDatabaseTable("pizza_types");

    function CarouselItems(props) {
      const items = [];
      for (let index = props.begin_index; index < props.list.length; index++) {
        items.push(
          <div className="carousel-item">
            <img src={listOfPizzas[index][2]} className="d-block w-100" alt={listOfPizzas[index][1]} />
            <div className="carousel-caption">
              <h1>{listOfPizzas[index][1]}</h1>
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
          <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to={String(index)} aria-label={"Slide".concat(" ",String(index+1))}></button>
        );
      }
      return <>{items}</>;
    }

    

    return (
        <div className='col-lg-6 col-sm-12'>
          <div id="carouselGallery" className="carousel slide limit-and-center">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselGallery" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <CarouselButtons list={listOfPizzas} begin_index={1} />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={listOfPizzas[0][2]} className="d-block w-100" alt={listOfPizzas[0][1]} />
                <div className="carousel-caption">
                  <p>Swipe or use side arrows</p>
                  <h1>{listOfPizzas[0][1]}</h1>
                </div>
              </div>
              
              <CarouselItems list={listOfPizzas} begin_index={1} />
              
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    );
  }

  function MenuTable() {
    function TableRows() {
      let rows = [];
      let groupedColumn = [];
      let rowsGrouped = {};
      let rowsRaw = [];
      const pizza_types = getFakeDatabaseTable("pizza_types");
      const ingredients = getFakeDatabaseTable("ingredients");
      const recipes = getFakeDatabaseTable("recipes");
      pizza_types.forEach(pizza_type => {
        groupedColumn.push(pizza_type[1]);
      });
      const groupedColumnUniq = [...new Set(groupedColumn)];
      pizza_types.forEach(pizza_type => {
        ingredients.forEach(ingredient => {
          recipes.forEach(recipe => {
            // Comparing every element with each other to simulate SQL's Join
            if( (pizza_type[0] === recipe[1]) && (recipe[0] === ingredient[0]) ) {
              // Version with duplicates:
              //    let standardString = pizza_type[3] ? "Yes" : "No";
              //    rows.push(<tr><td>{pizza_type[1]}</td><td>{ingredient[1]}</td><td>{ingredient[2]}</td><td>{standardString}</td></tr>);

              // Simulating SQL's GroupBy
              Object.entries(groupedColumnUniq).forEach(pizzaName => {
                pizzaName = pizzaName[1];
                if(pizza_type[1] === pizzaName) {
                rowsGrouped[pizzaName] = rowsGrouped[pizzaName] || [];
                if (!rowsGrouped[pizzaName][0]) {
                  rowsGrouped[pizzaName].push([]);
                  rowsGrouped[pizzaName][0].push(new Set());
                  rowsGrouped[pizzaName][0].push([]);
                  rowsGrouped[pizzaName][0].push(0);
                }
                rowsGrouped[pizzaName][0][0].add(ingredient[1]);
                rowsGrouped[pizzaName][0][1].push(ingredient[2]);
                rowsGrouped[pizzaName][0][3] = pizza_type[3];
                }
              });
            }
          });
        });
      });

      // Simulating SQL's Aggregate Functions to eliminate inner Arrays and Sets
      for (const [pizzaNameKey, pizzaNameVal] of Object.entries(rowsGrouped)) {
        let standardString = pizzaNameVal[0][2] ? "No" : "Yes";
        let ingredientsString = "";
        Array.from(pizzaNameVal[0][0]).forEach(element => {
          ingredientsString = ingredientsString.concat(element, ", ");
        });
        let ingredientsPriceSum = 0;
        pizzaNameVal[0][1].forEach(element => {
          ingredientsPriceSum += parseFloat(element);
        });
        ingredientsPriceSum = ingredientsPriceSum.toFixed(2);
        rowsRaw.push([pizzaNameKey, ingredientsString.slice(0,-2), ingredientsPriceSum, standardString]);
      }

      // rowsRaw Array - ready to rawly export its' values to the Gallery's Menu table
      rowsRaw.forEach(col => {
        rows.push(<tr><th scope="row">{col[0]}</th><td>{col[1]}</td><td>{col[2]}</td><td>{col[3]}</td></tr>);
      });
      
      return (
        <>
          {rows}
        </>
      );
    }

    return (
      <div className='col py-1'>
        <h2>Menu</h2>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
            <tr>
              <th scope='col'>Pizza name</th><th scope='col'>Ingredients</th><th scope='col'>Price of ingredients</th><th scope='col'>Standard</th>
            </tr>
            </thead>
            <tbody className='table-group-divider'>
              <TableRows />
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-danger text-center pt-2">Gallery page</h1>
      <div className='row px-1 row-gap-5'>
        <GalleryCarousel />
        <MenuTable />
      </div>
    </>
  );
}
  
export default Gallery;