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
  nameRef = React.createRef();
  priceRef = React.createRef();
  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;
    this.setState(
      {
        items : [
          ...this.state.items,
          {id,name,price}
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
              id={i.id} name={i.name} price={i.price}
              />
            )
            }
          
          )
          }

        
        </u1>
        <input type="text" ref={this.nameRef}/><br />
        <input type="text" ref={this.priceRef}/><br />
        <button onClick={this.add}>Add</button>
      </div>
    )
   
  }
}
export default App;
