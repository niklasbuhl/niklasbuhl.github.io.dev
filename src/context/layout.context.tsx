import React, { useContext, useEffect, useState } from "react"
import { DisplayType, EventContext } from "./event.context"

interface ILayoutContext {
	layout: {
		heroHeaderHeight: number | string
		getHeroHeaderHeightNumber: () => number
		getHeroHeaderHeightCSS: () => string
		setHeroHeaderHeight: React.Dispatch<React.SetStateAction<string | number>>
		navigationBarHeight: number
		creditsHeight: number
		footerHeight: number
		developedHeight: number
		pageWidth: number
		gutter: number
		hideLogo: boolean
		setHideLogo: React.Dispatch<React.SetStateAction<boolean>>
		disableScroll: (disable: boolean) => void
		mainGutter: number
	}
}

const layoutDefaultState: ILayoutContext = {
	layout: {
		heroHeaderHeight: 320,
		getHeroHeaderHeightNumber: () => 0,
		getHeroHeaderHeightCSS: () => "",
		setHeroHeaderHeight: () => {},
		navigationBarHeight: 48,
		creditsHeight: 32,
		footerHeight: 320,
		developedHeight: 48,
		pageWidth: 960,
		gutter: 16,
		hideLogo: true,
		setHideLogo: () => {},
		disableScroll: () => {},
		mainGutter: 64,
	},
}

export const LayoutContext =
	React.createContext<ILayoutContext>(layoutDefaultState)

interface ILayoutProvider {
	children: React.ReactNode
}

export const LayoutProvider: React.FC<ILayoutProvider> = ({ children }) => {
	const [heroHeaderHeight, setHeroHeaderHeight] = useState(
		layoutDefaultState.layout.heroHeaderHeight
	)
	const [navigationBarHeight, setNavigationBarHeight] = useState(
		layoutDefaultState.layout.navigationBarHeight
	)
	const [creditsHeight, setCreditsHeight] = useState(
		layoutDefaultState.layout.creditsHeight
	)
	const [footerHeight, setFooterHeight] = useState(
		layoutDefaultState.layout.footerHeight
	)
	const [developedHeight, setDevelopedHeight] = useState(
		layoutDefaultState.layout.developedHeight
	)
	const [pageWidth, setPageWidth] = useState(
		layoutDefaultState.layout.pageWidth
	)
	const [gutter, setGutter] = useState(layoutDefaultState.layout.gutter)
	const [hideLogo, setHideLogo] = useState(layoutDefaultState.layout.hideLogo)
	const [mainGutter, setMainGutter] = useState(
		layoutDefaultState.layout.mainGutter
	)

	// Event Context
	const { view } = useContext(EventContext)

	// HeroHeader
	// Set heroheader height
	useEffect(() => {
		if (view.display === DisplayType.Mobile) {
			// Set Full
			setHeroHeaderHeight("100vh")
		} else {
			// Set Small
			setHeroHeaderHeight(320)
		}
	}, [view.display])

	const getHeroHeaderHeightNumber = () => {
		return typeof heroHeaderHeight === "number"
			? heroHeaderHeight
			: parseFloat(heroHeaderHeight)
	}

	const getHeroHeaderHeightCSS = () => {
		return typeof heroHeaderHeight === "number"
			? heroHeaderHeight + "px"
			: heroHeaderHeight
	}

	const disableScroll = (disable: boolean) => {
		if (disable) {
			document.documentElement.style.setProperty("--disable-scroll", "hidden")
		} else {
			document.documentElement.style.setProperty("--disable-scroll", "visible")
		}
	}

	useEffect(() => {
		if (view.display !== DisplayType.Mobile) disableScroll(false)
	}, [view.display])

	const layout = {
		heroHeaderHeight,
		getHeroHeaderHeightNumber,
		getHeroHeaderHeightCSS,
		setHeroHeaderHeight,
		navigationBarHeight,
		creditsHeight,
		footerHeight,
		developedHeight,
		pageWidth,
		gutter,
		hideLogo,
		setHideLogo,
		disableScroll,
		mainGutter,
	}

	return (
		<LayoutContext.Provider value={{ layout }}>
			{children}
		</LayoutContext.Provider>
	)
}
