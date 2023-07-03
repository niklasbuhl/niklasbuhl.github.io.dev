import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Page from "../layout/pageLayout/pageLayout.component"
import { EventContext } from "../context/event.context"
import { useEffect } from "react"

const IndexPage: React.FC<PageProps> = (props) => {
	const { view, mouse } = React.useContext(EventContext)

	return (
		<Page pageProps={props}>
			<main>
				<h1>Hello, World! 🪐</h1>
				<p>Window Height {view.width}</p>
				<p>Window Width {view.height}</p>
				<p>Window Scroll {view.scroll}</p>
				<p>Window Display {view.display}</p>
				<p>Mouse X {mouse.position.x}</p>
				<p>Mouse Y {mouse.position.y}</p>
			</main>
		</Page>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Niklas Buhl</title>
