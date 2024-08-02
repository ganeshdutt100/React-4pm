Interview Questions for Beginner ReactJS Developers

Question 1
What will be the output of the below code if the button is clicked:

function App() {
  const [count, setCount] = useState(0);
 useEffect(() => {
	console.log("Component rendered successfully");
  }, []);
   return (
	<div>
  	<button onClick={() => setCount(count + 1)}>Click me</button>
  	<p>You clicked {count} times</p>
	</div>
  );
}
Question 2

Find the issue in the below code snippet after rendering the list of names.

 import React from "react";
 function App() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
   const listItems = names.map((name) => <li>{name}</li>);
   return <ul>{listItems}</ul>;
}
export default App;


Question 3
Analyze the below code and advise what is wrong with using setState() inside the render() method:
import React, { Component } from "react";
 class App extends Component {
  state = {
	counter: 0,
  };
 
  render() {
	this.setState({ counter: this.state.counter + 1 });
	return <div>Counter: {this.state.counter}</div>;
  }
}
export default App;