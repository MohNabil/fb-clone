import React, { useContext } from "react";
import styles from "./Header.module.css";
import {
	Facebook,
	Search,
	Home,
	Flag,
	Subscriptions,
	Storefront,
	SupervisedUserCircle,
	Forum,
	Add,
	NotificationsActive,
	ExpandMore,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className={styles.header}>
			<div className={styles.headerRight}>
				<Facebook style={{ fontSize: 50, fill: "#1278F2" }} />
				<div className={styles.searchContainer}>
					<Search />
					<input
						type="text"
						className={styles.searchInput}
						placeholder="Search Facebook"
					/>
				</div>
			</div>

			<div className={styles.headerMiddle}>
				<div className={`${styles.options} ${styles.active}`}>
					<Home style={{ fontSize: 30, fill: "gray" }} />
				</div>
				<div className={styles.options}>
					<Flag style={{ fontSize: 30, fill: "gray" }} />
				</div>
				<div className={styles.options}>
					<Subscriptions style={{ fontSize: 30, fill: "gray" }} />
				</div>
				<div className={styles.options}>
					<Storefront style={{ fontSize: 30, fill: "gray" }} />
				</div>
				<div className={styles.options}>
					<SupervisedUserCircle style={{ fontSize: 30, fill: "gray" }} />
				</div>
			</div>

			<div className={styles.headerLeft}>
				<div className={styles.info}>
					<Avatar src={user.photoURL} />
					<h4>{user.displayName}</h4>
				</div>
				<IconButton>
					<Add />
				</IconButton>
				<IconButton>
					<Forum />
				</IconButton>
				<IconButton>
					<NotificationsActive />
				</IconButton>
				<IconButton>
					<ExpandMore />
				</IconButton>
			</div>
		</div>
	);
};
