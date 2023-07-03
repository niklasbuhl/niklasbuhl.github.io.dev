import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Page from "../../layout/pageLayout/pageLayout.component";

const ProjectsPage: React.FC<PageProps> = (props) => {
	return (
		<Page pageProps={props}>
			<main>
				<h1>Projects</h1>
			</main>
		</Page>
	);
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects</title>;
