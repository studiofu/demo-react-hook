import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InnerApp from './InnerApp';
import HookApp from'./HookApp';

class App extends Component {

  state = { name: 'hello tom' }
  test = 10;

  linklist = [1,2,3,4,5,6,7];

  constructor() {
    super();
    this.clickMe = this.clickMe.bind(this);
  }

  componentDidMount() {
    this.setState({name: 'tom x'});
    this.setState( s => ( {name: `${s.name} chen`}));
    //this.setState( {name: this.state.name + ' chen'});
  }

  clickMe() {
    //alert("clicked");
    this.linklist = [... this.linklist,99]; 
    //alert(this.linklist);

    this.forceUpdate();
  }

  render() {
    var {name} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {name}
          <InnerApp name={name}></InnerApp>
          <button onClick={this.clickMe}>click me!</button>
          {this.linklist.map(x=>x).join(",")}

          {
            this.linklist.map((el,index) => (
             <div>
                index: {index}, value={el}
             </div> 
            ))

          }
          <HookApp></HookApp>
        </header>
       </div>
    )
  }
}

export default App;
