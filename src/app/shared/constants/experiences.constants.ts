export const experiences: Experience[] = [
    {
        type: 'experiences.dsia',
        name: 'DSIA',
        url: '/blog/freelance',
        city: 'Nantes',
        startDate: '14/11/2019',
        endDate: '',
        postcode: '44',
        logo: 'assets/logo/dsia.png',
        chips: [
            'Angular',
            'TypeScript',
            'JavaScript',
            'Sass',
            'HTML5',
        ],
        showMore: true
    },
    {
        type: 'experiences.capgemini',
        name: 'Capgemini',
        url: '/blog/capgemini',
        city: 'Nantes',
        startDate: '01/10/2018',
        endDate: '10/10/2019',
        postcode: '44',
        logo: 'assets/logo/capgemini.png',
        chips: [
            'Angular',
            'TypeScript',
            'Node',
            'JavaScript',
            'Sass',
            'HTML5',
            'jQuery',
        ],
        showMore: true
    },
    {
        type: 'experiences.creative',
        name: 'Creative',
        city: 'Saint Herblain',
        url: '/blog/creative',
        startDate: '14/10/2016',
        endDate: '30/09/2018',
        postcode: '44',
        logo: 'assets/logo/creative.png',
        chips: [
            'Angular',
            'Node',
            'JavaScript',
            'TypeScript',
            'Sass',
            'HTML5',
            'Mustache',
            'jQuery',
            'Gulp',
            'WebPack'
        ],
        showMore: true
    },
    {
        type: 'experiences.sqli',
        name: 'SQLI',
        city: 'La Chapelle Sur Erdre',
        startDate: '03/2016',
        endDate: '10/2016',
        postcode: '44',
        logo: 'assets/logo/sqli.png',
        chips: [
            'AngularJs',
            'Angular',
            'Yeoman',
            'JavaScript',
            'TypeScript',
            'Node',
            'Sass',
            'React',
            'Joomla!',
            'HTML5',
            'CSS3',
            'BlockChain'
        ],
        showMore: true
    },
    {
        type: 'experiences.cgi',
        name: 'CGI',
        city: 'Carquefou',
        startDate: '02/2016',
        endDate: '03/2016',
        postcode: '44',
        logo: 'assets/logo/cgi.png',
        chips: [
            'Ionic',
            'AngularJs',
            'Node',
            'Jade',
            'Sass',
            'Cordova',
            'SQLite'
        ],
        showMore: true
    }
];

export interface Experience {
    type: string;
    name: string;
    url?: string;
    city: string;
    startDate: string;
    endDate: string;
    postcode: string;
    logo: string;
    chips: string[];
    showMore?: boolean;
}

export const chips = [].concat.apply([], experiences
    .map(experience => experience.chips))
    .filter((item, pos, self) => self.indexOf(item) === pos)
    .sort();
