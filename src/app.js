import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent' //makes api call from foursquare. uses promises

//this is the App component
//think of components as HTML tags, roughly speaking
class App extends Component { //ideally, component should only do one thing
	//after invoke a class, React expects a render method and triggers a lifecycle that can be hooked into lifecycle methods
	//as soon as render method is called, componentDidMount function is called. this is where you access the DOM and manipulate/fetch data
	componentDidMount(){ //should see this in console. successfully overrides the lifecycle method
		console.log("component did mount");
	}


	//spit out HTML here
	//the only way to call the render method is when state changes
	render(){

		//pass location variable as center property to the map (below in the div)
		const location = { //Times Square
			lat: 40.7575285,
			lng: -73.9884469
		}

		//an array of pins for the locations. to start just rendering one marker, so have one object. then have to pass this as a property called markers to the map HTML element
		const markers = [
			{
				location: {
					lat: 40.7575285,
					lng: -73.9884469
				}
			}
		]
		return(
			<div>
				This is the REACT APP!
				<div style={{width:300, height:600, background:'red'}}>
					<Map center={location} markers={markers} />
					<Places />
				</div>
					
			</div>
		)

	}
}

ReactDOM.render(<App />, document.getElementById('app'))

