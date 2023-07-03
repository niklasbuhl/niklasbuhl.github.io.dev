import styled from "styled-components"
import { pageSection } from "../../styles/pageSection"
import { centerPage } from "../../styles/centerPage"
import { ReactNode } from "react"
import { DisplayType } from "../../context/event.context"

interface INav {
	hidden: boolean
	height: string
}

export const Nav = styled.nav<INav>`
	${pageSection}
	position: absolute;
	height: ${(props) => props.height};
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	background-color: white;
	z-index: 1337;
	animation-timing-function: ease-in;
	transition: transform 0.2s, height 0.3s ease;
	${(props) => (props.hidden ? `transform: translateY(-96px);` : "")}
`

interface IContent {
	width: number
	gutter: number
	display?: DisplayType
}

export const Content = styled.div<IContent>`
	${centerPage}
	justify-content: space-between;
`
export const LeftContent = styled.div<{ children: ReactNode }>`
	display: flex;
`

export const RightContent = styled.div<{ children: ReactNode }>`
	display: flex;
`

export const MobileMenu = styled.div<{
	children: ReactNode
	gutter: number
	showMenu: boolean
}>`
	transition: height 0.3s ease;
	${(props) => (props.showMenu ? "height: 100vh" : "")}
	display: flex;
	flex-direction: column;
	width: 100vw;
	background: white;
	z-index: 1337;
`
