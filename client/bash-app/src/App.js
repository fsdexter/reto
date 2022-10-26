import './App.css';
import {useState, useEffect}  from 'react';
import { Test } from './componetn/test';


function App() {
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
    </div>
  );
}

export default App;
