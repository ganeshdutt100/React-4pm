Interview Questions for Beginner ReactJS Developers
Question 5
What will be the output when the user types in the input field:

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
Question 6
What is missing in the below code snippet:

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


Question 6
Analyze the below code snippet and advise what will be shown on the screen when the App component is rendered with <App name=”Claire” />?

 import React from "react";
 class App extends React.Component {
  render() {
	return <div>Hello, {this.props.name}!</div>;
  }
}
export default App;