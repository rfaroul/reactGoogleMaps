import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'

//this is the App component
//think of components as HTML tags, roughly speaking
class App extends Component { //ideally, component should only do one thing
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
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))

