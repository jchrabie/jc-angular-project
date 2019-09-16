export const linkList: Link[] = [
    {
        type: 'sideNav.home',
        icon: 'home',
        url: '/',
    },
    {
        type: 'sideNav.experiences',
        icon: 'work',
        url: '/experiences',
    },
    {
        type: 'sideNav.skills',
        icon: 'code',
        url: '/skills',
    },
    {
        type: 'Blog',
        icon: 'speaker_notes',
        url: '/blog',
    },
    {
        type: 'sideNav.contact',
        icon: 'contacts',
        url: '/contact',
    },
    {
        type: 'sideNav.pdf',
        icon: 'picture_as_pdf',
        url: '/pdf',
    }
];

export interface Link {
    type: string;
    icon: string;
    url: string;
}
