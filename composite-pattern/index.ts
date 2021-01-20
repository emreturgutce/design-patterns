abstract class AbstractFile {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract ls(): void;
}

class FileComposite extends AbstractFile {
    constructor(name: string) {
        super(name);
    }

    ls(): void {
        console.log(this.name);
    }
}

class DirectoryComposite extends AbstractFile {
    private files: AbstractFile[] = [];

    constructor(name: string) {
        super(name);
    }

    add(obj: AbstractFile): void {
        this.files.push(obj);
    }

    ls(): void {
        console.log('Listing directory');

        for (const file of this.files) {
            file.ls();
        }

        console.log('Directory listed');
    }
}

const musicDir: DirectoryComposite = new DirectoryComposite('musics');
const movieDir: DirectoryComposite = new DirectoryComposite('movies');

const novemberRain: FileComposite = new FileComposite('november-rain.mp3');
const enterSandman: FileComposite = new FileComposite('enter-sandman.mp3');
const imagine: FileComposite = new FileComposite('imagine.mp3');
const lordOfTheRings: FileComposite = new FileComposite(
    'lord-of-the-rings.mp4',
);
const starWars: FileComposite = new FileComposite('star-wars.mp4');

musicDir.add(novemberRain);
musicDir.add(enterSandman);
musicDir.add(imagine);
musicDir.ls();

movieDir.add(lordOfTheRings);
movieDir.add(starWars);
movieDir.ls();
