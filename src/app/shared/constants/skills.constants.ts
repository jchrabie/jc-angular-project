export const skills: Skill[] = [
    {
        name: 'Frameworks',
        content: [
            {
                title: 'Angular',
                icon: 'angular',
                imagePath: '/assets/angular.png',
                link: 'https://angular.io/',
                customIcon: true
            },
            {
                title: 'Angularjs',
                icon: 'angularjs',
                imagePath: '/assets/angularjs.png',
                link: 'https://angularjs.org/',
                customIcon: true
            },
            {
                title: 'Nodejs',
                icon: 'nodejs',
                imagePath: '/assets/node.jpg',
                link: 'https://nodejs.org/en/',
                customIcon: true
            },
            {
                title: 'Sass',
                icon: 'sass',
                imagePath: '/assets/sass.jpg',
                link: 'https://sass-lang.com/',
                customIcon: true
            },
            {
                title: 'Ionic',
                icon: 'ionic',
                imagePath: '/assets/ionic.png',
                link: 'https://ionicframework.com/',
                customIcon: true
            },
        ]
    },
    {
        name: 'Language',
        content: [
            {
                title: 'TypeScript',
                icon: 'typescript',
                imagePath: '/assets/typescript.png',
                link: 'https://www.typescriptlang.org/',
                customIcon: true
            },
            {
                title: 'JavaScript',
                icon: 'javascript',
                imagePath: '/assets/js.jpg',
                link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
                customIcon: true
            },
            {
                title: 'HTML',
                icon: 'html',
                imagePath: '/assets/html.jpg',
                link: 'https://developer.mozilla.org/fr/docs/Web/HTML',
                customIcon: true
            },
            {
                title: 'CSS',
                icon: 'css',
                imagePath: '/assets/css.png',
                link: 'https://developer.mozilla.org/fr/docs/Web/CSS',
                customIcon: true
            },
        ]
    },
    {
        name: 'Concept',
        content: [
            {
                title: 'Analytics',
                icon: 'analytics',
                imagePath: '/assets/analytics.jpg',
                link: 'https://analytics.google.com/analytics/web/#/',
                customIcon: true
            },
            {
                title: 'A11y',
                icon: 'accessibility',
                imagePath: '/assets/a11y.jpg',
                customIcon: true
            },
            {
                title: 'I18n',
                icon: 'language',
                imagePath: '/assets/i18n.jpg',
                link: 'https://angular.io/guide/i18n',
                customIcon: false
            },
            {
                title: 'Responsive',
                icon: 'devices',
                imagePath: '/assets/responsive.jpg',
                customIcon: false
            }
        ]
    },
    {
        name: 'Agile',
        content: [
            {
                title: 'Scrum',
                icon: 'scrum',
                imagePath: '/assets/scrum.jpg',
                customIcon: true
            },
            {
                title: 'SAFe',
                icon: 'safe',
                imagePath: '/assets/safe.jpg',
                link: 'https://www.scaledagileframework.com/',
                customIcon: true
            }
        ]
    }
];

export interface Skill {
    name: string;
    content: SkillContent[];
}

export interface SkillContent {
    title: string;
    icon: string;
    imagePath: string;
    link?: string;
    customIcon: boolean;
}
