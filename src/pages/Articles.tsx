import "../assets/css/articles.css";

import Box from "../components/Box";
import { images } from "../utils";

export default function Articles() {
	const boxes = [];
	for (let i = 0; i < 8; i++)
		boxes.push(
			<Box
				key={i}
				img={images[i]}
				title={"Test"}
				text={
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit"
				}
			/>
		);

	return (
		<div className="articles" id="articles">
			<h2 className="main-title">Articles</h2>
			<div className="container">{boxes.map((box) => box)}</div>
		</div>
	);
}
