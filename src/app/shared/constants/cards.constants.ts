export const cards: Card[] = [
    {
        'type': 'design',
        'icon': 'layers',
        'imagePath': '/assets/design.jpg',
        'showMore': false
    },
    {
        'type': 'i18n',
        'icon': 'translate',
        'imagePath': '/assets/i18n.jpg',
        'showMore': false
    },
    {
        'type': 'responsive',
        'icon': 'devices',
        'imagePath': '/assets/responsive.jpg',
        'showMore': false
    },
    {
        'type': 'a11y',
        'icon': 'accessible_forward',
        'imagePath': '/assets/a11y.jpg',
        'showMore': false
    }
];

export interface Card {
    type: string;
    icon: string;
    imagePath: string;
    showMore: boolean;
}
