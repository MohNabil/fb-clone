import React from "react";

export const Widget = () => {
	return (
		<div>
			<iframe
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftraversymedia&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
				width="340"
				height="100%"
				style={{ border: "none", overflow: "hidden", marginLeft: 30 }}
				scrolling="no"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
				title="Traversy media page"
			></iframe>
		</div>
	);
};
