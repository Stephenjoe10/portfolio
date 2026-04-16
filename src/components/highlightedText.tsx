export const HighLightedText = ({ text, highlightStyle, br }: {
	text: string
	highlightStyle?: string
	br?: true
}) => {
	const split = br ? text.split("<br>") : text.split("#")
	return (
		split?.map((t, index) => (
			<span key={index} >
				{t[0] != "*" ?
					t :
					<span className={highlightStyle}>{t?.slice(1)}</span>
				}
				{br && < br />}
			</span>
		))
	)
}