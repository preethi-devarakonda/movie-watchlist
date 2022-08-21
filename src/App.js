import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "./lib/font-awesome/css/all.min.css";

import {Header} from "./components/Header";
import {Watchlist} from "./components/Watchlist";
import {Watched} from "./components/Watched";
import {Add}from "./components/Add";

import { GlobalProvider } from "./context/GlobalState";


const App = () => {
  return (
    <GlobalProvider>
    <BrowserRouter>
      {<Header/>}

      <Routes>
        <Route exact path="/" element= {<Watchlist/>}/>

        <Route path="/watched" element={<Watched/>}/>
  

        <Route path="/add" element={<Add/>}/>
          
      </Routes>
    </BrowserRouter>
    </GlobalProvider>
  )
};

export default App;