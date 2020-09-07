import React, { useState, useContext } from "react";
import styles from "./MessageSender.module.css";
import { Avatar } from "@material-ui/core";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";
import { AuthContext } from "../../../context/AuthContext";
import db from "../../../firebase.config";
import firebase from "firebase";

export const MessageSender = () => {
	const [message, setMessage] = useState("");
	const [image, setImage] = useState("");
	const { user } = useContext(AuthContext);
	const onSubmitHandler = (e) => {
		e.preventDefault();
		db.collection("Posts")
			.add({
				message: message,
				image: image,
				profilePic: user.photoURL,
				name: user.displayName,
				time: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then(() => console.log("successfully added to db"))
			.catch((err) => console.log(err));
		setMessage("");
		setImage("");
	};
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Avatar src={user.photoURL} />
				<form>
					<input
						placeholder={`What is on your mind ${user.displayName}?`}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<input
						placeholder="image Url"
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
					<button
						type="submit"
						className={styles.btnSubmit}
						onClick={onSubmitHandler}
					>
						Post
					</button>
				</form>
			</div>
			<div className={styles.bottom}>
				<div className={styles.options}>
					<Videocam style={{ fill: "red" }} />
					<h3>Live Video</h3>
				</div>
				<div className={styles.options}>
					<PhotoLibrary style={{ fill: "green" }} />
					<h3>Photo/Video</h3>
				</div>
				<div className={styles.options}>
					<InsertEmoticon style={{ fill: "orange" }} />
					<h3>Feelings/Activity</h3>
				</div>
			</div>
		</div>
	);
};
