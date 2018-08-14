import React from "react";

import { ThemeContext } from "app/theme/theme.context";
import { LoginComponent } from "app/login/login.component";

export class AppComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appTitle: "CFComputing.com",
			cntr: 0,
			currentTheme: "light"
		};
	}

	changeTheme = () => {
		this.setState(prevState => ({
			currentTheme: prevState.currentTheme === "light" ? "dark" : "light"
		}));
	};

	render() {
		const { appTitle, currentTheme } = this.state;
		return (
			<React.Fragment>
				<ThemeContext.Consumer>
					{theme => (
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
							<LoginComponent />

							<button onClick={this.changeTheme}>
								Change Theme to {currentTheme === "light" ? "dark" : "light"}
							</button>
						</div>
					)}
				</ThemeContext.Consumer>
			</React.Fragment>
		);
	}
}
