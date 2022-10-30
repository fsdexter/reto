import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext"
import { Home } from './pages/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Add } from './pages/add';
import { Access } from './pages/access';


function App() {

  return (

    <div className="App">

      <BrowserRouter >
        <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Add />} path="/add" />
        <Route element={<Access />} path="/access" />
        <Route element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default injectContext(App);
