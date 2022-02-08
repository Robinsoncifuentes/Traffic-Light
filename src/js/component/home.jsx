import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("dark");
	/*const [selectedColorRed, setSelectedColorRed] = useState("dark");
	const [selectedColorYellow, setSelectedColorYellow] = useState("dark");*/

	return (
		<>
			<div className="stick"></div>
			<div className="semaforo">
				<div
					onClick={() => setSelectedColor("danger")}
					className={
						"redlight" +
						(selectedColor === "danger" ? " brillored" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("warning")}
					className={
						"yellowlight" +
						(selectedColor === "warning" ? " brilloyellow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("success")}
					className={
						"greenlight" +
						(selectedColor === "success" ? " brillogreen" : "")
					}></div>
			</div>
		</>
	);
};

export default Home;
