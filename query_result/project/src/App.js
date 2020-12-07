import React from 'react';
import {version, Button} from "antd";
import 'antd/dist/antd.css';
import './App.css';

function App() {  
	return (    
	<div className="App" style={{border:"solid red",marginTop:"20px"}}>
	          <h1>antd version: {version}</h1>          
	          <p>Please <b>fork</b> this sandbox to reproduce your issue.</p>          
	          <Button type="primary">点我</Button>    
	          </div>  
	          );
	}
	          
export default App;

