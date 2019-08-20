export const blog: Article[] = [
    {
        template: 'capgemini',
        title: 'Capgemini - Nantes',
        image: 'assets/cap-locaux.png',
        dates: 'Octobre 2018 - Octobre 2019',
        projects: [
            {
                title: 'Projet E-commerce',
                id: 'ecommerce',
                date: '5 Mois (en tout 2 ans et 1 mois)',
                // tslint:disable-next-line:max-line-length
                content: `<p>Après près de deux ans passé en prestation chez Capgemini avec Creative, et satisfait du travail que j'ai réalisé, Capgémini m'a proposé de me recruter en direct.</p><p>J'ai dans un premier temps continué sur le projet sur lequel je travaillais précédemment en prestation avec Creative, mes missions étaient les suivantes :</p><ul> <li>Développement et estimation des features Angular / Node / JS</li><li>Revue de codes de mes collègues</li><li>Live design dans les locaux du client</li><li>Mise en conformité avec la norme RGAAA (Accessibilité)</li><li>Envoie des données clientes via GTM (Analytics)</li><li>Internationalisation Angular AOT</li><li>Intégration web en Sass</li></ul><p>Le projet qui était initialement constitué d'une équipe de 10 personnes, c'est beaucoup renforcé pour atteindre les 90 personnes en deux ans, cette croissance étant nécessaire au vu de la complexité du site de E-Commerce - plus de <b>25</b> technos utilisées (Angular, Node, PHP, Java, Akeneo, Symfony2...) dont deux CMS (Drupal 7 et Magento 1).</p><p>Étant Agile, nous avons dû par conséquent faire évoluer la méthodologie d'un simple SCRUM vers une agilité à l'echelle SAFE.</p><p>À l'init de ce projet, nous utilisions le front délivré par Drupal en JS natif avec la librairie jQuery, pour améliorer les performances, la maintenabilité et réaliser des TUs, nous avons décidé avec le client, après plus d'un an et demie, de réaliser une refonte globale du Front en Angular avec un Middleware NodeJs.<br>J'ai d'ailleurs été en charge de la mise en place du socle Angular Node avec un architect</p><p>Fort de cette expérience enrichissante et souhaitant de nouveaux challenges, j'ai demandé à changer de projet afin de voguer vers de nouvelles aventures</p>`
            },
            {
                title: 'Air France KLM',
                id: 'afklm',
                date: '2 jours',
                // tslint:disable-next-line:max-line-length
                content: `<p>Vous vous demandez très probablement pourquoi je vous parle d'un projet de deux jours ?</p><p>Tout simplement, car il s'agissait pour moi d'une expérience extra-ordinaire!</p><p>Air France KLM à réalisé un appel d'offres pour la refonte et la maintenance de l'ensemble de leurs applications, intranet, extranet ... qui étaient initialement réalisé en interne afin de l'externaliser. </p><p>Après une première sélection de cinq partenaires, ils ont fait appel à la société <a href="https://www.goood.com/">goood</a> afin de réaliser un <span class="badge">hackaton</span> de deux jours dans les locaux de KLM à Amsterdam en spécifiant l'équipe type dont ils avaient besoin (1 Scrum Master, 4 développeurs) avec un Front en Angular et un backend en Java</p><p>J'ai donc été choisi pour représenter Capgemini en tant que lead tech Front lors de ce hackaton. Initialement très nerveux a cette idée, je me suis laissé convaincre et je ne le regrette absolument pas! Le challenge en valait la chandelle.</p><p>Après une grosse préparation pendant près d'un mois (Hackaton blanc, perfection de notre anglais, amélioration de nos compétences, ...) nous sommes allés à Amsterdam.</p><p>Arrivé 2ème, Ce hackaton a permis de faire connaître Capgemini auprès d'Air France KLM, ce qui nous a d'ailleurs permis de gagner par la suite un autre appel d'offres</p>`
            },
            {
                title: 'WomenWalk',
                id: 'ww',
                date: '4 Mois',
                // tslint:disable-next-line:max-line-length
                content: `<p><a href="http://womenwalk.org/">WomenWalk</a> est un groupe Facebook créé par deux soeurs étudiantes Johanne et Léonie. Ce groupe permet aux femmes d'y partager leurs trajets à venir, en transports en commun ou à pied, le but est de réduire le sentiment d’insécurité.</p><p>Les deux étudiantes ont été récompensées par l’association <a href="https://www.femmes-digital-ouest.fr/prix-femmes-digital-ouest/">Femmes du digital Ouest</a> et ont fait une demande de mécénat afin de réaliser une application web sur Android et IOs de leur concept</p><p>Dans le cadre de la démarche RSE de Capgémini, nous avons accepté de réaliser l'application tout en accompagnant les clientes dans la conception de l'application. (UI/UX/Fonctionnel/Technique)</p><p>La stack technique retenue était la suivante:</p><ul> <li>Nativescript Angular</li><li>NodeJs</li><li>MongoDb</li></ul><p>L'équipe était composée d'une business Analyste, un lead tech/Scrum Master (moi) et de deux développeurs.</p><p>Après 4 mois, le développement de l'application est terminé, reste plus qu'à le mettre en prod.</p>`
            }
        ],
        other: [
            {
                title: 'Creative',
                url: '/blog/creative'
            },
            {
                title: 'SQLI',
                url: '/blog/sqli'
            },
            {
                title: 'CGI',
                url: '/blog/cgi'
            }
        ]
    },
    {
        template: 'creative',
        title: 'Creative - Nantes',
        image: 'assets/creative.jpg',
        dates: 'Octobre 2016 - Octobre 2018',
        projects: [
            {
                title: 'CNAM TS',
                id: 'cnamts',
                date: '3 Mois',
                // tslint:disable-next-line:max-line-length
                content: `<p>Dans le cadre du développement de leurs futures projets, la CNAM TS souhaitait mettre en place un starter kit AngularJS.</p><p>Ce kit de démarrage permet aux nouveaux développeurs commançant un nouveau projet, de commencer avec une base commune aux autres projets et ainsi avoir la trame de style identique quelque soit le projet.</p><p> Pour ce faire, nous avons utilisé et configuré le générateur de code Yeoman afin de l'adapter à notre besoin.</p>`
            },
            {
                title: 'Mismo',
                id: 'mismo',
                date: '2 semaines',
                // tslint:disable-next-line:max-line-length
                content: `<p>Souhaitant effectuer une refonte de leur logiciel RH, L'entreprise Mismoa réalisé un appel d'offres et Creative faisait parti des deux finalistes</p><p>Pour la délibération finale, nous avons souhaité réaliser une application de démo en JS/jQuery/HTML/SASS from scratch afin de montrer notre savoir faire en deux semaines avec deux développeurs - un Front (moi) et un back.</p><p>A l'issue de cette Démo, le client a été relativement impressionné et à choisi de travailler avec Créative en tant que partenaire.</p><p>Cette expérience c'est révélée très gratifiante pour moi et m'a appris à travailler dans l'urgence, tant les délais étaient courts.</p>`
            },
            {
                title: 'Projet E-commerce',
                id: 'ecommerce',
                date: '1 an et 8 Mois (en tout 2 ans et 1 mois)',
                // tslint:disable-next-line:max-line-length
                content: `S'en suivi l'expérience pour moi la plus formante tant sur les différentes technologies mais aussi sur le travail collaboratif en agilité. J'ai travaillé en prestataire chez <a [routerlink]="['/blog/capgemini']">Capgemini</a> dans un premier temps et, satisfait de mes compétence en direct chez eux.<p><p>Je ne m'étendrais pas trop sur le sujet, l'ayant déjà décrite <a [routerlink]="['/blog/capgemini']"><b>Ici</b></a>`
            }
        ],
        other: [
            {
                title: 'Capgemini',
                url: '/blog/capgemini'
            },
            {
                title: 'SQLI',
                url: '/blog/sqli'
            },
            {
                title: 'CGI',
                url: '/blog/cgi'
            }
        ]
    },
    {
        template: 'sqli',
        title: 'SQLI',
        image: 'assets/sqli.jpg',
        dates: 'Mars 2016 - Septembre 2016',
        projects: [{
            title: 'En cours',
            id: 'sqli',
            date: 'Bientôt',
            content: '<p>Contenu en cours de réalisation</p>',
        }],
        other: [
            {
                title: 'Capgemini',
                url: '/blog/capgemini'
            },
            {
                title: 'Creative',
                url: '/blog/crative'
            },
            {
                title: 'CGI',
                url: '/blog/cgi'
            }
        ]
    },
    {
        template: 'cgi',
        title: 'CGI',
        image: 'assets/cgi.jpg',
        dates: 'Février 2016 - Mars 2016',
        projects: [{
            title: 'En cours',
            id: 'cgi',
            date: 'Bientôt',
            content: '<p>Contenu en cours de réalisation</p>',
        }],
        other: [
            {
                title: 'Capgemini',
                url: '/blog/capgemini'
            },
            {
                title: 'Creative',
                url: '/blog/crative'
            },
            {
                title: 'SQLI',
                url: '/blog/sqli'
            }
        ]
    }
];


export interface Article {
    template: string;
    title: string;
    image: string;
    dates: string;
    projects: Project[];
    other: { title: string, url: string}[];
}

export interface Project {
    title: string;
    id: string;
    date: string;
    content: string;
}
