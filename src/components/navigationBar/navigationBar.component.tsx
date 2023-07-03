import React, { useContext, useEffect, useState } from "react"
import {
	Content,
	LeftContent,
	Nav,
	RightContent,
	MobileMenu,
} from "./navigationBar.styles"
import { LayoutContext } from "../../context/layout.context"
import NavLink from "./navLink/navLink.components"
import Logo from "./logo/logo.component"
import { DisplayType, EventContext } from "../../context/event.context"
import { MoreVertical, X } from "lucide-react"
import { StyledButton } from "./navLink/navLink.styles"

const NavigationBar: React.FC = (location) => {
	const { layout } = useContext(LayoutContext)
	const {
		view: { lastScroll, scroll, width, height, display },
	} = useContext(EventContext)
	const [hideNav, setHideNav] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const [background, setBackground] = useState({})
	const [textStyle, setTextStyle] = useState({})
	const [activeTextStyle, setActiveTextStyle] = useState({})

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	// Hide the nav bar when scrolling down. Show it again when scrolling up, and when the scroll is less then the hero header height.
	useEffect(() => {
		if (
			lastScroll > 0 &&
			scroll > layout.getHeroHeaderHeightNumber() + 100 &&
			!showMenu
		)
			setHideNav(true)
		else setHideNav(false)
	}, [lastScroll])

	const toggleMenu = () => {
		// Disable Scrolling when menu is shown
		if (display === DisplayType.Mobile) layout.disableScroll(!showMenu)

		if (scroll < layout.getHeroHeaderHeightNumber()) {
			const topPosition =
				typeof layout.heroHeaderHeight === "number"
					? layout.heroHeaderHeight
					: height

			window.scrollTo({
				top: topPosition,
				behavior: "smooth",
			})
		}

		// Toggle Show Menu
		setShowMenu(!showMenu)
	}

	return (
		<Nav
			hidden={hideNav}
			height={display === DisplayType.Mobile && showMenu ? "100vh" : "48px"}
		>
			{display === DisplayType.Mobile ? (
				<MobileMenu showMenu={showMenu} gutter={layout.gutter}>
					<Content
						width={layout.pageWidth}
						gutter={layout.gutter}
						display={display}
					>
						<Logo to="/" />
						<StyledButton onClick={toggleMenu}>
							{showMenu ? <X size={20} /> : <MoreVertical size={20} />}
						</StyledButton>
					</Content>
					{showMenu ? (
						<Content width={layout.pageWidth} gutter={layout.gutter}>
							Menu
						</Content>
					) : null}
				</MobileMenu>
			) : (
				<Content width={layout.pageWidth} gutter={layout.gutter}>
					<LeftContent>
						<Logo to="/" />
					</LeftContent>
					<RightContent>
						<NavLink to="/projects/">Projects</NavLink>
						<NavLink to="/articles/">Articles</NavLink>
						<NavLink onClick={scrollToTop}>Contact</NavLink>
					</RightContent>
				</Content>
			)}
		</Nav>
	)
}

export default NavigationBar
