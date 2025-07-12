

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backColor: string;
      logoColor: string;
      bgColor: string;
      fontColor: string;
      fontPrimary: string;
      fontSecondary: string;
      // agrega aquí otros colores que uses, por ejemplo:
      // primary: string;
      // secondary: string;
    };
    // agrega aquí otros campos de tu theme si los tienes
  }
}


export const Theme = {
  colors: {
    backColor: '#f9f9f9',
    logoColor: '#df1c1c',
    bgColor: '#0e0d0d',
    fontColor: '#333',
    darkColor: '#000',
    fontPrimary: "Playfair Display, sans-serif",
    fontSecondary: "Barlow, sans-serif",
  },
};
