import React from "react"
import { Main } from "./pageContent.styles"

interface IPageContent {
    children: React.ReactNode
}

const PageContent: React.FC<IPageContent> = ({ children }) => {

    return (
        <Main>
            {children}
        </Main>
    )

}

export default PageContent