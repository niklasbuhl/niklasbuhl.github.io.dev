import { Link } from "gatsby"
import styled from "styled-components"
import { laserFont } from "../../../styles/fonts"

export const LogoText = styled.div<{
	hideLogo: boolean
	children: React.ReactNode
	pathname: string
}>`
	display: flex;
	calc(100% - 32px);
	padding: 16px;
	${laserFont}
	animation-timing-function: ease;
	transition: transform 0.7s;
	color: black;
	
	${(props) =>
		props.hideLogo && props.pathname === "/"
			? "transform: translateY(-96px);"
			: ""}
`

export const LogoGraphic = styled.div`
	display: flex;
	// height: 100%;
	overflow: hidden;
	padding: 16px;

	&::before {
		content: "n";
	}
`

export const LogoWrapperLink = styled(Link)<{
	children: React.ReactNode
	to: string
}>`
	display: flex;
	flex-direction: row;
	overflow: hidden;
	text-decoration: none;
`

/*

	${(props) =>
		props.hideLogo && props.pathname === "/"
			? "transform: translateY(-96px);"
			: ""}


	transform: translateY(${(props) =>
		props.hideLogo && props.pathname === "/" ? "-96px" : "0px"});

	
*/
