import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoState} from "./components/TodoState";
import { TodoRef } from './components/TodoRef';
import { ApiUseEff } from './components/ApiUseEff';
import {FetchData} from "./components/FetchData";
import {Memo} from "./components/Memo"
function App() {
  return (
    <div className="App">
      <Memo/>
      {/* <ApiUseEff/> */}
      {/* <FetchData/> */}
       {/* <TodoRef/> */}
      {/* <TodoState/> */}
          </div>
  );
}

export default App;
