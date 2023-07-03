import React, { useContext, useEffect, useState } from "react"
import Color from "color"
import { colors } from "../styles/colors"

interface IThemeContext {
	colors: {}
	navigationBar: {
		activeLinkStyle: object
	}
}

const themeDefaultState: IThemeContext = {
	colors: {},
	navigationBar: {
		activeLinkStyle: {},
	},
}

export const ThemeContext =
	React.createContext<IThemeContext>(themeDefaultState)

interface IThemeProvider {
	children: React.ReactNode
}

export const EventProvider: React.FC<IThemeProvider> = ({ children }) => {
	const [activeLinkStyle] = useState({ color: colors.purple.hsl().string() })
	const navigationBar = {
		activeLinkStyle,
	}

	return (
		<ThemeContext.Provider value={{ colors, navigationBar }}>
			{children}
		</ThemeContext.Provider>
	)
}

// Colors

// Fonts

// Sizes? / (Layout)
