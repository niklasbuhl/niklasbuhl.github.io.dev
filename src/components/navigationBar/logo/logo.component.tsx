import React, { useContext, useEffect, useState } from "react"
import { LogoGraphic, LogoText, LogoWrapperLink } from "./logo.styles"
import { EventContext } from "../../../context/event.context"
import { LayoutContext } from "../../../context/layout.context"

interface ILogo {
	to: string
}

const Logo: React.FC<ILogo> = ({ to }) => {
	const {
		layout: { hideLogo, setHideLogo, getHeroHeaderHeightNumber },
	} = useContext(LayoutContext)
	const {
		view: { scroll },
		location,
	} = useContext(EventContext)

	// Check if the logo should be shown (on scroll) and only hide on front page when scrolled beyond "Hi I'm Niklas!".
	useEffect(() => {
		if (
			scroll <= 400 &&
			(location?.pathname === "/" || location?.pathname === undefined) // undefined at first load
		) {
			setTimeout(() => setHideLogo(true), 500)
		} else {
			setHideLogo(false)
		}
	}, [scroll, location?.pathname])

	const goToTop = () => {
		// Instant scroll to the last position
		window.scrollTo(0, scroll)

		// Smoothly scroll the rest of the distance smoothly
		window.scrollTo({ top: getHeroHeaderHeightNumber(), behavior: "smooth" })
	}

	return (
		<LogoWrapperLink to={to} onClick={goToTop}>
			{/* <LogoGraphic /> */}
			<LogoText hideLogo={hideLogo} pathname={location?.pathname || "/"}>
				Niklas Buhl
			</LogoText>
		</LogoWrapperLink>
	)
}

export default Logo
