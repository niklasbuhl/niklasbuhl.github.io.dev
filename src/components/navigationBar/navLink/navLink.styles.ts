import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { headerFont } from "../../../styles/fonts"

export const NavLinkWrapper = styled.div`
	display: flex;
`

const NavLinkStyle = css`
	display: flex;
	text-decoration: none;
	border: none;
	background: none;
	// user-select: none;
	padding: 16px;
	// margin: 16px;
	${headerFont}

	// font-family: Helvetica;
	font-weight: 700;
	font-size: 1rem;
	color: black;
	height: calc(100% - 32px);
	align-items: center;
`

export const StyledLink = styled(Link)`
	${NavLinkStyle}
`

interface IStyledButton {
	active?: boolean
	activeStyle?: string
}

export const StyledButton = styled.button<IStyledButton>`
	${NavLinkStyle}
	height: 48px;
	cursor: pointer;
	${(props) => (props.active ? props.activeStyle : "")}
`
