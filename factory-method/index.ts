interface ImageReader {
    getDecodeImage(): DecodedImage;
}

class DecodedImage {
    private image: string;

    constructor(image: string) {
        this.image = image;
    }

    toString() {
        return `${this.image}: is decoded`;
    }
}

class GifReader implements ImageReader {
    private decodedImage: DecodedImage;

    constructor(image: string) {
        this.decodedImage = new DecodedImage(image);
    }

    getDecodeImage(): DecodedImage {
        return this.decodedImage;
    }
}

class JpegReader implements ImageReader {
    private decodedImage: DecodedImage;

    constructor(image: string) {
        this.decodedImage = new DecodedImage(image);
    }

    getDecodeImage(): DecodedImage {
        return this.decodedImage;
    }
}

class PngReader implements ImageReader {
    private decodedImage: DecodedImage;

    constructor(image: string) {
        this.decodedImage = new DecodedImage(image);
    }

    getDecodeImage() {
        return this.decodedImage;
    }
}

enum ImageTypes {
    gif = 'gif',
    jpeg = 'jpeg',
    png = 'png',
}

const image: ImageTypes = ImageTypes.png;
let reader: ImageReader = new PngReader(image);

console.log(reader.getDecodeImage());
