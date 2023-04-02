type BoxProps = {
	img: string;
	title: string;
	text: string;
};

export default function Box({ img, title, text }: BoxProps) {
	return (
		<div className="box">
			<img src={img} alt="article" />
			<div className="content">
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
			<div className="info">
				<a href="">Read More</a>
				<i className="fas fa-long-arrow-alt-right" />
			</div>
		</div>
	);
}
