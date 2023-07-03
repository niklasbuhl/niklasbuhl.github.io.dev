import styled from "styled-components"
import { pageSection } from "../../styles/pageSection"
import { techFont } from "../../styles/fonts"

export const Section = styled.section`
	${pageSection}
	height: 64px;
	justift-content: center;
	align-items: center;
	${techFont}
	font-size: 1rem;
	background: lightgray;
`

export const CodeLink = styled.a`
	background: gray;
	margin-top: 4px;
	padding: 0px 4px 4px 4px;
	border-radius: 2px;
	color: black;
`
