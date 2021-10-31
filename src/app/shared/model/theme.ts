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
    '--background-light': '#f5f5f5',

    '--primary': '#00bcd4',
    '--primary-dark': 'rgb(97,169,160)',
    '--primary-light': '#45c3b8',

    '--text': '#303030',
    '--text-light': '#555',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--foreground': '#3030308a',
    '--background': '#303030',
    '--background-light': '#424242',

    '--primary': '#91d3d2',
    '--primary-dark': 'rgb(97, 169, 160)',
    '--primary-light': '#45c3b8',

    '--text': 'white',
    '--text-light': '#bbb',
  },
};
