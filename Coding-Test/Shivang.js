// Interview Questions for Beginner ReactJS Developers

// Question 1
// What will be the output of the below code if the button is clicked:

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
// Question 2

// Find the issue in the below code snippet after rendering the list of names.

 import React from "react";
 function App() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
   const listItems = names.map((name) => <li>{name}</li>);
   return <ul>{listItems}</ul>;
}
export default App;


// Question 3
// Analyze the below code and advise what is wrong with using setState() inside the render() method:
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


// Interview Questions for Mid-level ReactJS Developers

// Question 4
// Build a weather application that retrieves real-time weather data from any weather API and displays it on the screen. The app should provide a search feature through which users can search for a location by city name or zip code and display the current temperature, humidity, wind speed and other relevant weather data.

// Question 5
// What is the issue in the below code regarding useMemo hook:

import React, { useMemo } from "react";
 function App() {
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = useMemo(() => numbers.map((n) => n * 2), []);
 return (
	<div>
  	{doubledNumbers.map((number) => (
    	<p key={number}>{number}</p>
  	))}
	</div>
  );
}
 
export default App;
// Question 6
// What will be logged to the console after the button is clicked:

class App extends React.Component {
  state = { count: 0 };
 handleClick = () => {
	this.setState({ count: this.state.count + 1 }, () => {
  	console.log(`Count: ${this.state.count}`);
	});
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



// Interview Questions for Experts
// Question 4
// What will be the behavior of useEffect hook in the below code:

import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
	const interval = setInterval(() => {
  	setCount((prevCount) => prevCount + 1);
	}, 1000);
 
	return () => clearInterval(interval);
  }, []);
   return <div>Count: {count}</div>;
}
 export default App;

// Question 5
// Develop a web application of your choice that makes frequent requests to an external REST API. To improve latency and reduce the load on the API, implement a client-side caching strategy that caches responses to API requests and serves them from the client-side cache when the same request is made again.

// Question 6
// What is wrong with using async/await in a useEffect hook in reference to the below code snippet?

function TestComponent() {
  const [data, setData] = useState([]);
 useEffect(() => {
	const fetchData = async () => {
  	const response = await fetch("/api/data");
  	const json = await response.json();
  	setData(json);
	};
	fetchData();
  }, []);
   return <div>{data.map((d) => <p>{d.text}</p>)}</div>;
}