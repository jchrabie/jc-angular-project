export default class Link {
    private title: string;
    private icon: string;
    private url: string;

    constructor() {}

    getUrl(): string {
        return this.url;
    }

    getImagePath(): string {
        return this.icon;
    }

    getTitle(): string {
        return this.title;
    }

    setUrl(url): void {
        this.url = url;
    }

    setImagePath(icon): void {
        this.icon = icon;
    }

    setTitle(title): void {
        this.title = title;
    }
}
