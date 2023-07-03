import React from "react"
import { Section } from "./credits.styles"

const Credits: React.FC = () => {

    return (
        <Section>
            <span>Niklas Buhl © {new Date().getFullYear()}</span>
        </Section>
    )

}

export default Credits


