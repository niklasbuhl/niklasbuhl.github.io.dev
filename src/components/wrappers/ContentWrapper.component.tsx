import styled, { FlattenSimpleInterpolation } from "styled-components"
import { DisplayType, EventContext } from "../../context/event.context"
import alingContent from "../../styles/alignContent"
import { useContext, useEffect } from "react"
import { Layers } from "lucide-react"
import { LayoutContext } from "../../context/layout.context"
import React from "react"
import {
	ContentWrapperDiv,
	ContentWrapperFooter,
	ContentWrapperMain,
	ContentWrapperNav,
} from "./ContentWrapper.styles"

export interface IContentWrapper {
	height?: string | number
	width?: string | number
	gutter?: number
	display?: DisplayType
	direction?: string // default: row
	vertical?: string // default: center
	horizontal?: string // default: center
	children?: React.ReactNode
	type?: string
	additionalCSS?: FlattenSimpleInterpolation | string
}

const ContentWrapper: React.FC<IContentWrapper> = ({
	height,
	width,
	gutter,
	display,
	direction,
	vertical,
	horizontal,
	children,
	type,
	additionalCSS,
}) => {
	const { layout } = useContext(LayoutContext)
	const { view } = useContext(EventContext)

	const props = {
		height,
		width: width ? width : layout.pageWidth,
		gutter: gutter ? gutter : layout.gutter,
		display: display ? display : view.display,
		direction,
		vertical,
		horizontal,
		additionalCSS,
	}

	// Return based on type
	return (
		<>
			{type === "nav" ? (
				<ContentWrapperNav props={props}>{children}</ContentWrapperNav>
			) : type === "main" ? (
				<ContentWrapperMain props={props}>{children}</ContentWrapperMain>
			) : type === "footer" ? (
				<ContentWrapperFooter props={props}>{children}</ContentWrapperFooter>
			) : (
				<ContentWrapperDiv props={props}>{children}</ContentWrapperDiv>
			)}
		</>
	)
}

export default ContentWrapper
