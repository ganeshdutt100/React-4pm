// Interview Questions for Beginner ReactJS Developers

// Find the issue with the form’s input field in the below code snippet:

import React, { Component } from "react";
class App extends Component {
constructor(props) {
super(props);
this.state = { name: "" };
}
handleSubmit = (event) => {
event.preventDefault();
console.log("Submitted Name:", this.state.name);
};
render() {
return (

<form onSubmit={this.handleSubmit}>
<label>
Name:
<input type="text" />
</label>
<button type="submit">Submit</button>
</form>
);
}
}
export default App;

// Question 10
// What issue exists in the below code regarding state variable:

import React, { useState } from "react";
function App() {
const [counter, setCounter] = useState(0);
function incrementCounter() {
setCounter(counter + 1);
}
return (

<div>
<button onClick={incrementCounter}>Increment</button>
<p>Counter: 0</p>
</div>
);
}

export default App;


// Interview Questions for Mid-level ReactJS Developers

// Question 7
// Will the below code throw any error when adding a new item to the list? If yes, what error will that be?

import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: ["Item1", "Item2"] };
  }
  addItem() {
    const newItem = "Item3";
    this.state.list.push(newItem);
    this.setState({ list: this.state.list });
  }
  render() {
    return (
      <div>
        <button onClick={this.addItem.bind(this)}>Add item</button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
	);
  }
}
export default App;


// Question 8
// Build a simple drag-and-drop interface that allows users to reorder a list of items through drag-and-drop. Implement a visual cue to indicate the new position of the dragged item. Use React state, components and hooks to manage the list’s data and user interactions.

// Question 9
// What is wrong with the below code:

import React, { useCallback, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
 
  const increment = useCallback(() => {
	setCount(count + 1);
  }, []);
   return (
	<div>
  	<button onClick={increment}>Increment</button>
  	<p>Count: {count}</p>
	</div>
  );
}
 
export default App;


// Interview Questions for Experts

// Question 7
// What will be the behavior of the useRef and useCallback hooks in the below code snippet?

import React, { useState, useRef, useCallback } from "react";
 function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
 
  const increment = useCallback(() => {
	countRef.current = countRef.current + 1;
	setCount(countRef.current);
  }, []);
 
  return (
	<div>
  	<button onClick={increment}>Increment</button>
  	<p>Count: {count}</p>
	</div>
  );
}
 export default App;

// Question 8
// Develop a file upload component to upload multiple files simultaneously. It should display progress indicators for each file and should display a success or error message after the upload is complete.

// Question 9
// How can you optimize the handling of async data promises in the below code?

import { useCallback, useEffect } from "react";
 function TestComponent(props) {
  const fetchData = useCallback(async () => {
	const response = await fetch(`/api/data/${props.id}`);
	const json = await response.json();
	return json;
  }, [props.id]);
 
  useEffect(() => {
    const dataPromise = fetchData();
	// Do something with the data promise
	return () => {
  	// Cancel the data promise
	};
  }, [fetchData]);
   return <div>My Component</div>;
}