import { Card } from './cards.constants';

export const blog: Article[] = [
  {
    template: 'cbp',
    group: 'experience',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Experiences', url: '/blog', queryParams: { frag: 'experience' }, active: false },
      { name: 'CBP', url: '/blog/cbp', active: true },
    ],
    title: 'CBP',
    showMore: true,
    subtitle: 'Développeur Angular Sénior',
    content: `Après 9 mois de mission chez DSIA, j'ai intégré le groupe CBP en partenariat avec NéoSoft pour la création d'une application d'adhésion en marque blanche pour des assurances immobilières.`,
    icon: 'work',
    iconLink: 'experience',
    imagePath: 'assets/cbp.png',
    dates: 'Octobre 2020 - Novembre 2020',
    projects: [
      {
        title: 'Espace Adhésion',
        id: 'espace-adhesion',
        content: `<p>Crée en 1991, le Groupe CBP est un courtier spécialisé dans l’assurance-emprunteur. Les dix premières années d'activité ont été consavré au conseil et à la gestion des contrats collectifs bancaires, notamment auprès du Crédit Lyonnais, des Banques Populaires, des Caisses d’Épargne.</p>
        <p>Au début des années 2000, CBP c'est orientés vers les contrats individuels, qui ont pris de l’ampleur à partir de 2008, notamment avec la Loi Lagarde. Aujourd’hui, il y a plus de 700 collaborateurs en France dont plus de 150 à l’informatique.</p>
        <p>La France demeure le marché principal avec environ 82 % du chiffre d’affaires du groupe. Fort de plus de 15 millions de clients, dont 12 millions en France, CBP s'impose comme leaders aussi bien en Europe qu’en France. Le développement a toujours été basé sur les innovations produit et client.</p>
        <p>A titre d’exemple, CBP étaient les 1ers à déployer une solution de vente en ligne pour l’assurance emprunteur au début des années 2000, et continu à optimiser la fluidité des services à chaque étape du contrat : adhésion, opérations après-vente, sinistres</p>
        <p>J'ai intégré le Pôle Adhésion qui permet aux distributeurs de choisir une offre sur mesure d'assurance immobilière pour les futurs adhérents</p>
        <p>L'application se présente sous forme d'une application en marque blanche, où le thème et le logo changeaient en fonction du distributeur</p>`
      },
      {
        title: 'Sesame V5',
        id: 'sesame-v5',
        date: '13 mois',
        content: `<p>Comme expliqué précédemment, j'ai intégré le pôle adhésion, composé d'un chef de projet, 2 testeurs, une PO, deux expertes fonctionnelles et une vingtaine de développeurs front/back</p>
                <p>En tant que développeur front sénior j'étais en charge avec mes collègues d'estimer, développer et tester les nouvelles fonctionnalités de l'application B2B.</p>
                <p>Avec le responsable technique front nous avons entrepris deux grands chantiers:</p>
                <ul>
                  <li>L'intégration de store NgRx pour communiquer avec les APIs Back</li>
                  <li>La création d'une librairie de design system pour externaliser des composants réutilisables pour d'autres applications</li>
                </ul>
                <p>Rapidement, j'ai été proposé pour construire l'équivalent de l'application B2B pour les particuliers.</p>
                <p>En parallèle de la création de cette nouvelle application et afin de pouvoir facilement modifier le design de l'application et passer sur un design V2, j'ai entrepris un énorme chantier pour supprimer la librairie Bootstrap et remplacer par un framework maison CSS.</p>
                `,
        skills: ['Angular', 'A11y', 'design-system', 'NgRx', 'TypeScript', 'Jest', 'HTML', 'Sass'],
      },
    ],
    other: [
      {
        title: 'DSIA',
        url: '/blog/dsia',
      },
      {
        title: 'Free-lance',
        url: '/blog/freelance',
      },
    ],
  },
 /* {
    template: 'html-tips',
    group: 'tips',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'EcoConception', url: '/blog', queryParams: { frag: 'tips' }, active: false },
      { name: 'Lazy Load', url: '/blog/lazy-load', active: true },
    ],
    showMore: true,
    icon: 'bulb',
    customIcon: true,
    iconLink: 'tips',
    title: 'HTML Tips',
    subtitle: `Trucs et astuces HTML.`,
    content: `Le HTML est le squelette de notre application web. Je vous partage des trucs et astuces autour de ce langage`,
    imagePath: 'assets/html.jpg',
    projects: [
      {
        title: "Qu'est-ce que le lazy loading?",
        id: 'what',
        content: `
        <p>Le lazy loading, ou chargement paresseux
        pour les franco-français, consiste à spécifier quels composants, image,
        fichier, ... est à inclure au chargement et lesquelles ne sont pas nécessaires
        pour un premier rendu de notre belle page web.</p>
        `,
      },
      {
        title: 'Mais à quoi ça sert ?',
        id: 'meaning',
        content: `
        <p>A rien ! *Joke*</p>

        <p>Plus sérieusement, le lazy loading permet
        un gain considérable en performance de votre site web, car chaque utilisateur
        ne va pas consulter l'intégralité de votre site web, consulter l'ensemble de
        vos articles de haut en bas, voir toutes vos images, ... (même si
        on aimerait).</p>

        <p>Dans ce cas il est totalement inutile de
        charger dès le démarrage le contenu du blog alors que l'utilisateur est sur la
        page contact, de charger la dernière image alors qu'elle n'est pas dans le
        viewport (surface de la fenêtre du navigateur). Il est donc recommandé de les
        charger qu'à partir du moment où l'utilisateur décide d'aller sur le blog ou de
        scroller vers le bas pour voir l'ensemble de nos images.</p>
        `,
      },
    ],
    other: [
      {
        title: 'Free-lance',
        url: '/blog/freelance',
      },
    ],
  },*/
  {
    template: 'dsia',
    group: 'experience',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Experiences', url: '/blog', queryParams: { frag: 'experience' }, active: false },
      { name: 'DSIA', url: '/blog/dsia', active: true },
    ],
    showMore: true,
    icon: 'work',
    iconLink: 'experience',
    title: 'DSIA',
    subtitle: `Lead angular developer`,
    content: `Première mission en free-lance! Et pas des moindres, 9 mois sur une application d'analyse de données chez un éditeur de logiciels`,
    imagePath: 'assets/dsia.png',
    dates: 'Novembre 2019 - Juillet 2020',
    projects: [
      {
        title: 'Les débuts',
        id: 'beginning',
        date: '1 mois',
        content: `<p>Première mission free-lance!</p>
                <p>Me voilà (free-)lancé pour la première fois! Je suis arrivé dans l'équipe IMA composée d'un Scrum Master 3 dev back et un dev front en full agilité.</p>
                <p>IMA (pour In-Memory Analytics) est une solution de traitement "In Memory" de grands volumes d'information à des fins analytiques. Il s'agit d'une solution BI née de prototypes réalisés dans le cadre de l'activité R&D de DSIA.</p>
                <p>A fin de m'intégrer pleinement dans le projet et commencer à comprendre le fonctionnel de cette application, rien de mieux que de mettre les mains dans le code, et s'intégrer avec ses collègues (Merci Fred, Xavier, Benj, Seb, et Dany!).</p>
                <p>Et ma première mission a été de faire des TU! Car l'application, qui avait débuté il y a deux ans, ne comportait que ... 65 TU à mon arrivée.</p>
                <p>En parallèle, je suis rapidement devenu lead sur les revues de codes front de mes collègues.</p>`,
        skills: ['Angular', 'TypeScript', 'Karma', 'Jasmine', 'HTML', 'Sass', 'SCRUM'],
      },
      {
        title: 'Build',
        id: 'build',
        date: '3 mois',
        content: `<p>Une fois le fonctionnel ancré dans ma tête (Je comprends vite, mais il faut m'expliquer longuement :p). J'ai commencé à participer au développement des features que nous avions préalablement estimé lors des sprint plannings</p>
                <p>La conception, réalisation et test unitaires étaient réalisés en binôme front/back.</p>
                <p>À l'issue de ces quelques mois, près de 650 TUs ont été développé afin de s'assurer d'avoir le moins de régressions possible</p>`,
        skills: ['Angular', 'TypeScript', 'Karma', 'Jasmine', 'HTML', 'Sass', 'SCRUM'],
      },
      {
        title: 'Éditeur de chart',
        id: 'Anychart',
        date: '5 mois',
        content: `<p>Puis vint une énorme feature très importante pour DSIA: <b>L'éditeur de charts</b></p>
                <p>Cet éditeur était déjà présent sur l'application mais le code n'était pas évolutif, exclusif à l'application IMA, pas très User Friendly, et très difficilement maintenable!</p>
                <p>Il est essentiel pour l'appli de visualiser sous forme de différents graphiques les données (pie chart, cartesian, stock, pareto, ...) et nous utilisions la librairie <a href="https://www.anychart.com/" target="_blank">AnyChart</a> pour la visualisation.</p>
                <p>Le but de la feature était d'externaliser la gestion de l'éditeur de graphique dans un package npm propriétaire (Verdaccio) afin de le réutiliser dans d'autres applications de DSIA.</p>
                <p>J'ai réalisé toute la conception technico/fonctionnelle ainsi que le développement et le test de cet éditeur de graphique sur presque 5 mois.<br/>Il est désormais possible via l'éditeur de choisir le type de chart, avec une ou plusieurs séries, modifier les marges, les fonds, et toutes les options spécifiques aux différents charts</p>
                <p>J'avais aussi les mains libres pour la partie UX/UI et je me suis réellement fait plaisir en intégrant ce composant comme je le souhaitais!<br/>Vous trouverez ci-dessous quelques copies écrans du chart editor:</p>
                <div class="img-wrapper">
                    <div class="img-container">
                        <img src="assets/cartesian.png" appLazyLoad alt="Graphique cartésien">
                        <p class="quote">Graphique Cartésien</p>
                    </div>
                    <div class="img-container">
                        <img src="assets/pie.png" appLazyLoad alt="Graphique Camembert">
                        <p class="quote">Graphique Camembert</p>
                    </div>
                    <div class="img-container">
                        <img src="assets/stock.png" appLazyLoad alt="Graphique Stock">
                        <p class="quote">Graphique Stock</p>
                    </div>
                    <div class="img-container">
                        <img src="assets/treemap.png" appLazyLoad alt="Graphique Treemap">
                        <p class="quote">Graphique Treemap</p>
                    </div>
                </div>
                <p>Suite à cela, le composant avait une couverture de code de plus de 93% soit près de 450 TU!</p>`,
        skills: ['Angular', 'TypeScript', 'AnyChart', 'Karma', 'Jasmine', 'HTML', 'Sass', 'SCRUM'],
      },
    ],
    other: [
      {
        title: 'CBP',
        url: '/blog/cbp',
      },
      {
        title: 'Free-lance',
        url: '/blog/freelance',
      },
      {
        title: 'Capgémini',
        url: '/blog/capgemini',
      },
    ],
  },
  {
    template: 'freelance',
    group: 'freelance',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Freelance', url: '/blog/freelance', active: true },
    ],
    showMore: true,
    icon: 'send',
    iconLink: 'freelance',
    title: 'Free-Lance',
    subtitle: `Développeur Web Senior`,
    content: `Fini les CDI dans les ESN, je me lance en tant que Free-Lance !`,
    imagePath: 'assets/liberte.jpg',
    dates: "Novembre 2019 - Aujourd'hui",
    projects: [
      {
        title: 'Démarrage du projet',
        id: 'demarrage',
        date: '',
        content: `<p>Être libre et se lancer, #Freelance !</p>
                <p>Ca y est, je saute le pas. Après plusieurs années dans les ESN, je viens de décider de me lancer en tant que Freelance.</p>
                <p>Cette décision n'est pas facile à prendre, mais tellement jouissive quand elle est prise. Beaucoup d'appréhension, de peur de rater, de  #challenge. Mais n'est ce pas ce challenge qui nous pousse à nous surpasser ?</p>
                <p>Ma décision est prise, et je sais que, malgré l'auto-entrepreneuria, je ne suis pas seul, je peux compter sur d'autres freelances (merci de ton soutien Antoine BEAUREGARD), sur des entreprise (Younup), sur ma famille et mes amis.</p>
                <p>Bref, ce n'est que le début, mais j'ai déjà cette impression de liberté.</p>`,
        skills: [],
      },
      {
        title: 'Younup',
        id: 'younup',
        date: '9mois',
        content: `<p>Après avoir décidé de quitter Capgémini, j'ai pris contact avec diverses ESN.</p>
                <p>Younup par le biais de Pierre-Marie PASSET est la première à me faire confiance, en même temps, Pierre-Marie était mon directeur d'agence quand je travaillais chez Créative et connaissait déjà mes compétences sur Angular.</p>
                <p>J'ai donc intégré DSIA, l'un des clients de Younup, pour intervenir en tant que Lead dev Angular.</p>`,
        skills: ['Angular', 'TypeScript', 'Javascript', 'HTML', 'Sass', 'SCRUM'],
      },
    ],
    other: [
      {
        title: 'DSIA',
        url: '/blog/dsia',
      },
    ],
  },
  {
    template: 'lazy-load',
    group: 'eco-conception',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'EcoConception', url: '/blog', queryParams: { frag: 'eco-conception' }, active: false },
      { name: 'Lazy Load', url: '/blog/lazy-load', active: true },
    ],
    showMore: true,
    icon: 'code',
    iconLink: 'eco-conception',
    title: "Lazy-load d'images",
    subtitle: `Chargement paresseux.`,
    content: `Le lazy loading, ou chargement paresseux pour les franco-français, consiste à spécifier quels composants, image, fichier, ... est à inclure au chargement et lesquelles ne sont pas nécessaires pour un premier rendu de notre belle page web.`,
    imagePath: 'assets/lazy-loading.jpg',
    projects: [
      {
        title: "Qu'est-ce que le lazy loading?",
        id: 'what',
        content: `
        <p>Le lazy loading, ou chargement paresseux
        pour les franco-français, consiste à spécifier quels composants, image,
        fichier, ... est à inclure au chargement et lesquelles ne sont pas nécessaires
        pour un premier rendu de notre belle page web.</p>
        `,
      },
      {
        title: 'Mais à quoi ça sert ?',
        id: 'meaning',
        content: `
        <p>A rien ! *Joke*</p>

        <p>Plus sérieusement, le lazy loading permet
        un gain considérable en performance de votre site web, car chaque utilisateur
        ne va pas consulter l'intégralité de votre site web, consulter l'ensemble de
        vos articles de haut en bas, voir toutes vos images, ... (même si
        on aimerait).</p>

        <p>Dans ce cas il est totalement inutile de
        charger dès le démarrage le contenu du blog alors que l'utilisateur est sur la
        page contact, de charger la dernière image alors qu'elle n'est pas dans le
        viewport (surface de la fenêtre du navigateur). Il est donc recommandé de les
        charger qu'à partir du moment où l'utilisateur décide d'aller sur le blog ou de
        scroller vers le bas pour voir l'ensemble de nos images.</p>
        `,
      },
      {
        title: 'Le cas des images.',
        id: 'images',
        content: `
        <p>L'application du lazy loading de nos image
        réduit le nombre de requêtes effectuées au serveur pour récupérer nos images et
        réduit la bande passante nécessaire au fonctionnement du site. Moins lourd, le
        site se charge plus rapidement.</p>

        <p>Exemple d'un cas avec et sans lazy loading:</p>

        <div class="img-container">
          <img src="assets/withoutLazy.PNG" alt="Cas sans lazyload">
          <p class="quote">Exemple d'un chargement de toutes nos images dès le démarrage</p>
        </div>

        <p>Dans le premier cas:</p>

        <ul>
          <li>L'ensemble de nos images ont été chargées</li>
          <li>Le cout des images (déjà optimisées) s'élève à 449kB </li>
          <li>Le temps de chargement total est de 2.03 secondes</li>
        </ul>

        <div class="img-container">
          <img src="assets/lazy.png" alt="Cas avec lazyload">
          <p class="quote">Exemple du même composant avec du lazy load.</p>
        </div>

        <p>Dans ce second cas:</p>

        <ul>
          <li>Seule l'image visible dans le viewport est chargée</li>
          <li>Le cout des images (déjà optimisées) s'élève à 55.1kB </li>
          <li>Le temps de chargement total est de 1.62 secondes</li>
        </ul>

        <p><b>Soit une réduction du temps de chargement de près de 20%</b></p>

        <p><i>"Super, mais si mon utilisateur scroll, je veux qu'il voie mes images!"</i></p>

        <p>T'inquiète paupiette! C'est lç où le javascript entre
        en jeu. Je spoil un poil mais on aura ce rendu:</p>

        <div class="img-container">
          <img alt="lazy loaded images au scroll" src="assets/lazy-loading.gif">
          <p class="quote">Images lazy loadé au scroll.</p>
        </div>
        `,
      },
      {
        title: "Lazy load d'image avec Angular.",
        id: 'angular',
        content: `
        <p>Il existe des librairies qui proposent de faire du lazy load
        d'image comme <a href="https://www.npmjs.com/package/ng-lazyload-image">ng-lazyload-image</a>.</p>

        <p>Mon but n'est pas de faire la promotion d'une librairie aux
        multiples fonctionnalités dont on ne se servira jamais (#ecoConception) mais de
        répondre à ce besoin très simplement avec les composants disponibles sur notre
        bon vieux Framework Angular.</p>

        <p>Créer notre nouvelle directive dans le dossier shared avec <a
        href="https://cli.angular.io/">Angular CLI</a></p>

        <pre>ng generate directive shared/directive/lazy-load</pre>

        <p>Deux nouveaux fichiers seront créés: <span>lazy-load.directive.ts</span> et <span>lazy-load.directive.spec.ts</span>.</p>

        <p>Et notre module (dans mon cas <span>shared.module.ts</span>)</p>

        <p>Concentrons-nous sur notre fichier <span>lazy-load.directive.ts</span></p>

        <pre>
<span class="module">import</span> { <span class="attr">AfterViewInit</span>, <span class="attr">Directive</span>, <span class="attr">ElementRef</span>, <span class="attr">HostBinding</span>, <span class="attr">Input</span> } <span class="module">from</span> <span class="string">'@angular/core'</span>;

@<span class="decorator">Directive</span>({
  <span class="attr">selector</span>: <span class="string">'img[appLazyLoad]'</span>,
})
<span class="module">export</span> <span class="keyword">class</span> <span class="decorator">LazyLoadDirective</span> <span class="keyword">implements</span> <span class="decorator">AfterViewInit</span> {
  @<span class="decorator">HostBinding</span>(<span class="string">'attr.src'</span>) <span class="attr">srcAttr</span> = <span class="string">'transparentImage'</span>; <span class="comment">// (1)</span>
  @<span class="decorator">Input</span>() <span class="attr">src</span>: <span class="decorator">string</span>;  <span class="comment">// (2)</span>

  <span class="keyword">constructor</span>(<span class="keyword">private</span> <span class="attr">el</span>: <span class="decorator">ElementRef</span>) {}

  <span class="function">ngAfterViewInit</span>() {
    <span class="keyword">this</span>.<span class="function">canLazyLoad</span>() ? <span class="keyword">this</span>.<span class="function">lazyLoadImage</span>() : <span class="keyword">this</span>.<span class="function">loadImage</span>(); <span class="comment">// (3)</span>
  }

  <span class="comment">/**</span>
   <span class="comment">* (4)</span>
   <span class="comment">*/</span>
  <span class="keyword">private</span> <span class="function">canLazyLoad</span>() {
    <span class="module">return</span> <span class="attr">window</span> && <span class="string">'IntersectionObserver'</span> <span class="keyword">in</span> <span class="attr">window</span>;
  }

  <span class="comment">/**</span>
   <span class="comment">* (5)</span>
   <span class="comment">*/</span>
  <span class="keyword">private</span> <span class="function">lazyLoadImage</span>() {
    <span class="keyword">const</span> <span class="attr">obs</span> = <span class="keyword">new</span> <span class="decorator">IntersectionObserver</span>((<span class="attr">entries</span>) <span class="attr">=></span> {
      <span class="attr">entries</span>.<span class="function">forEach</span>(({ <span class="attr">isIntersecting</span> }) <span class="attr">=></span> {
        <span class="module">if</span> (<span class="attr">isIntersecting</span>) {
          <span class="keyword">this</span>.<span class="function">loadImage</span>();
          <span class="attr">obs</span>.<span class="function">unobserve</span>(<span class="keyword">this</span>.<span class="attr">el</span>.<span class="attr">nativeElement</span>);
        }
      });
    });

    <span class="attr">obs</span>.<span class="function">observe</span>(<span class="keyword">this</span>.<span class="attr">el</span>.<span class="attr">nativeElement</span>);
  }

  <span class="comment">/**</span>
   <span class="comment">* (6)</span>
   <span class="comment">*/</span>
  <span class="keyword">private</span> <span class="function">loadImage</span>() {
    <span class="keyword">this</span>.<span class="attr">srcAttr</span> = <span class="keyword">this</span>.<span class="attr">src</span>;
  }
}</pre>

        <p class="quote">Fichier lazy-load.directive.ts</p>

        <p >Un peu d'explications:</p>

        <ol>
          <li>On déclare l'attribut src de notre image avec le décorateur <a
          href="https://angular.io/api/core/HostBinding">Hostbinding</a> pour le modifier
          dynamiquement. On lui donne pour valeur par défaut (car il ne faut JAMAIS
          laisser une balise src vide) avec une image transparente de 1px.</li>

          <li>On récupère avec le décorateur <a href="https://angular.io/api/core/Input">Input</a>
          la source de l'image à charger.</li>

          <li>Une fois la vue initialisée (<a href="https://angular.io/api/core/AfterViewInit">AfterViewInit</a>)
          on vérifie la possibilité de lazy loader notre image (voir 4/) si c'est bon, on
          charge paresseusement (voir 5/), sinon on charge l'image directement (voir 6/).</li>

          <li>On check que window existe (cas d'<a href="https://angular.io/guide/universal">Angular
          Universal ou SSR</a>) et qu'il y a bien l'<a
          href="https://blog.bitsrc.io/angular-maximizing-performance-with-the-intersection-observer-api-23d81312f178">intersection
          observer</a>.</li>

          <li>Si il est possible de lazy loader, on créer notre observer sur l'image, et dès qu'il
          apparait dans le viewport, on charge l'image et on désabonne pour pas la recharger à chaque fois qu'elle réapparait dans le viewport</li>

          <li>Sinon, on remplit dès le chargement l'attribut src de notre image</li>
        </ol>

        <p>Et c'est tout!</p>

        <p>Après, il suffit juste d'ajouter notre directive sur chaque image à lazy loader:</p>

        <pre>&#x2039;<span class="keyword">img</span> <span class="attr">appLazyLoad src=</span><span class="string">"assets/lazyLoadedImage.jpg"</span><span class="attr"> alt=</span><span class="string">"Mon image lazy loadée"</span> /&#8250;</pre>
        `,
      },
    ],
    other: [
      {
        title: 'Free-lance',
        url: '/blog/freelance',
      },
    ],
  },
  {
    template: 'capgemini',
    group: 'experience',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Experiences', url: '/blog', queryParams: { frag: 'experience' }, active: false },
      { name: 'Capgemini', url: '/blog/capgemini', active: true },
    ],
    showMore: true,
    icon: 'work',
    iconLink: 'experience',
    title: 'Capgemini',
    subtitle: `Développeur Web Senior`,
    content: `Suite à une mission en tant que prestataire pour Capgemini, j'ai choisi d'intégrer directement l'entreprise.`,
    imagePath: 'assets/cap-locaux.png',
    dates: 'Octobre 2018 - Octobre 2019',
    projects: [
      {
        title: 'Projet E-commerce',
        id: 'ecommerce',
        date: '5 Mois (en tout 2 ans et 1 mois)',
        content: `<p>Après près de deux ans passé en prestation chez Capgemini avec Creative, et satisfait du travail que j'ai réalisé, Capgémini m'a proposé de me recruter en direct.</p><p>J'ai dans un premier temps continué sur le projet sur lequel je travaillais précédemment en prestation avec Creative, mes missions étaient les suivantes :</p><ul> <li>Développement et estimation des features Angular / Node / JS</li><li>Revue de codes de mes collègues</li><li>Live design dans les locaux du client</li><li>Mise en conformité avec la norme RGAAA (Accessibilité)</li><li>Envoie des données clientes via GTM (Analytics)</li><li>Internationalisation Angular AOT</li><li>Intégration web en Sass</li></ul><p>Le projet qui était initialement constitué d'une équipe de 10 personnes, c'est beaucoup renforcé pour atteindre les 90 personnes en deux ans, cette croissance étant nécessaire au vu de la complexité du site de E-Commerce - plus de <b>25</b> technos utilisées (Angular, Node, PHP, Java, Akeneo, Symfony2...) dont deux CMS (Drupal 7 et Magento 1).</p><p>Étant Agile, nous avons dû par conséquent faire évoluer la méthodologie d'un simple SCRUM vers une agilité à l'echelle SAFE.</p><p>À l'init de ce projet, nous utilisions le front délivré par Drupal en JS natif avec la librairie jQuery, pour améliorer les performances, la maintenabilité et réaliser des TUs, nous avons décidé avec le client, après plus d'un an et demie, de réaliser une refonte globale du Front en Angular avec un Middleware NodeJs.<br>J'ai d'ailleurs été en charge de la mise en place du socle Angular Node avec un architect</p><p>Fort de cette expérience enrichissante et souhaitant de nouveaux challenges, j'ai demandé à changer de projet afin de voguer vers de nouvelles aventures</p>`,
        skills: [
          'Angular',
          'NodeJs',
          'jQuery',
          'TypeScript',
          'A11y',
          'GTM',
          'Responsive',
          'i18n',
          'Javascript',
          'HTML',
          'Sass',
          'SAFe',
        ],
      },
      {
        title: 'Air France KLM',
        id: 'afklm',
        date: '2 jours',
        content: `<p>Vous vous demandez très probablement pourquoi je vous parle d'un projet de deux jours ?</p><p>Tout simplement, car il s'agissait pour moi d'une expérience extra-ordinaire!</p><p>Air France KLM à réalisé un appel d'offres pour la refonte et la maintenance de l'ensemble de leurs applications, intranet, extranet ... qui étaient initialement réalisé en interne afin de l'externaliser. </p><p>Après une première sélection de cinq partenaires, ils ont fait appel à la société <a href="https://www.goood.com/">goood</a> afin de réaliser un <span class="badge">hackaton de deux jours dans les locaux de KLM à Amsterdam en spécifiant l'équipe type dont ils avaient besoin (1 Scrum Master, 4 développeurs) avec un Front en Angular et un backend en Java</p><p>J'ai donc été choisi pour représenter Capgemini en tant que lead tech Front lors de ce hackaton. Initialement très nerveux a cette idée, je me suis laissé convaincre et je ne le regrette absolument pas! Le challenge en valait la chandelle.</p><p>Après une grosse préparation pendant près d'un mois (Hackaton blanc, perfection de notre anglais, amélioration de nos compétences, ...) nous sommes allés à Amsterdam.</p><p>Arrivé 2ème, Ce hackaton a permis de faire connaître Capgemini auprès d'Air France KLM, ce qui nous a d'ailleurs permis de gagner par la suite un autre appel d'offres</p>`,
        skills: ['Angular', 'TypeScript', 'Responsive', 'Javascript', 'HTML', 'Sass', 'SCRUM'],
      },
      {
        title: 'WomenWalk',
        id: 'ww',
        date: '4 Mois',
        content: `<p><a href="http://womenwalk.org/">WomenWalk</a> est un groupe Facebook créé par deux soeurs étudiantes Johanne et Léonie. Ce groupe permet aux femmes d'y partager leurs trajets à venir, en transports en commun ou à pied, le but est de réduire le sentiment d’insécurité.</p><p>Les deux étudiantes ont été récompensées par l’association <a href="https://www.femmes-digital-ouest.fr/prix-femmes-digital-ouest/">Femmes du digital Ouest</a> et ont fait une demande de mécénat afin de réaliser une application web sur Android et IOs de leur concept</p><p>Dans le cadre de la démarche RSE de Capgémini, nous avons accepté de réaliser l'application tout en accompagnant les clientes dans la conception de l'application. (UI/UX/Fonctionnel/Technique)</p><p>La stack technique retenue était la suivante:</p><ul> <li>Nativescript Angular</li><li>NodeJs</li><li>MongoDb</li></ul><p>L'équipe était composée d'une business Analyste, un lead tech/Scrum Master (moi) et de deux développeurs.</p><p>Après 4 mois, le développement de l'application est terminé, reste plus qu'à le mettre en prod.</p>`,
        skills: [
          'Angular',
          'NodeJs',
          'TypeScript',
          'Responsive',
          'Nativescript',
          'Javascript',
          'HTML',
          'Sass',
          'Mobile',
          'SCRUM',
        ],
      },
    ],
    other: [
      {
        title: 'DSIA',
        url: '/blog/dsia',
      },
      {
        title: 'Creative',
        url: '/blog/creative',
      },
      {
        title: 'SQLI',
        url: '/blog/sqli',
      },
      {
        title: 'CGI',
        url: '/blog/cgi',
      },
    ],
  },
  {
    template: 'creative',
    group: 'experience',
    title: 'Creative',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Experiences', url: '/blog', queryParams: { frag: 'experience' }, active: false },
      { name: 'Creative', url: '/blog/creative', active: true },
    ],
    showMore: true,
    subtitle: 'Développeur Web',
    content: `Arrivé chez Creative, j'ai travaillé à Sopra Steria pour la CNAMTS en AngularJS et chez Capgemini pour un client dans le secteur du retail de luxe français.`,
    icon: 'work',
    iconLink: 'experience',
    imagePath: 'assets/creative.jpg',
    dates: 'Octobre 2016 - Octobre 2018',
    projects: [
      {
        title: 'CNAM TS',
        id: 'cnamts',
        date: '3 Mois',
        content: `<p>Dans le cadre du développement de leurs futurs projets, la CNAM TS souhaitait mettre en place un starter kit AngularJS.</p><p>Ce kit de démarrage permet aux nouveaux développeurs commençant un nouveau projet, de commencer avec une base commune aux autres projets et ainsi avoir la trame de style identique quel que soit le projet.</p><p> Pour ce faire, nous avons utilisé et configuré le générateur de code Yeoman afin de l'adapter à notre besoin.</p>`,
        skills: ['AngularJS', 'Responsive', 'Design', 'Yeoman', 'Gulp', 'Javascript', 'HTML', 'Sass', 'SCRUM'],
      },
      {
        title: 'Mismo',
        id: 'mismo',
        date: '2 semaines',
        content: `<p>Souhaitant effectuer une refonte de leur logiciel RH, L'entreprise Mismo a réalisé un appel d'offres et Creative faisait parti des deux finalistes</p><p>Pour la délibération finale, nous avons souhaité réaliser une application de démo en JS/jQuery/HTML/SASS from scratch afin de montrer notre savoir faire en deux semaines avec deux développeurs - un Front (moi) et un back.</p><p>A l'issue de cette Démo, le client a été relativement impressionné et à choisi de travailler avec Créative en tant que partenaire.</p><p>Cette expérience s'est révélée très gratifiante pour moi et m'a appris à travailler dans l'urgence, tant les délais étaient courts.</p>`,
        skills: ['jQuery', 'Responsive', 'Javascript', 'HTML', 'Sass', 'SCRUM'],
      },
      {
        title: 'Projet E-commerce',
        id: 'ecommerce',
        date: '1 an et 8 Mois (en tout 2 ans et 1 mois)',
        content: `S'en suivi l'expérience pour moi la plus complète tant sur les différentes technologies, mais aussi sur le travail collaboratif en agilité. J'ai travaillé en prestataire chez <a href="/blog/capgemini">Capgemini</a> dans un premier temps et, satisfait de mes compétences, en direct chez eux.<p><p>Je ne m'étendrais pas trop sur le sujet, l'ayant déjà décrite <a href="/blog/capgemini"><b>Ici</b></a>`,
        skills: [
          'Angular',
          'NodeJs',
          'jQuery',
          'TypeScript',
          'A11y',
          'GTM',
          'Responsive',
          'i18n',
          'Javascript',
          'HTML',
          'Sass',
          'SAFe',
        ],
      },
    ],
    other: [
      {
        title: 'DSIA',
        url: '/blog/dsia',
      },
      {
        title: 'Capgemini',
        url: '/blog/capgemini',
      },
      {
        title: 'SQLI',
        url: '/blog/sqli',
      },
      {
        title: 'CGI',
        url: '/blog/cgi',
      },
    ],
  },
  {
    template: 'sqli',
    group: 'experience',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Experiences', url: '/blog', queryParams: { frag: 'experience' }, active: false },
      { name: 'SQLI', url: '/blog/sqli', active: true },
    ],
    title: 'SQLI',
    showMore: true,
    subtitle: 'Développeur Web',
    content: `Embauché sur profil, j'ai travaillé en interne sur divers missions, technologies et frameworks.`,
    imagePath: 'assets/sqli.jpg',
    icon: 'work',
    iconLink: 'experience',
    dates: 'Mars 2016 - Septembre 2016',
    projects: [
      {
        title: 'Poc',
        id: 'poc',
        date: '4 mois',
        content:
          '<p>Ca y est, premier emploi! Me voici titulaire d\'un Bac + 4  délivré par l\'<span class="badge">ENI<span> à Saint Herblain.</p><p> Et c\'est SQLI qui me donne ma première chance en me recrutant sur profil.</p><p>N\'étant encore qu\'un jeune diplômé, les clients ne se bousculent pas pour m\'engager. C\'est pas grave, SQLI me propose avec deux stagiaires d\'école d\'ingénieurs de réaliser un <span class="badge">POC<span> sur le sujet de la Blockchain.</p><p>Le but de ce POC était de créer une application Android permettant de louer une voiture autonome (simulé avec une carte Raspberry) avec des transactions faite sur une <span class="badge">blockchain privé avec pour monnaie de l\'<span class="badge">etherum.<br/>Ainsi qu\'un Dashboard web afin de visualiser en direct les transactions échangées entre la voiture, et l\'application.</p><p>Mes missions étaient essentiellement sur la production de l\'application en <span class="badge">android ainsi que le dashboard sur un tout nouveau framework encore en version beta: <span class="badge">angular2 avec diverse librairie pour réaliser des charts avec <a href="https://www.chartjs.org/">Chartsjs</a>.</p>',
        skills: ['Angular', 'jQuery', 'TypeScript', 'Android', 'Responsive', 'Javascript', 'HTML', 'Sass', 'SCRUM'],
      },
      {
        title: 'Missions, POC, TMA',
        id: 'next',
        date: '3 mois',
        content:
          "<p>Et après?</p><p>Encore inexpérimenté, SQLI n'a pas réussi à me trouver de mission fixe.</p><p>J'ai donné quelques coups de mains, je me suis formé, amélioré sur divers <span class=\"badge\">frameworks et techno. Mais au bout d'un certain temps, je n'aspirais plus qu'à trouver une véritable mission.</p><p>C'est pourquoi j'ai décidé de quitter SQLI, en intégrant le groupe <a href=\"/blog/creative\">Creative</a> vers de nouvelles aventures!</p>",
        skills: ['Joomla!', 'jQuery', 'AngularJs', 'Javascript', 'HTML', 'Sass'],
      },
    ],
    other: [
      {
        title: 'DSIA',
        url: '/blog/dsia',
      },
      {
        title: 'Capgemini',
        url: '/blog/capgemini',
      },
      {
        title: 'Creative',
        url: '/blog/creative',
      },
      {
        title: 'CGI',
        url: '/blog/cgi',
      },
    ],
  },
  {
    template: 'cgi',
    group: 'experience',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Experiences', url: '/blog', queryParams: { frag: 'experience' }, active: false },
      { name: 'CGI', url: '/blog/cgi', active: true },
    ],
    title: 'CGI',
    showMore: true,
    subtitle: 'Développeur Web (stagiaire)',
    content: `Suite à ma formation à l'ENI, j'ai réalisé au sein de CGI une application mobile hybride avec Ionic 1.`,
    icon: 'work',
    iconLink: 'experience',
    imagePath: 'assets/cgi.jpg',
    dates: 'Février 2016 - Mars 2016',
    projects: [
      {
        title: 'Démonstrateur',
        id: 'cgi',
        date: '2 Mois',
        content: `
                <p>Après avoir décidé de réaliser une reconversion professionnelle, et après 7 mois de formation diplômante en Bac +4, je devais réaliser un stage de deux mois en entreprise.</p>
                <p>CGI à été la première entreprise à me faire confiance!</p>
                <p>Durant cette recherche, je me suis rendu compte du nombre d'offres d'emploi et surtout de la chance d'être dans ce secteur!</p>
                <p>Pour ce stage, Je devais réaliser une application hybride pour une tablette qui permettrait à nos commerciaux de faire une démonstration aux clients du savoir faire de l'entreprise.</p>
                <p>Il fallait pour cette application intégrer tous les pdf, vidéos, applications faites au sein de CGI afin de les ouvrir in-app</p>
                <p>Pour ma première expérience en entreprise, j'ai été plutôt déstabilisé, en effet la stack technique ne m'était pas familière car je n'avais pas ou peu de connaissance:</p>
                <ul>
                    <li>Ionic</li>
                    <li>AngularJs</li>
                    <li>Cordova</li>
                    <li>Jade (moteur de template Node)</li>
                    <li>Sass</li>
                    <li>SQLite</li>
                </ul>
                <p>J'ai dû dormir que deux ou trois heures par nuit afin de manger tous les tutos possible et imaginable sur ces différentes techno pour les maîtriser!</p>
                <p>Le jeu en valait la chandelle, à l'issue de ces deux mois, j'ai réussi à terminer la V1 de l'application sur lequel je suis intervenue en solo</p>
                <p>De plus, à l'issue de mon rapport et ma soutenance de stage, j'ai terminé deuxième de ma promo!</p>
                <p>À l'issue de cette expérience, j'ai choisi de quitter CGI et refuser leur offre de CDI pour trouver une entreprise plus proche de chez moi.</p>
            `,
        skills: ['Ionic!', 'AngularJs', 'Cordova', 'Jade', 'SQLite', 'Sass'],
      },
    ],
    other: [
      {
        title: 'DSIA',
        url: '/blog/dsia',
      },
      {
        title: 'Capgemini',
        url: '/blog/capgemini',
      },
      {
        title: 'Creative',
        url: '/blog/creative',
      },
      {
        title: 'SQLI',
        url: '/blog/sqli',
      },
    ],
  },
  {
    template: 'i18n',
    group: 'concept',
    title: 'Internationalisation',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Concept', url: '/blog', queryParams: { frag: 'concept' }, active: false },
      { name: 'Internationalisation', url: '/blog/i18n', active: true },
    ],
    showMore: true,
    subtitle: 'I18n',
    imagePath: 'assets/i18n.jpg',
    content: `Parceque les sites web ont pour vocation d'être visible partout dans le monde, j'ai pris à coeur d'utiliser des outils d'internationalisation comme les fichiers xliff et la librairie i18n propre à Angular.`,
    icon: 'translate',
    iconLink: 'concept',
    projects: [
      {
        title: 'Introduction',
        id: 'intro',
        content: `
                    <p>La plupart des sites web de nos jours sont présents dans plusieurs pays et doivent être écrits dans plusieurs langues.</p>
                    <p>On appel ça l'internationalisation ou, pour aller plus vite, l'i18n le nombre 18 étant le nombre de lettre présente entre le "i" et le "n".</p>
                    <p>Bien évidemment, dans un but de mutualisation et de factorisation, nous n'allons pas coder autant de sites qu'il y a de langues! Ce serait bien trop fastidieux.</p>
                    <p>C'est pour cela que le js en générale permet de modifier dynamiquement notre page HTML.</p>
                    <p>Angular propose deux types de compilation de templates : JiT (Just-in-Time) et AoT (Ahead-of-Time).</p>
                    <p>Ces deux procédés ont leurs avantages et leurs inconvénients.</p>
                    <p>La compilation JiT permet de traduire à la volée, il est très rapide en période de build, par contre, le bundle Javascript va être plus gros puisque les sources de l'application devront intégrer le compilateur de templates et l'application va devoir compiler les templates lors de son exécution ce qui aura nécessairement un impact négatif sur le temps d'affichage.</p>
                    <p>L'AoT lui permet de traduire lors du build de l'application, la problématique principal est lors du build qui peut s'avérer nettement plus long! Mais qui est beaucoup plus léger à l'exécution.</p>
                    <p>Dans une période de dev, il est judicieux de privilégier le JiT, mais en production, il est indispensable de mettre en place la compilation AoT!</p>
                `,
      },
      {
        title: 'Mon expérience sur le sujet',
        id: 'exp',
        content: `
                    <p>La seule, mais non des moindre, expérience sur le sujet était lors du projet E-commerce dans le luxe français.</p>
                    <p>Ce site devait être déployé sur plusieurs pays et donc dans plusieurs langues.</p>
                    <ul>
                        <li>Français</li>
                        <li>Anglais</li>
                        <li>Espagnol</li>
                        <li>Japonnais</li>
                        <li>Chinois</li>
                        <li>Allemand</li>
                        <li>...</li>
                    </ul>
                    <p>La traduction n'était pas la seule problématique, en effet, un titre en français n'a pas la même longueur en allemand par exemple!</p>
                    <p>Cela engendre plusieurs problématiques notamment de l'ordre visuel, ce qui impliquait un travail de longue haleine lors des live design chez le client.</p>
                    <p>Pour les traductions, le client avait en interne une équipe dédiée qui mettait toutes les traductions dans un google sheet avec une paire clé/valeur.</p>
                    <p>J'ai par la suite créé un script js qui venait récupérer ce fichier et effectuait le traitement suivant:</p>
                    <ul>
                        <li>Suppression des doublons de clé</li>
                        <li>Suppression des clés sans valeur ou valeurs sans clé</li>
                        <li>Remplacement des caractères interdit tel "<", ">", ...</li>
                        <li>Remplacement des sauts de lignes</li>
                        <li>...</li>
                    </ul>
                    <p>Une fois le fichier assaini, cette paire clé valeur était formatée sous le format xliff pour être par la suite stocké dans un fichier .xlf.</p>
                    <p>Il était ensuite possible d'utiliser les traductions dans les templates.</p><br/><br/><br/>
                    <p>J'ai commencé à travailler sur l'i18n de ce site, mais, n'étant pas parfaitement bilingue, je préfère laisser ça pour une V2.</p>
                `,
      },
    ],
    other: [
      {
        title: 'Responsive',
        url: '/blog/responsive',
      },
      {
        title: 'Accessibilité',
        url: '/blog/a11y',
      },
      {
        title: 'Analytics',
        url: '/blog/analytics',
      },
    ],
  },
  {
    template: 'responsive',
    group: 'concept',
    title: 'Responsive',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Concept', url: '/blog', queryParams: { frag: 'concept' }, active: false },
      { name: 'Responsive', url: '/blog/responsive', active: true },
    ],
    showMore: true,
    subtitle: 'Adaptation Multi Devices',
    content: `A l'heure de l'explosition de l'internet mobile, les sites web doivent permettre de s'afficher sur n'importe quel support. Pour ce faire j'utilise de manière approprié le responsiveDesign et le concept de mobileFirst.`,
    icon: 'devices',
    iconLink: 'concept',
    imagePath: 'assets/responsive.jpg',
    projects: [
      {
        title: 'Introduction',
        id: 'responsive',
        content: `
                <p>
                    Le Responsive Web design est une approche de conception Web qui vise à l'élaboration de sites offrant une expérience de lecture et de navigation optimales pour l'utilisateur quelle que soit le device (mobiles, tablettes, ordinateur de bureau).</p>
                <p>
                    Une expérience utilisateur "Responsive" réussie implique un minimum de redimensionnement (zoom), de recadrage, et de défilements multidirectionnels de pages.</p>
                <p>
                    Nous disposons actuellement de trois moyens pour véhiculer le contenu web sur des appareils connectés : un site dédié, une application native et une version responsive de site web.</p>
                <p>
                    Sachez que chaque solution a des avantages et des inconvénients : selon les besoins et contraintes (notamment de budget et de délais), il pourra être parfaitement pertinent d'opter pour l'une ou l'autre.</p>
                <h4>Un site dédié</h4>
                <p>
                    Un projet de site dédié consiste à concevoir deux ou plusieurs sites différents selon le dispositif visé : un site principal, un site pour smartphones, un site pour tablettes, etc.</p>
                <p>
                    Généralement, un test initial côté serveur détecte le type d'appareil et renvoie vers une adresse web dédiée (<code>m.monsite.com</code> par exemple).</p>
                <p>Les avantages des sites web dédiés sont :</p>
                <ul>
                    <li>
                        La possibilité d'affiner précisément la structure du site et ses contenus en regard du périphérique utilisé</li>
                    <li>
                        La possibilité de cibler et de s'adapter à des fonctionnalités variées (notamment le touch)</li>
                    <li>
                        Peut être une alternative "rapide", en attendant une refonte complète (et responsive) de son site web</li>
                </ul>
                <p>
                    Mais un site dédié n'est pas exempt d'inconvénients :</p>
                <ul>
                    <li>
                        Le contenu dupliqué</li>
                    <li>
                        La maintenance de plusieurs versions de site et de plusieurs adresses web (moins facilement indexables par un moteur de recherche)</li>
                    <li>
                        La détection côté serveur souvent biaisée ou non à jour</li>
                </ul>
                <h4>
                    </a>Une application native</h4>
                <p>
                    Une application native est un produit développé spécifiquement dans divers "langages" (iOS, Android, WindowsPhone) et qui se télécharge et se référence au sein d'un "Store" (AppStore, Google Play, Windows store).</p>
                <p>
                    Cela lui confère certains avantages :</p>
                <ul>
                    <li>
                        La prise en charge facilitée de fonctionnalités natives (touch, accéléromètre, notifications, GPS, etc.)</li>
                    <li>
                        Une installation possible sur son périphérique</li>
                    <li>
                        Une totale "acclimatation" au périphérique (ergonomie, performances, densité de pixels)</li>
                    <li>
                        La présence de sa marque sur l'AppStore (pour ne citer que lui) et de pouvoir disposer d'un "raccourci" sur le smartphone de l'utilisateur</li>
                </ul>
                <p>
                    … Mais aussi certains inconvénients :</p>
                <ul>
                    <li>
                        Un développement spécifique dans plusieurs langages</li>
                    <li>
                        Le coût du développement, des licences, et de la maintenance pour chaque système d'exploitation</li>
                    <li>
                        Un contenu non indexable par un moteur de recherche web classique</li>
                    <li>
                        La mise à jour de l'application nécessite une action de l'utilisateur</li>
                </ul>
                <h4>
                    Une version responsive</h4>
                <p>
                    À l'heure où des centaines de tailles et formats d'écrans différents se connectent à chaque instant, la méthode du Responsive Web design apparaît comme la "solution de facilité" en vertu de son objectif principal:</p>
                <p>
                    Elle permet de s'adapter à tout type d'appareil de manière transparente pour l'utilisateur</p>
                <ul>
                    <li>
                        Des coûts et des délais généralement inférieurs aux techniques citées précédemment</li>
                    <li>
                        Une maintenance de projet facilitée (une seule feuille de style, un seul fichier HTML, etc.)</li>
                    <li>
                        Une mise à jour transparente et un déploiement multi-plateformes</li>
                    <li>
                        Le Responsive peut être envisagé après la conception initiale du site (même si ce n'est pas l'idéal)</li>
                </ul>
                <p>
                    L'un des avantages indéniables depuis quelque temps est que Google met en avant les sites "adaptés au mobile" au sein de ses résultats de recherche :</p>
                <p>
                    Les inconvénients ne sont cependant pas nuls:</p>
                <ul>
                    <li>
                        De bonnes connaissances techniques, et une veille technologique constante, sont indispensables</li>
                    <li>
                        Il est nécessaire de prévoir des tests nombreux et variés tout au long du projet</li>
                    <li>
                        Il est difficile de contourner les limites ergonomiques et de performances des navigateurs web</li>
                    <li>
                        Faire du responsive, c'est… plus long que de ne rien faire (25% du temps supplémentaire)</li>
                </ul>
                <p>
                    Au final, le Responsive Web design n'est qu'un moyen parmi d'autres de parvenir à ses objectifs mais ne doit pas être considéré comme la seule éventualité ni comme une "solution magique" à tous les problèmes.</p>
                `,
      },
      {
        title: 'Responsive, Adaptatif ou Fluide ?',
        id: 'raf',
        content: `
                    <p>
                        En France, et selon Wikipedia, le Responsive Web Design est un synonyme de "site web adaptatif".</p>
                    <p>
                        Techniquement, il conviendrait de distinguer les sites web Statiques, Liquides, Adaptatifs et Responsive:</p>
                    <h4>
                        Un design "Static"</h4>
                    <p>
                        Un design statique (ou fixe) se réfère à des dimensions figées (par exemple 960px) quelle que soit la surface de l'écran. La grande majorité des sites web était construite sur cette base avant l'arrivée du Responsive Web Design dans les années 2010.</p>
                    <h4>
                        Un design "Fluide"</h4>
                    <p>
                        Un site web Fluide(ou "liquid") est un site web dont toutes les largeurs de colonnes sont exprimées en unités variables (pourcentages, em, vw, etc.) et qui s'adapte généralement automatiquement à la taille de fenêtre, jusqu'à une certaine mesure.</p>
                    <h4>
                        Un design "Adaptive"</h4>
                    <p>
                        Un design Adaptatif est une amélioration du design statique: les unités de largeur sont fixes, mais différentes selon la taille de l'écran, qui est détectée via CSS3 Media Queries.</p>
                    <p>
                        Un tel design tient uniquement compte des principaux points de rupture (320px, 480px, 768px, 1024px, etc.) et adapte le gabarit en conséquence. Au final, on se retrouve avec autant de gabarits fixes que de points de ruptures.</p>
                    <h4>
                        Un design "Responsive"</h4>
                    <p>
                        Un site web Responsive est une amélioration du design liquide associé à des méthodes CSS3 Media Queries permettant de modifier les styles (ré-organisation de la page par exemple) selon certains critères, pour s'adapter complètement à la taille d'écran, quel que soit le point de rupture.</p>
                `,
      },
      {
        title: 'Mon expérience sur le sujet',
        id: 'exp',
        content: `
                        <p>Étant dans l'IT depuis 2015, j'ai toujours travaillé de façon <b>responsive</b>, le but étant d'adapter quel que soit le type d'écran que l'on a en face de sois.</p>
                        <p>Pour aller plus loin, je me suis même fait un point d'honneur de travailler en "Mobile First", c'est à dire que l'on code de façon à ce que le site soit compatible et lisible de la meilleure des maniéres sur mobile, puis d'élargir aux tablettes, desktop, et autres plus grands écrants<br/>De cette manière, nous sommes certains que l'expérience utilisateur sur mobile ne sera pas biaisé. Surtout quand on sait que 65% du surf sur Internet se fait via un mobile de nos jours!</p>
                        <p>Dans tous les projets sur lesquels j'ai pu travailler aujourd'hui, le responsive faisait partie intégrante de mon travail. De la conception à la réalisation!</p>
                        <p>À titre d'exemple, je vous invite à redimensionner cette page si vous êtes sur Desktop afin de voir le site s'adapter à la taille de votre écran!</p>
                    `,
      },
    ],
    other: [
      {
        title: 'Internationalization',
        url: '/blog/i18n',
      },
      {
        title: 'Accessibilité',
        url: '/blog/a11y',
      },
      {
        title: 'Analytics',
        url: '/blog/analytics',
      },
    ],
  },
  {
    template: 'a11y',
    group: 'concept',
    title: 'Accessibilité',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Concept', url: '/blog', queryParams: { frag: 'concept' }, active: false },
      { name: 'Accessibilité', url: '/blog/a11y', active: true },
    ],
    showMore: true,
    subtitle: 'a11y',
    iconLink: 'concept',
    content: `Améliorer l’accessibilité de votre site web permettra de toucher un public plus large, d’augmenter le trafic et les conversions sur votre site. Il faut toujours être conscient qu’entre 15% et 20% de la population souffrent d’un handicap: visuel, auditif, moteur…`,
    icon: 'accessible_forward',
    imagePath: 'assets/a11y.jpg',
    projects: [
      {
        title: 'Introduction',
        id: 'intro',
        content: `
                    <p><h4>Le pouvoir du Web est dans son universalité.</h4></p>
                    <p>Partant de ce constat, il est donc nécessaire de rendre un site web accessible quel que soit le matériel, le logiciel, la langue ou la localisation.</p>
                    <p>Il est donc aussi indispensable de rendre un site accessible à tout type de handicap qu'elle soit auditive, motrice, visuelle ou cognitive.</p>
                    <p>Imaginez-vous sur une terrasse en plein soleil en train de commander sur votre site d'E-commerce préféré une paire de chaussures. Vous êtes sur de vous, vous pensez qu'elles sont de couleur noire.<br/>Quelques jours plus tard, vous recevez chez vous cette paire et vous rendez compte qu'elle était bleu marine!</p>
                    <p>Le handicap peut toucher tout le monde:</p>
                    <ul>
                        <li>
                            les personnes âgées dont les capacités changent avec l’âge</li>
                        <li>
                            les personnes ayant un « handicap temporaire » tel qu’un bras cassé ou perdu leurs lunettes</li>
                        <li>
                            les personnes ayant « une limitation situationnelle » comme être en plein soleil ou dans un environnement où elles ne peuvent pas écouter l’audio
                        </li>
                        <li>...</li>
                    </ul>
                    <p>C'est pour cela que la fracture numérique ce doit d'être réduite un maximum, et que, développeurs et entreprises soient sensibilisés sur les pratiques à mettre en oeuvre pour réduire cette fracture.</p>
                `,
      },
      {
        title: 'Rendre le web accessible',
        id: 'web-access',
        content: `
                    <p>L’accessibilité du web dépend de plusieurs composants fonctionnant ensemble, comprenant les technologies web, les navigateurs et autres Screen reader.</p>
                    <p>L’Initiative pour l’accessibilité du Web, Web Accessibility Initiative du W3C (WAI (en anglais)) développe des spécifications techniques, des règles, des techniques et ressources d’accompagnement qui décrivent des solutions d’accessibilité. Elles sont considérées comme des normes internationales pour l’accessibilité du web: par exemple, WCAG 2.0 est aussi une norme ISO : ISO/IEC 40500.</p>
                    <p>Beaucoup d’aspects de l’accessibilité sont relativement faciles à comprendre et à mettre en œuvre. Certaines solutions d’accessibilité sont plus complexes et requièrent plus de connaissances pour être implémentées.</p>
                    <p>Il est plus efficace d’incorporer l’accessibilité au début d’un projet pour ne pas avoir à revenir en arrière et recommencer le travail.</p>
                    <p>Aujourd'hui, le service public ce doit d'��tre accessible à tout le monde, demain, il en sera de même pour toute entreprise du Cac40.<br/>Aux états unis, tous les sites se doivent d'être accessible sous peine de poursuites et de sanction financière!</p>
                `,
      },
      {
        title: 'Mon Expérience',
        id: 'exp',
        content: `
                    <p>Une fois de plus, j'ai découvert cette problématique lors du projet d'e 'E-commerce.</p>
                    <p>Le site étant destiné à l'international (et en particulier aux états unis), nous avons du adapter le site afin qu'il soit conforme à la norme RGAA</p>
                    <p>Étant sur la partie Front du site, une grande partie de se travail m'incombait:</p>
                    <ul>
                        <li>Utilisation des balises Wai/Aria</li>
                        <li>Contraste des couleurs</li>
                        <li>Taille des polices</li>
                        <li>Enchainement des focus sur Input</li>
                        <li>...</li>
                    </ul>
                    <p>L'accessibilité était au cœur de nos préocupations, aussi bien à la conception technico/fonctionnelles, durant les live design ou je représentait la partie technique, que pendant les dev</p>
                    <p>Aujourd'hui encore, et c'est notamment le cas aussi sur ce site web, j'essaye de vraiment rendre les sites sur lesquels je travaille, le plus accessible possible en intégrant des librairies qui sont elles aussi accessibles, comme par exemple Angular Material.</p>
                    <p>Il est nécessaire et même indispensable que tout le monde puisse accéder à Internet quel que soit la langue, le pays, les conditions, l'age, ...!</p>
                `,
      },
    ],
    other: [
      {
        title: 'Internationalization',
        url: '/blog/i18n',
      },
      {
        title: 'Responsive',
        url: '/blog/responsive',
      },
      {
        title: 'Analytics',
        url: '/blog/analytics',
      },
    ],
  },
  {
    template: 'analytics',
    group: 'concept',
    title: 'Analytics',
    breadcrumbs: [
      { name: 'Blog', url: '/blog', active: false },
      { name: 'Concept', url: '/blog', queryParams: { frag: 'concept' }, active: false },
      { name: 'Accessibilité', url: '/blog/a11y', active: true },
    ],
    showMore: true,
    subtitle: 'Données utilisateurs',
    content: `Améliorer l’accessibilité de votre site web permettra de toucher un public plus large, d’augmenter le trafic et les conversions sur votre site. Il faut toujours être conscient qu’entre 15% et 20% de la population souffrent d’un handicap: visuel, auditif, moteur…`,
    imagePath: 'assets/analytics.jpg',
    icon: 'bar_chart',
    iconLink: 'concept',
    projects: [
      {
        title: 'En cours',
        id: 'analytics',
        date: 'Bientôt',
        content: '<p>Contenu en cours de réalisation</p>',
      },
    ],
    other: [
      {
        title: 'Internationalization',
        url: '/blog/i18n',
      },
      {
        title: 'Accessibilité',
        url: '/blog/a11y',
      },
      {
        title: 'Responsive',
        url: '/blog/responsive',
      },
    ],
  },
];

export interface Article extends Card {
  template: string;
  group: string;
  showMore: boolean;
  breadcrumbs: Object[];
  title: string;
  content: string;
  subtitle: string;
  icon: string;
  customIcon?: boolean;
  iconLink?: string;
  imagePath: string;
  dates?: string;
  projects: Project[];
  other: { title: string; url: string }[];
}

export interface Project {
  title: string;
  id: string;
  date?: string;
  content: string;
  skills?: string[];
}

export function getArticleByTemplate(template: string): Article {
  return blog.find((article) => article.template === template);
}
