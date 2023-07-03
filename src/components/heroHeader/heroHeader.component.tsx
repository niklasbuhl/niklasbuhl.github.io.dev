import React, { useContext, useEffect } from "react"
import { Section } from "./heroHeader.styles"
import { LayoutContext } from "../../context/layout.context"
import { EventContext } from "../../context/event.context"

const HeroHeader: React.FC = () => {
	const { layout } = useContext(LayoutContext)
	const { view, location } = useContext(EventContext)

	// Scroll beyond heroheader
	useEffect(() => {
		if (
			location?.pathname === undefined ||
			view.scroll === layout.getHeroHeaderHeightNumber()
		) {
			// Instant scroll to the navigationbar on refresh
			window.scrollTo(0, layout.getHeroHeaderHeightNumber())
		} else {
			// Instant scroll to the last position
			window.scrollTo(0, view.scroll)

			// Smoothly scroll the rest of the distance smoothly
			window.scrollTo({
				top: layout.getHeroHeaderHeightNumber(),
				behavior: "smooth",
			})
		}
	}, [])

	return (
		<Section height={layout.getHeroHeaderHeightCSS()}>
			<h1>Hero Header</h1>
		</Section>
	)
}

export default HeroHeader
