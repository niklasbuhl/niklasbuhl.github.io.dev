import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Page from "../../layout/pageLayout/pageLayout.component"

const NotFoundPage: React.FC<PageProps> = (props) => {
	return (
		<Page pageProps={props}>
			<span>This is not the page you are looking for...</span>
		</Page>
	)
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
