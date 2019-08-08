

export default class Card {
    private _type: string;
    private _icon: string;
    private _imagePath: string;
    private _showMore: boolean;

    constructor(object?: any) {
        if (object) {
            this._type = object.type;
            this._icon = object.icon;
            this._imagePath = object.imagePath;
            this._showMore = object.showMore;
        }
    }

    get type(): string {
        return this._type;
    }

    get icon(): string {
        return this._icon;
    }

    get imagePath(): string {
        return this._imagePath;
    }

    get showMore(): boolean {
        return this._showMore;
    }
}
