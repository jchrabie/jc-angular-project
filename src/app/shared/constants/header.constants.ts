export const headers: Header[] = [
    {
        type: '',
        title: 'Angular Freelance Developer',
        imagePath: 'https://www.joelchrabie.com/assets/logo.jpg',
        description: `Passionné et captivé depuis toujours par l'IT, j'ai entrepris une reconversion professionnelle dans le développement informatique. Fort de mes différentes expériences rayonnantes autour du framework Angular, j'ai décidé de me lancer en tant que Freelance sur la région Nantaise.`,
        canonical: 'https://www.joelchrabie.com'
    },
    {
        type: 'skills',
        title: 'Mes compétences',
        imagePath: 'https://www.joelchrabie.com/assets/skills.jpg',
        description: 'Voici les skills que j\'ai pu acquérir tout au long de mes différentes expériences',
        canonical: 'https://www.joelchrabie.com/skills'
    },
    {
        type: 'blog',
        title: 'Mon blog',
        imagePath: 'https://www.joelchrabie.com/assets/blog.jpg',
        description: 'Liste de mes articles',
        canonical: 'https://www.joelchrabie.com/blog'
    },
    {
        type: 'experiences',
        title: 'Mes expériences',
        imagePath: 'https://www.joelchrabie.com/assets/experiences.jpg',
        description: 'Visualisation de mes différentes expériences',
        canonical: 'https://www.joelchrabie.com/experiences'
    },
    {
        type: 'contact',
        title: 'Prise de contact',
        imagePath: 'https://www.joelchrabie.com/assets/contact.jpg',
        description: 'Coordonnées pour me rencontrer',
        canonical: 'https://www.joelchrabie.com/contact'
    },
];

export interface Header {
    type?: string;
    title: string;
    imagePath: string;
    description: string;
    canonical: string;
}

export function getHeaderByType(type: string): Header {
    return headers.find(header => header.type === type);
}
