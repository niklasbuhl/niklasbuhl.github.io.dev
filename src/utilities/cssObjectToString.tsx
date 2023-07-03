export const cssObjectToString = (styleObj: object): string => {
	const strStyle: string = Object.entries(styleObj)
		.map(([k, v]) => {
			k = k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
			return `${k}:${v}`
		})
		.join(";")

	return strStyle
}
