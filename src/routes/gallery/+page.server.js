import fs from 'fs';
import path from 'path';

export function load() {
	const galleryPath = path.join(process.cwd(), 'static/gallery');

	const images = fs
		.readdirSync(galleryPath)
		.filter(file =>
			/\.(jpg|jpeg|png|webp|gif)$/i.test(file)
		);

	return {
		images
	};
}
