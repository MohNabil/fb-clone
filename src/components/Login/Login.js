import React, { useContext } from "react";
import styles from "./Login.module.css";
import logo from "../../images/fb-logo.png";
import { auth, provider } from "../../firebase.config";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
	const { setUser } = useContext(AuthContext);
	const onLogin = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				// console.log(result.user);
				setUser(result.user);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src={logo} alt="" />
				<h1>Facebook</h1>
			</div>
			<div>
				<button className={styles.loginBtn} onClick={onLogin}>
					Sign In
				</button>
			</div>
		</div>
	);
};
