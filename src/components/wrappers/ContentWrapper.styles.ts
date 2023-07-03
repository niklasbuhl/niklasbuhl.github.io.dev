import styled, { FlattenSimpleInterpolation } from "styled-components"
import { DisplayType } from "../../context/event.context"
import alingContent from "../../styles/alignContent"

export interface IContentWrapperDiv {
	props: {
		height?: string | number
		width: string | number
		gutter: number
		display: DisplayType
		direction?: string // default: row
		vertical?: string // default: center
		horizontal?: string // default: center
		additionalCSS?: FlattenSimpleInterpolation | string
	}
}

const getCalcWidthString = (
	width: number | string,
	display: DisplayType,
	gutter: number
) => {
	let string = ""

	if (typeof width === "number") string += width + "px"
	else string += width

	if (display !== DisplayType.Mobile) string += " - 2 * " + gutter + "px"

	return string
}

const additionalCSS = (
	css: FlattenSimpleInterpolation | string | undefined
) => {
	console.log("additionalCSS", css)

	return css
}

export const ContentWrapperDiv = styled.div<IContentWrapperDiv>`
	// Display
	display: flex;

	// Height
	height: ${(props) =>
		typeof props.props.height === "number"
			? props.props.height + "px"
			: props.props.height};

	// Width
	// use gutter on all other devices than mobile
	width: calc(
		${(props) =>
			getCalcWidthString(
				props.props.width,
				props.props.display,
				props.props.gutter
			)}
	);

	// Gutter (padding)
	${(props) =>
		props.props.display !== DisplayType.Mobile
			? "margin-left: " + props.props.gutter + "px;"
			: null}
	${(props) =>
		props.props.display !== DisplayType.Mobile
			? "margin-right: " + props.props.gutter + "px;"
			: null}

	// Position Content (direction, vertical, horizontal)
	${alingContent}

	// Additional CSS
	${(props) => props.props.additionalCSS}
`

export const ContentWrapperMain = styled(ContentWrapperDiv).attrs({
	as: "main",
})``
export const ContentWrapperNav = styled(ContentWrapperDiv).attrs({
	as: "nav",
})``
export const ContentWrapperFooter = styled(ContentWrapperDiv).attrs({
	as: "footer",
})``
