import React, { useState, useEffect } from "react";
import styles from "./Feed.module.css";
import { Story } from "./Story/Story";
import image1 from "../../images/cherry.jpg";
import image2 from "../../images/fig.jpg";
import image3 from "../../images/apple.jpg";
import image4 from "../../images/banana.jpg";
import { MessageSender } from "./MessageSender/MessageSender";
import { Post } from "./Post/Post";
import db from "../../firebase.config";

export const Feed = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const getData = async () => {
			db.collection("Posts").onSnapshot(function (querySnapshot) {
				var posts = [];
				querySnapshot.forEach(function (doc) {
					posts.push({ id: doc.id, data: doc.data() });
				});
				posts.sort((x, y) => y.data.time - x.data.time);
				// console.log(posts);
				setPosts(posts);
			});
		};
		getData();
	}, []);
	return (
		<div className={styles.container}>
			<div className={styles.stories}>
				<Story title="Mohamed" bgImage={image1} />
				<Story title="Ahmed" bgImage={image2} />
				<Story title="Ashraf" bgImage={image3} />
				<Story title="Ayman" bgImage={image4} />
				<Story title="Alaa" bgImage={image4} />
			</div>
			<div className={styles.sender}>
				<MessageSender />
			</div>
			<div className={styles.post}>
				{posts.map((post) => {
					return (
						<Post
							key={post.id}
							name={post.data.name}
							time={post.data.time}
							image={post.data.image}
							message={post.data.message}
							profilePic={post.data.profilePic}
						/>
					);
				})}
			</div>
		</div>
	);
};
