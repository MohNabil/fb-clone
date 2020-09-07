import React from "react";
import styles from "./Post.module.css";
import { Avatar } from "@material-ui/core";
import { ThumbUp, ChatBubbleOutline, Share } from "@material-ui/icons";

export const Post = ({ profilePic, name, time, message, image }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Avatar src={profilePic} />
				<div className={styles.info}>
					<p>{name}</p>
					<p>{new Date(time?.toDate()).toUTCString()}</p>
				</div>
			</div>
			<div className={styles.message}>
				<p>{message}</p>
			</div>
			<div className={styles.image}>
				<img src={image} alt="" />
			</div>
			<div className={styles.bottom}>
				<div className={styles.options}>
					<ThumbUp />
					<h4>Like</h4>
				</div>
				<div className={styles.options}>
					<ChatBubbleOutline />
					<h4>Comment</h4>
				</div>
				<div className={styles.options}>
					<Share />
					<h4>Share</h4>
				</div>
			</div>
		</div>
	);
};
