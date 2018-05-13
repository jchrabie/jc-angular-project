export default class CardContent {
    private content: string;
    private icon: string;
    private title: string;

    constructor(title, content, icon) {
        this.content = content;
        this.icon = icon;
        this.title = title;
    }
}
