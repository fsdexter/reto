import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext"
import { Home } from './pages/home';


function App() {

  return (
    
    <div className="App">
      <BrowserRouter >
                
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                  
            </BrowserRouter>
      
    </div>
  );
}

export default injectContext(App);
