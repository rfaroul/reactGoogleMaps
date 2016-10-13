import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	render(){
		return(
			<div>
				This is the REACT APP!
				<div style={{width:300, height:600, background:'red'}}></div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))

