/**
 * The login component is going to wrap expose the login capabilities of the system
 *
 * For now it is just going to display the google login button and will build from there
 */
import React from "react";

export class LoginComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};

		this.auth2 = null;
		this.init();
	}

	init = async () => {
		// eslint-disable-next-line no-undef
		gapi.load("auth2", this.gapiLoadedCB);
	};

	gapiLoadedCB = () => {
		// eslint-disable-next-line no-undef
		this.auth2 = gapi.auth2.init({
			client_id: "543420081167-ck7qak54b8sr34s24hbavip458aeok42.apps.googleusercontent.com",
			cookiepolicy: "single_host_origin"
			// Request scopes in addition to 'profile' and 'email'
			//scope: 'additional_scope'
		});
		console.log("this.auth2", this.auth2);

		// this.auth2.isSignedIn.listen(this.signInChanged);
		this.auth2.currentUser.listen(this.currentUserChanged);
	};

	// signInChanged = signInVal => {
	// 	console.log("in signInChanged", signInVal);
	// };

	currentUserChanged = user => {
		console.log("in currentUserChanged", user, "authresp", user.getAuthResponse());
		const profile = user.getBasicProfile();
		const token = user.getAuthResponse();
		if (profile) {
			this.setState({
				user: {
					id: profile.getId(),
					name: profile.getName(),
					img: profile.getImageUrl(),
					email: profile.getEmail(),
					loggedIn: token.id_token
				}
			});
		}
	};

	loginWithGoogle = () => {
		console.log("loginWithGoogle called");
		console.log("this.auth2", this.auth2);
		this.auth2.signIn();
	};

	signOut = () => {
		this.auth2.signOut(() => {
			console.log("signout complete");
		});
	};

	render() {
		const { loggedIn, name } = this.state.user;

		if (loggedIn) {
			return (
				<React.Fragment>
					{/* <pre>{JSON.stringify(this.state.user, null, "\t")}</pre> */}
					<div>
						Hello {name} <button onClick={this.signOut}>Sign Out</button>
					</div>
				</React.Fragment>
			);
		}

		return (
			<React.Fragment>
				<button className="loginWithGButton" onClick={this.loginWithGoogle}>
					Login With Google
				</button>
			</React.Fragment>
		);
	}
}
