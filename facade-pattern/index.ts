class VideoFile {
    readonly name: string;
    readonly codecType: string;

    constructor(name: string) {
        this.name = name;
        this.codecType = name.slice(name.indexOf('.') + 1);
    }
}

interface Codec {}

class MPEG4CompressionCodec implements Codec {
    type: string = 'mp4';
}

class OggCompressionCodec implements Codec {
    type: string = 'ogg';
}

class CodecFactory {
    static extract(file: VideoFile): Codec {
        const type = file.codecType;

        if (type === 'mp4') {
            console.log('CodecFactory: extracting mpeg audio...');
            return new MPEG4CompressionCodec();
        } else {
            console.log('CodecFactory: extracting ogg audio...');
            return new OggCompressionCodec();
        }
    }
}

class BitrateReader {
    static read(file: VideoFile, codec: Codec): VideoFile {
        console.log('BitrateReader: reading file...');
        return file;
    }

    static convert(buffer: VideoFile, codec: Codec): VideoFile {
        console.log('BitrateReader: writing file...');
        return buffer;
    }
}

class AudioMixer {
    fix(result: VideoFile): any {
        console.log('AudioMixer: fixing audio...');
        return new Object('tmp');
    }
}

class VideoConversionFacade {
    convertVideo(fileName: string, format: string): File {
        console.log('VideoConversionFacade: conversion started.');

        const file = new VideoFile(fileName);
        const sourceCodec = CodecFactory.extract(file);

        const destinationCodec: Codec =
            format === 'mp4'
                ? new OggCompressionCodec()
                : new MPEG4CompressionCodec();

        const buffer = BitrateReader.read(file, sourceCodec);
        const intermediateResult = BitrateReader.convert(
            buffer,
            destinationCodec,
        );

        console.log('VideoConversionFacade: conversion completed.');

        return new AudioMixer().fix(intermediateResult);
    }
}

const converter = new VideoConversionFacade();
const mp4Video = converter.convertVideo('youtubevideo.ogg', 'mp4');
