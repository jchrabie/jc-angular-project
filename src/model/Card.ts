export default class Card {
    private title: string;
    private subtitle: string;
    private imagePath: string;
    private imageAlt: string;
    private content: string;

    constructor() {
        
    }

    getSubtitle(): string {
        return this.subtitle;
    }

    getImagePath(): string {
        return this.imagePath;
    }

    getImageAlt(): string {
        return this.imageAlt;
    }

    getContent(): string {
        return this.content;
    }

    getTitle(): string {
        return this.title;
    }

    setSubtitle(subtitle): void {
        this.subtitle = subtitle;
    }

    setImagePath(imagePath): void {
        this.imagePath = imagePath;
    }

    setImageAlt(imageAlt): void {
        this.imageAlt = imageAlt;
    }

    setContent(content): void {
        this.content = content;
    }

    setTitle(title): void {
        this.title = title;
    }
}
