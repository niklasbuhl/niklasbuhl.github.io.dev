import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import Page from "../../layout/pageLayout/pageLayout.component"

const ArticlesPage: React.FC<PageProps> = (props) => {
	return (
		<Page pageProps={props}>
			<main>
				<h1>Articles</h1>
			</main>
		</Page>
	)
}

export default ArticlesPage

export const Head: HeadFC = () => <title>Articles</title>
