Interview Questions for Beginner ReactJS Developers

Find the issue with the form’s input field in the below code snippet:

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
Question 10
What issue exists in the below code regarding state variable:

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
