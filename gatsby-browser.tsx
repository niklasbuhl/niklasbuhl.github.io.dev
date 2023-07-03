import React, { useContext, useEffect } from "react"
import { LayoutContext, LayoutProvider } from "./src/context/layout.context"
import { EventProvider } from "./src/context/event.context"
import { GlobalStyles } from "./src/styles/globalStyles"

export const wrapRootElement = ({ element, location }) => {

	return (
		<EventProvider>
			<LayoutProvider>
				<GlobalStyles />
				{element}
			</LayoutProvider>
		</EventProvider>

	)
}

export const shouldUpdateScroll = ({ routerProps: { location } }) => {

	// const { layout } = useContext(LayoutContext)

	// if (location.hash !== "") {
	// 	return true
	// }
	// else {
	// 	window.scrollTo({ top: 320, behavior: "smooth" })
	// 	return false
	// }

	return false
}