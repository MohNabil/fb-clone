import React from "react";
import { Avatar } from "@material-ui/core";
import styles from "./Story.module.css";

export const Story = ({ src, title, bgImage }) => {
	return (
		<div
			className={styles.container}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Avatar src={src} className={styles.avatar} />
			<p>{title}</p>
		</div>
	);
};
