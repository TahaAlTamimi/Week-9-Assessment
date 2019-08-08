import React,{Component} from 'react';



export default class App extends Component {
  state={
  

  }
  render(){
  return (
    <div className="App">
    <h1>User input</h1>
    <input type="text"></input>
    <button style={{backgroundColor:"green",padding:"5px" }}>Output</button>
  
    </div>
  );
}
}