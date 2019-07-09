import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');// need to join string after spliting it previously
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch,idx) => {
      return <Char 
        character={ch} 
        key={idx}
        clicked={() => this.deleteCharHandler(idx)} />
    });
    // .split('') will split the string after every character into an array javascript can map
    // .map is creating a copy of the array, ch is the value of every index to get the index wrap in parenthesis (val, idx)
    // not the best idea to use the index for the key but better than nothing, we NEED a key declared on list items
    // when clicked property is fired it triggers the anonymous function deleteCharHandler - put onClick handler on the component being clicked -> Char.js
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input type='text' onChange={this.inputChangedHandler} value={this.state.userInput} />
        <p>Input Text: {this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
