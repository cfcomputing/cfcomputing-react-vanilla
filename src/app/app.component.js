import React from "react";

import { ThemeContext } from "app/theme/theme.context";

export class AppComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appTitle: "CFComputing.com",
			cntr: 0,
			currentTheme: "light"
		};
	}

	increment = () => {
		this.setState(prevState => ({
			cntr: prevState.cntr + 1
		}));
	};

	decrement = () => {
		this.setState(prevState => ({
			cntr: prevState.cntr - 1
		}));
	};

	changeTheme = () => {
		this.setState(prevState => ({
			currentTheme: prevState.currentTheme === "light" ? "dark" : "light"
		}));
	};

	render() {
		const { appTitle, cntr, currentTheme } = this.state;
		return (
			<React.Fragment>
				<ThemeContext.Consumer>
					{theme =>
						console.log("theme", theme) || (
							<div
								style={{
									backgroundColor: theme[currentTheme].background,
									color: theme[currentTheme].text,
									width: "100vw",
									height: "100vh",
									margin: "0",
									padding: "0"
								}}
							>
								<h1>{appTitle}</h1>
								<div>Count: {cntr}</div>
								<button onClick={this.increment}>+</button>
								<button onClick={this.decrement}>-</button>
								<button onClick={this.changeTheme}>
									Change Theme to {currentTheme === "light" ? "dark" : "light"}
								</button>
							</div>
						)
					}
				</ThemeContext.Consumer>
			</React.Fragment>
		);
	}
}
