type GalleryBoxProps = {
	img: string;
};

export default function GalleryBox({ img }: GalleryBoxProps) {
	return (
		<div className="box">
			<div className="image">
				<img src={img} alt="gallery" />
			</div>
		</div>
	);
}
