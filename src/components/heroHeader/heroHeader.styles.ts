import styled from "styled-components"
import { pageSection } from "../../styles/pageSection"

interface ISection {
	height: string
}

export const Section = styled.section<ISection>`
	${pageSection}
	transition: transform 0.2s, height 0.3s ease;
	height: ${(props) => props.height};
	background: purple;
	z-index: 1337;
	position: relative;
`
