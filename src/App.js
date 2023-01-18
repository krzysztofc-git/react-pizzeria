import './App.css';
import Main from './pages/Main';
import Navbar from './Navbar';
import { useState } from 'react';



function App() {
  const [page, setPage] = useState(<Main />);
  return (
    <>
      <Navbar page_name="main" set_page={setPage} />
      {page}
    </>
  );
}

export default App;

