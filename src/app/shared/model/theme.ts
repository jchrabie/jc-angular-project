export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: 'light',
    properties: {
        '--foreground': '#3030301b',

        '--background': 'white',
        '--background-dark': '#DDD',

        '--primary': '#00bcd4',
        '--primary-dark': 'rgb(97,169,160)',
        '--primary-light': '#45c3b8',

        '--text': 'black',
        '--text-light': '#555'
    }
};

export const dark: Theme = {
    name: 'dark',
    properties: {
        '--foreground': '#3030308a',

        '--background': '#303030',
        '--background-dark': '#151515',

        '--primary': '#00bcd4',
        '--primary-dark': 'rgb(97,169,160)',
        '--primary-light': '#45c3b8',

        '--text': 'white',
        '--text-light': '#bbb'
    }
};
