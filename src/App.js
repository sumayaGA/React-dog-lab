
import './App.css';
import Main from "./components/Main";
import {useState} from "react"; 

function App() {


  const [url, setUrl] = useState();

  const getImage = async() => {
      const response = await fetch ("https://dog.ceo/api/breeds/image/random");

  const data = await response.json();

  setUrl(data.message);
};



  return (
    <div className="App">
    <Main />

    <div className='imgContainer'>

      <div>
      <img src={url} alt=""/>
      </div>

      <div>
      <button onClick={getImage}>RANDOM DOG</button>
      </div>
      
    </div>

    </div>
   
  );
}

export default App;
