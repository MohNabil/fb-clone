import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import {
	FlagOutlined,
	People,
	Message,
	Storefront,
	VideoLibrary,
	ExpandMore,
	AddBox,
} from "@material-ui/icons";
import styles from "./Side.module.css";
import { AuthContext } from "../../context/AuthContext";

export const Side = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className={styles.container}>
			<div className={styles.avatar}>
				<Avatar src={user.photoURL} />
				<h4>{user.displayName}</h4>
			</div>
			<div className={styles.options}>
				<AddBox />
				<h4>COVID-19</h4>
			</div>
			<div className={styles.options}>
				<FlagOutlined />
				<h4>Pages</h4>
			</div>
			<div className={styles.options}>
				<People />
				<h4>Friends</h4>
			</div>
			<div className={styles.options}>
				<Message />
				<h4>Messenger</h4>
			</div>
			<div className={styles.options}>
				<Storefront />
				<h4>Marketplace</h4>
			</div>
			<div className={styles.options}>
				<VideoLibrary />
				<h4>Videos</h4>
			</div>
			<div className={styles.options}>
				<ExpandMore />
				<h4>More</h4>
			</div>
		</div>
	);
};
