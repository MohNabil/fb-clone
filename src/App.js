import React, { useContext } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Side } from "./components/Sidebar.js/Side";
import { Feed } from "./components/Feed/Feed";
import { Widget } from "./components/Widget/Widget";
import { Login } from "./components/Login/Login";
import { AuthContext } from "./context/AuthContext";

function App() {
	const { user } = useContext(AuthContext);
	return (
		<div className="App">
			{user ? (
				<>
					<Header />
					<div className="app-body">
						<Side />
						<Feed />
						<Widget />
					</div>
				</>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
