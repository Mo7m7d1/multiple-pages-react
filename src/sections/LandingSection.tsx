import "../assets/css/LandingSection.css";
import landingImage from "../assets/images/landing-image.png";

export default function LandingSection() {
	return (
		<div className="landing">
			<div className="container">
				<div className="text">
					<h1>Welcome, To Almo World</h1>
					<p>
						Here Iam gonna share everything about my life. Books Iam reading,
						Games Iam Playing, Stories and Events
					</p>
				</div>
				<div className="image">
					<img src={landingImage} alt="" />
				</div>
			</div>
			<a href="#articles" className="go-down">
				<i className="fas fa-angle-double-down fa-2x"></i>
			</a>
		</div>
	);
}
