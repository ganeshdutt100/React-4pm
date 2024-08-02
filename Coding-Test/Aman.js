// Interview Questions for Beginner ReactJS Developers
// Question 5
// What will be the output when the user types in the input field:

function App() {
  const [value, setValue] = useState("");
 function handleChange(event) {
	setValue(event.target.value);
  }
 
  return (
	<div>
  	<input type="text" value={value} onChange={handleChange} />
  	<p>You entered: {value}</p>
	</div>
  );
}
// Question 6
// What is missing in the below code snippet:

import React, { useState } from "react"
function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}
export default App


// Question 6
// Analyze the below code snippet and advise what will be shown on the screen when the App component is rendered with <App name=”Claire” />?

 import React from "react";
 class App extends React.Component {
  render() {
	return <div>Hello, {this.props.name}!</div>;
  }
}
export default App;



// Interview Questions for Mid-level ReactJS Developers

// Question 1
// Find the issue in the below code when using the index as a key for list items:

 import React from "react";
 function App() {
  const items = [
	{ id: 1, text: "Item 1" },
	{ id: 2, text: "Item 2" },
  ];
  const listItems = items.map((item, index) => <li key={index}>{item.text}</li>);
  return <ul>{listItems}</ul>;
}
 export default App;
// Question 2
// Analyze the below code and advise what will be the value of “Count” when the button is clicked:

class App extends React.Component {
  state = { count: 0 };
 handleClick = () => {
	setTimeout(() => {
  	this.setState({ count: this.state.count + 1 });
	}, 0);
	this.setState({ count: this.state.count + 1 });
  };
 render() {
	return (
  	<div>
    	<h1>Count: {this.state.count}</h1>
 	   <button onClick={this.handleClick}>Click me!</button>
  	</div>
	);
  }
}
// Question 3
// Develop a messaging application that allows users to send and receive messages in real time. The application should display a list of conversations and allow the user to select a specific conversation to view its messages. The messages should be displayed in a chat interface with the most recent message at the top. Users should be able to send new messages and receive push notifications.