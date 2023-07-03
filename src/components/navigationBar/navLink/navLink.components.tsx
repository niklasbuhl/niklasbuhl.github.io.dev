import React, { useContext, useEffect, useState } from "react"
import { StyledButton, StyledLink } from "./navLink.styles"
import { EventContext } from "../../../context/event.context"
import { LayoutContext } from "../../../context/layout.context"
import { cssObjectToString } from "../../../utilities/cssObjectToString"

interface INavLink {
	to?: string
	onClick?: () => void
	children: React.ReactNode
}

const NavLink: React.FC<INavLink> = ({
	children,
	to = undefined,
	onClick = undefined,
}) => {
	const { view } = useContext(EventContext)
	const { layout } = useContext(LayoutContext)
	const [activeLinkStyle, setActiveLinkStyle] = useState({})
	const activeStyle = { color: "cyan" }

	const goToTop = () => {
		// Instant scroll to the last position
		window.scrollTo(0, view.scroll)

		// Smoothly scroll the rest of the distance smoothly
		window.scrollTo({
			top: layout.getHeroHeaderHeightNumber(),
			behavior: "smooth",
		})
	}

	// Set active style for Links
	useEffect(() => {
		// Above heroheader edge
		if (view.scroll < layout.getHeroHeaderHeightNumber() / 2) {
			setActiveLinkStyle({})

			// Below
		} else {
			setActiveLinkStyle(activeStyle)
		}
	}, [view.scroll])

	return (
		<React.Fragment>
			{" "}
			{to !== undefined ? (
				<StyledLink
					activeStyle={activeLinkStyle}
					partiallyActive={true}
					to={to}
					onClick={goToTop}
				>
					{children}
				</StyledLink>
			) : onClick !== undefined ? (
				<StyledButton
					onClick={onClick}
					// Above hero header
					active={view.scroll < layout.getHeroHeaderHeightNumber() / 2}
					activeStyle={cssObjectToString(activeStyle)}
				>
					{children}
				</StyledButton>
			) : (
				<>Error</>
			)}{" "}
		</React.Fragment>
	)
}

export default NavLink
