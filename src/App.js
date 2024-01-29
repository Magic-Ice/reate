import axios from 'axios';
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import { useState,useEffect } from 'react';


//axios

function App() {
  const [text,setText] = useState('');
  const onChangeHandler = (e)=>{
    setText(e.target.value)
  }
  useEffect(()=>{
    (async()=>{
      const path =process.env.REACT_APP_PATH;
      const result = await axios.get(path);
      console.log(result);
    })();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <a
          className="App-link btn btn-info"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input id="suisei" text="這是一個input" value={text} onChangeHandler={onChangeHandler}/>
        {text}
        <button type="button" className="btn btn-info">suisuikawaii</button>
        <button type="button" className="btn btn-primary">Primary</button>
      </header>
    </div>
  );
}

export default App;
