export default class Social {
    private title: string;
    private imagePath: string;
    private url: string;

    constructor() {}

    getUrl(): string {
        return this.url;
    }

    getImagePath(): string {
        return this.imagePath;
    }

    getTitle(): string {
        return this.title;
    }

    setUrl(url): void {
        this.url = url;
    }

    setImagePath(imagePath): void {
        this.imagePath = imagePath;
    }

    setTitle(title): void {
        this.title = title;
    }
}
