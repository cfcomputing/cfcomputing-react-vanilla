import React from "react";

const defaultTheme = {
	light: {
		text: "black",
		background: "white"
	},
	dark: {
		text: "white",
		background: "rgb(123,123,123)"
	}
};

export const ThemeContext = React.createContext(defaultTheme);
