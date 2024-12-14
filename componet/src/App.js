import React from "react";
import Toolbar from './Toolbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Toolbar>
          <h1>Hello React</h1>
          <h1>Componet  composition</h1>
        </Toolbar>
      </div>
    );
  }
}
export default App;