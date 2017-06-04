import React from 'react';
import '../assets/css/App.css';
import Main from './ComponentExperimental/Main'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{margin : '13% auto'}}>
        <h3 style={{fontWeight : 200, fontSize : 35, fontFamily : 'Roboto'}}>Hey, Welcome back!</h3>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
