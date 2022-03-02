import React from "react"

export const MyButton = ({ text, variant, onClick }) => {
	return (
		<button className={variant} onClick={onClick}>
			{text}
		</button>
	)
}
