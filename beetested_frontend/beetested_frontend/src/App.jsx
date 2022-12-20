import logo from './logo.svg';
/*import './App.css';*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar/Navbar";


import DataGridDemo from './components/datagrig';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPlayer from './components/AddPlayer';
import PlayerList from './components/Players/PlayerList';
import PlayerForm from './components/Players/PlayerForm'

function App() {

  return (
    <div className="App">
      <React.Fragment >
        <BrowserRouter>
          <Navbar/>
          
            <Routes>
              <Route exact path="/" element={<PlayerList/>} />
            <Route path="/playerForm" element={<PlayerForm/>} />
            <Route path="/updatePlayer/:id" element={<PlayerForm />} />
            </Routes>
          
        </BrowserRouter>
      </React.Fragment>

    </div>
  );
}

export default App;
