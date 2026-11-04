import { Cloudinary } from '@cloudinary/url-gen';
import { limitFit } from '@cloudinary/url-gen/actions/resize';

const cloudinary = new Cloudinary({ cloud: { cloudName: 'dehtondds' } });

// Avoid decoding original-size images on memory-constrained phones.
export default function portfolioImage(path, width = 1280) {
    return cloudinary.image(path)
        .format('auto')
        .quality('auto')
        .resize(limitFit().width(width));
}
