import React, { useContext, useEffect } from "react"
import HeroHeader from "../../components/heroHeader/heroHeader.component"
import Credits from "../../components/credits/credits.component"
import Footer from "../../components/footer/footer.component"
import NavigationBar from "../../components/navigationBar/navigationBar.component"
import Developed from "../../components/developed/developed.component"
import PageContent from "../../components/pageContent/pageContent.component"
import { PageProps } from "gatsby"
import { EventContext } from "../../context/event.context"
import Main from "../../components/Main/Main.component"

interface IPage {
	children: React.ReactNode,
	// location: WindowLocation<LocationState>
	pageProps: PageProps
}

const Page: React.FC<IPage> = ({ children, pageProps }) => {

	const { setLocation } = useContext(EventContext)

	useEffect(() => {
		setLocation(pageProps.location)

		// console.log("page ", pageProps.location.pathname)

	}, [])

	return (
		<React.Fragment>
			<HeroHeader />
			<NavigationBar />
			<Main>
				{children}
			</Main>
			<Credits />
			<Footer />
			<Developed />
		</React.Fragment>
	)

}

export default Page