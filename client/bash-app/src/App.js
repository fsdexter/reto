import './App.css';
import {useState, useEffect, useContext}  from 'react';
import { Context } from "./store/appContext"
import { Test } from './componetn/test';
import injectContext from "./store/appContext"


function App() {
  const { store} = useContext(Context);


  const [data, setData] = useState([])
  const url = "http://127.0.0.1:80/"
  // http://127.0.0.1:80
  //  "proxy":"http://server:5000",

  useEffect(() => {
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch(url, requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

    fetch(url).then(responses => {
      if (responses.status === 200) {
              console.log(responses)
              return responses.json();
      }
    }).then(data => {
      console.log(data);
      setData(data);
    })
    }, [])

  return (
    <div className="App">
      <h1>ALIVE</h1>
      <Test data={data}/>
      <p>{store.message }</p>
    </div>
  );
}

export default injectContext(App);
