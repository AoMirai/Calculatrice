import React, {Component} from 'react';
import Calculatrice from './Calculatrice';
import Input from './Input';
import History from './History'



class App extends Component {
  constructor (props){
    super(props)
    this.state= {
      result:0,
      history:[]
  }
  }

  onClicNumbers= (value) => {
    const result= this.state.result
    this.setState({result: result + value})
  }

  onClickResult = () => {
    this.setState({history: [...this.state.history, {operation: this.state.result, result: eval(this.state.result)}]})
  }


  render() { 
  return (
    <div className="App">
      <Calculatrice onClicNumbers={this.onClicNumbers} onClickResult={this.onClickResult}/>
      <Input  value={this.state.result.toString()}/>
      <History history={this.state.history}/>
    </div>
  );
  }
}

export default App;
