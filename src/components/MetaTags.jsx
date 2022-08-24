import React, { useEffect } from 'react';

export const MetaTags = props => {
	useEffect(() => {
        console.log(props.title);
		document.title = props.title
		if (props.description) {
			document.querySelector('meta[name="description"]')
				.setAttribute("content", props.description)
		}
	}, [props.title, props.description])
}