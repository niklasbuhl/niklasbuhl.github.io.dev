import styled, { FlattenSimpleInterpolation } from "styled-components"
// import { DisplayType } from "../../context/event.context";
import React from "react"

export interface IPositionWrapperDiv {
	sticky?: string
	background?: string
	zIndex?: number
	addCSS?: FlattenSimpleInterpolation
	// display?: DisplayType
}

// Position

export const PositionWrapperDiv = styled.div<IPositionWrapperDiv>`
	// Display
	display: flex;
	justify-content: center;
	flex-direction: row;

	// Position
	${(props) =>
		props.sticky !== undefined ? "position: sticky;" : "position: relative;"}

	${(props) => (props.sticky === "top" ? "top: 0;" : null)}
	${(props) => (props.sticky === "bottom" ? "bottom: 0;" : null)}

	// Background
	${(props) => (props.background ? props.background : null)}

	// Z-Index
	z-index: ${(props) => (props.zIndex !== undefined ? props.zIndex + "px;" : 0)};

	// Additional CSS
	${(props) => props.addCSS}
`

export interface IPositionWrapper {
	sticky?: string
	background?: string
	zIndex?: number
	// display?: DisplayType
	children?: React.ReactNode
	addCSS?: FlattenSimpleInterpolation
}

const PositionWrapper: React.FC<IPositionWrapper> = ({
	sticky,
	background,
	zIndex,
	children,
	addCSS,
}) => {
	return (
		<PositionWrapperDiv
			sticky={sticky}
			background={background}
			zIndex={zIndex ? zIndex : 0}
			addCSS={addCSS}
		>
			{children}
		</PositionWrapperDiv>
	)
}

export default PositionWrapper
