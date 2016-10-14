import React, { Component } from 'react'
//import pieces aka subcomponents of the react-google-maps module. don't have to import the whole thing anymore. thanks ES6!
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

//this is the Map component
class Map extends Component {
	render(){
		//want the map to occupy the entire content of its parent component
		const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

		//preparing a list of markers for the map to show
		//props is an object containing properties passed from parent to child component.
			//here you're mapping the markers array to create another array of modified items. items here are new positions on the map
		const markers = this.props.markers.map((venue, i) => {
			//for each venue in the array, create a marker variable with a position key, and grab lat/lng from location object
			//this variable "markers" is referenced (being used) below in the GoogleMap element 
			
			const marker = {
				position: {
					lat: venue.location.lat,
					lng: venue.location.lng
				}
			}
			return <Marker key={i} {...marker} />
		})

		return (
			//react-google-maps node module convention/syntax
			//GoogleMapLoader is what processes/loads the map
			<GoogleMapLoader
		        containerElement = { mapContainer }
		        googleMapElement = {
			        //this is the actual visual component
			        <GoogleMap
			            defaultZoom={12}
			            //components use props. lets you make a single component that is used in many different places in your app, with slightly different properties in each place. 
			            defaultCenter={this.props.center} //these are lat/lng coordinates. here we're passing down the center property from the parent component to the child component. so have to create a variable called "center" in the app (parent) component
			            options={{streetViewControl: false, mapTypeControl: false}}
			        >
			        { markers }
			    	</GoogleMap>
		    } />
		)
	}
}

export default Map
//there's only one entry point. instead of reactDOM we're exporting this so we can take this code/component and put it inside other components. nesting components. map component is being imported inside app.js