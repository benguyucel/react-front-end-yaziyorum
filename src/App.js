import React from "react";
import {BrowserRouter as  Router, Link, Route, Routes } from "react-router-dom";
import { YaziDetayi } from "./components/YaziDetayi";
import YaziEditFormu from "./components/YaziEditFormu";
import YaziFormu from "./components/YaziFormu";
import { YaziListesi } from "./components/YaziListesi";
import { YorumForm } from "./components/YorumForm";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Dogs Roles with Humans</h2>
          <Routes>
            <Route path="/" element={<YaziListesi />} />
            <Route path="/posts/:id" element={<YaziDetayi />} />
            <Route path="/addpost" element={<YaziFormu />} />
            <Route path="/editpost/:id" element={<YaziEditFormu />} />
            <Route path="/yorumedit"  element={<YorumForm  />} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
