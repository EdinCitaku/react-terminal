import React, {Component} from 'react';
import {Output, OutputTerminal} from './Terminal-Output/Output'
import './App.css';




export class App extends Component<{},{inputList:string[], value:string, messagesEndRef: React.RefObject<HTMLDivElement>}>{

  constructor(props:any)
  {
    super(props);
    this.state = {inputList:["ls", "Input2"],value:"", messagesEndRef: React.createRef()};

  }

  
  addList()
  {
    this.setState(prevState => ({
      inputList: [...prevState.inputList, prevState.value],
      value: ""
    }))
  }
  updateInput = (event: React.ChangeEvent<HTMLInputElement>)=> {
    this.setState({
      value: event.target.value
    })
  }
  onEnterPress = (e:any) => {
    if(e.keyCode == 13) {
      if(this.state.value!="")
      this.addList()
    }
  }
  componentDidMount () {
    this.scrollToBottom()
  }
  componentDidUpdate () {
    this.scrollToBottom()
  }
  scrollToBottom = () => {
    this.state.messagesEndRef.current?.scrollIntoView({ behavior: 'auto' })
  }

  render() {
    return (  
          <div className="App-body">
        <div className="fill-space">
        {OutputTerminal(this.state.inputList)}

        </div>
        <footer>
        <input  onChange={this.updateInput} onKeyDown={this.onEnterPress} type="text" value={this.state.value} ></input>
        <div ref={this.state.messagesEndRef} />
        </footer>
        </div>
        
        
    )
    
  }

}

export default App;
