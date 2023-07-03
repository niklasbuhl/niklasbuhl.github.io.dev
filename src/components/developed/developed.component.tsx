import React, { useContext } from "react"
import { CodeLink, Section } from "./developed.styles"
import { Coffee, Heart, Keyboard, Pencil } from "lucide-react"
import { DisplayType, EventContext } from "../../context/event.context"

const Developed: React.FC = () => {
	const { view } = useContext(EventContext)

	const iconStroke = 2
	const iconStyle = { marginTop: "2px" }
	return (
		<Section>
			{view.display !== DisplayType.Mobile ? (
				<React.Fragment>
					<Pencil style={iconStyle} strokeWidth={iconStroke} size={16} />
					&nbsp;and&nbsp;
					<Keyboard style={iconStyle} strokeWidth={iconStroke} size={16} />
					&nbsp;with&nbsp;
					<Heart style={iconStyle} strokeWidth={iconStroke} size={16} />
					&nbsp;+&nbsp;
					<Coffee style={iconStyle} strokeWidth={iconStroke} size={16} />
					&nbsp;by @niklasbuhl&nbsp;
					<CodeLink href="">/src</CodeLink>
				</React.Fragment>
			) : (
				<React.Fragment>
					<Keyboard style={iconStyle} strokeWidth={iconStroke} size={16} />
					&nbsp;by @niklasbuhl&nbsp;
				</React.Fragment>
			)}
		</Section>
	)
}

export default Developed
