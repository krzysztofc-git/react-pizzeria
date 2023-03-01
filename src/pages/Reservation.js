import React from 'react';
import { getFakeDatabaseTable, dropFakeDatabase } from '../fakeDatabase';

function Reservation() {
  const db = getFakeDatabaseTable;
  const queries = {
    // queries.query1[1][0][queries.query1[1][1..length-1]]
    // where "1..length-1" are columns like 0, 1...
    query1: ["SELECT id_pizza,name FROM pizza_types",
      [db("pizza_types"), 0, 1]
    ],
    query2: ["SELECT id_size, size FROM dough_size",
      [db("dough_size"), 0, 1]
    ],
    query3: ["SELECT id_dough, dough_type FROM dough_types",
      [db("dough_type"), 0, 1]
    ],
    query4: ["SELECT id_ingredient, name, price FROM ingredients",
      [db("ingredients"), 0, 1, 2]
    ],
  };

  function FormSelectPizza() {
    const col = queries.query1[1][0];
    const options = [];
    for (let i = 0; i < col.length; i++) {
      options.push(<option value={col[i][0]} key={col[i][0]}>Pizza {col[i][1]}</option>);
    }
    return options;
  }

  function FormSelectSize() {
    const col = queries.query2[1][0];
    const options = [];
    for (let i = 0; i < col.length; i++) {
      options.push(<option value={col[i][0]} key={col[i][0]}>{col[i][1]}</option>);
    }
    return options;
  }

  function FormSelectDoughSize() {
    const col = queries.query3[1][0];
    const options = [];
    for (let i = 0; i < col.length; i++) {
      options.push(<option value={col[i][0]} key={col[i][0]}>{col[i][1]}</option>);
    }
    return options;
  }

  function FormSelectExtras() {
    const col = queries.query4[1][0];
    const options = [];
    for (let i = 0; i < col.length; i++) {
      options.push(<option value={'1_'.concat(col[i][0])} key={'1_'.concat(col[i][0])}>{col[i][1]}, price: ${col[i][2]}</option>);
      options.push(<option value={'2_'.concat(col[i][0])} key={'2_'.concat(col[i][0])}>{col[i][1]} x2, price: ${col[i][2] * 2}</option>);
    }
    return options;
  }

  return (
    <>
      <h1 className="text-danger text-center pt-2">Reservation page</h1>
      <form method='post'>
        <input type="hidden" name="id_order" value={123456} />
        <div className='row px-1 row-gap-5'>
          <div className='col-lg-6 col-sm-12'>
            <div className='mb-3'>
              <label htmlFor="Pizza" className='form-label'>Select pizza</label>
              <select id="Pizza" className='form-select' name="id_pizza">
                <FormSelectPizza />
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor="Size" className='form-label'>Select size</label>
              <select id="Size" className='form-select' name="id_size" required>
                <FormSelectSize />
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor="Dough_size" className='form-label'>Select dough size</label>
              <select id="Dough_size" className='form-select' name="id_dough" required>
                <FormSelectDoughSize />
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor="Extras" className='form-label'>Select Add-ons (Multi-Ingredient Selection (Hold Ctrl))</label>
              <select id="Extras" className='form-select' name="extras[]" multiple>
                <FormSelectExtras />
              </select>
            </div>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <div className='mb-3'>
              <label htmlFor="Table_num" className='form-label'>Table number</label>
              <input type="number" id="Table_num" className='form-control' name="table_num" required />
            </div>

            <div className='mb-3'>
              <label htmlFor="Name" className='form-label'>Client's name</label>
              <input type="text" id="Name" className='form-control' name="name" required />
            </div>
            <div className='mb-3'>
              <label htmlFor="LastName" className='form-label'>Client's last name</label>
              <input type="text" id="LastName" className='form-control' name="last_name" required />
            </div>
            <div className='mb-3'>
              <label htmlFor="Bill_needed" className='form-label'>Do you need a bill?</label>
              <select id="Bill_needed" className='form-select' name="bill_needed" required>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
            <div className='d-grid'>
            <button type="submit" className='btn btn-danger'>Reserve</button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <button className='btn btn-secondary' onClick={
        // debug button for recreating database and refreshing the app
        () => {
          dropFakeDatabase(); window.location.reload()
        }
      }><i class="bi bi-arrow-clockwise" /></button>
    </>
  );
}

export default Reservation;