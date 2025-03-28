import React from 'react';
class Item extends React.Component {
    render(){
      return(
        <li>
          {this.props.name},
          {this.props.price}
        </li>
      );
    }
  }

class App extends React.Component {
  state = {
    items: [
      {id: 1, name: 'Apple',price: 0.99},
      {id: 2, name: 'orange', price: 0.89},
    ]
  }
  add = () => {
    let id = this.state.items.length + 1;
    this.setState({
      items: [
        ...this.state.items,
        { id, name: `Item ${id}`, price: 0.01 * id }
      ]
    }

    );
  }
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <u1>
          {this.state.items.map(i => {
            return (
              <Item
              name={i.name}
              price={i.price}
              />
            )
            }
          
          )
          }

        
        </u1>
        <button onClick={this.add}>Add</button>
      </div>
    )
   
  }
}
export default App;
