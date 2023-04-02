import "../assets/css/gallery.css";
import GalleryBox from "../components/GalleryBox";
import images from "../utils/galleryImages";

export default function Gallery() {
	const boxes = [];
	for (let i = 0; i < 6; i++)
		boxes.push(<GalleryBox key={i} img={images[i]} />);
	return (
		<div className="gallery" id="gallery">
			<h2 className="main-title">Gallery</h2>
			<div className="container">{boxes.map((box) => box)}</div>
		</div>
	);
}
