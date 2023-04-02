import "../assets/css/features.css";
import ft_1 from "../assets/images/features-01.jpg";
import ft_2 from "../assets/images/features-02.jpg";
import ft_3 from "../assets/images/features-03.jpg";

export default function Features() {
	return (
		<div className="features" id="features">
			<h2 className="main-title">Features</h2>
			<div className="container">
				<div className="box quality">
					<div className="image-holder">
						<img src={ft_1} alt="" />
					</div>
					<h2>Quality</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
						hic veniam eligendi minima.
					</p>
					<a href="#">More</a>
				</div>
				<div className="box time">
					<div className="image-holder">
						<img src={ft_2} alt="" />
					</div>
					<h2>Time</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
						hic veniam eligendi minima.
					</p>
					<a href="#">More</a>
				</div>
				<div className="box passion">
					<div className="image-holder">
						<img src={ft_3} alt="" />
					</div>
					<h2>Passion</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
						hic veniam eligendi minima.
					</p>
					<a href="#">More</a>
				</div>
			</div>
		</div>
	);
}
