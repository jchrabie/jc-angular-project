import CardContent from './CardContent';

export default class Card {
    private title: string;
    private subtitle: string;
    private imagePath: string;
    private imageAlt: string;
    private content: string | CardContent[];
    private icon: string;

    constructor(object?: any) {
        if (object) {
            this.title = object.title;
            this.subtitle = object.subtitle;
            this.imagePath = object.imagePath;
            this.imageAlt = object.imageAlt;
            this.content = object.content;
            this.icon = object.icon;
        }
    }
}
