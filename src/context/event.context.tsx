import { PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import { WindowLocation } from "@reach/router" // These come from `@types/reach__router`
// import { WindowLocation } from "@reach/router" // These come from `@types/reach__router`

export enum DisplayType {
	Mobile = "mobile",
	Tablet = "tablet",
	Desktop = "desktop",
	Wide = "wide",
}

interface IEventContext {
	view: {
		height: number
		width: number
		scroll: number
		lastScroll: number
		display: DisplayType // mobile, tablet, desktop, wide
	}
	mouse: {
		position: {
			x: number
			y: number
		}
	}
	location: WindowLocation | undefined
	setLocation: React.Dispatch<React.SetStateAction<WindowLocation | undefined>>
}

const eventDefaultState = {
	//
	view: {
		height: 0,
		width: 0,
		scroll: 0,
		lastScroll: 0,
		display: DisplayType.Desktop,
	},
	mouse: {
		position: {
			x: 0,
			y: 0,
		},
	},
	location: undefined,
	setLocation: () => {},
}

export const EventContext =
	React.createContext<IEventContext>(eventDefaultState)

interface IEventProvider {
	children: React.ReactNode
	// inputLocation: WindowLocation
}

export const EventProvider: React.FC<IEventProvider> = ({ children }) => {
	const [view, setview] = useState(eventDefaultState.view)
	const [mouse, setMouse] = useState(eventDefaultState.mouse)
	const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)
	const [location, setLocation] = useState<WindowLocation>()

	const handleMousePosition = (event: MouseEvent) => {
		let mouseX = event.clientX
		let mouseY = event.clientY

		setMouse({
			position: {
				y: mouseY,
				x: mouseX,
			},
		})
	}

	const handleScroll = () => {
		let scroll = window.scrollY

		setview((prevState) => ({
			...prevState,
			scroll: scroll,
		}))
	}

	const handleResize = () => {
		let width = window.innerWidth
		let height = window.innerHeight

		// console.log(view)

		let display: DisplayType = DisplayType.Desktop

		switch (true) {
			case width < 400:
				display = DisplayType.Mobile
				break
			case width < 800:
				display = DisplayType.Tablet
				break
			case width < 1200:
				display = DisplayType.Desktop
				break
			case width < 2000:
				display = DisplayType.Wide
				break
			default:
				display = DisplayType.Desktop
				break
		}

		setview((prevState) => ({
			...prevState,
			width: width,
			height: height,
			display: display,
		}))
	}

	useEffect(() => {
		// console.log(view)

		let lastScroll = view.scroll - lastScrollPosition

		setLastScrollPosition(view.scroll)

		setview((prevState) => ({
			...prevState,
			lastScroll: lastScroll,
		}))
	}, [view.scroll])

	useEffect(() => {
		// console.log("Initialize EventContext")

		handleScroll()
		handleResize()

		try {
			window.addEventListener("resize", handleResize)
			window.addEventListener("scroll", handleScroll)
			window.addEventListener("mousemove", handleMousePosition)
		} catch (error) {
			console.log(error)
		}
		return () => {
			// console.log("Destruct")

			try {
				window.removeEventListener("resize", handleResize)
				window.removeEventListener("scroll", handleScroll)
				window.removeEventListener("mousemove", handleMousePosition)
			} catch (error) {
				console.log(error)
			}
		}
	}, [])

	return (
		<EventContext.Provider
			value={{
				view,
				mouse,
				location,
				setLocation,
			}}
		>
			{children}
		</EventContext.Provider>
	)
}
