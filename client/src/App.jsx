import React, { Component } from "react"
import "./styles/custom.scss"
import AppNavbar from "./components/AppNavbar"

export class App extends Component {
	render() {
		return (
			<>
				<AppNavbar />
				<div className="container">
					<h4>Shopping Bag</h4>
				</div>
			</>
		)
	}
}

export default App
