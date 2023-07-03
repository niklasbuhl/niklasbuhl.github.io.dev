import { css } from "styled-components"
import { DisplayType } from "../context/event.context"

interface ICenterPage {
	width: number
	gutter: number
	display?: DisplayType
}

export const centerPage = css<ICenterPage>`
	display: flex;
	width: calc(
		100vw -
			${(props) =>
				(props.display === DisplayType.Mobile ? 0 : props.gutter) * 2}px
	);
	padding-left: ${(props) =>
		props.display === DisplayType.Mobile ? 0 : props.gutter}px;
	padding-right: ${(props) =>
		props.display === DisplayType.Mobile ? 0 : props.gutter}px;
	max-width: ${(props) => props.width - props.gutter * 2}px;
`

export const leftPage = css<ICenterPage>`
	${centerPage}
	justify-content: left;
`
