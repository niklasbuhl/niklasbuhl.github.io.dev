import React, { useContext, useEffect } from "react"
import PositionWrapper from "../wrappers/PositionWrapper"
import { mainContentWrapperCSS, mainPositionWrapperCSS } from "./Main.styles"
import { LayoutContext } from "../../context/layout.context"
import ContentWrapper from "../wrappers/ContentWrapper.component"

interface IMain {
	children: React.ReactNode
}

const Main: React.FC<IMain> = ({ children }) => {
	const { layout } = useContext(LayoutContext)

	return (
		<PositionWrapper addCSS={mainContentWrapperCSS}>
			<ContentWrapper
				additionalCSS={mainPositionWrapperCSS}
				height={`calc(100vh - 2 * ${layout.mainGutter}px )`}
				type="main"
			>
				{children}
			</ContentWrapper>
		</PositionWrapper>
	)
}

export default Main
