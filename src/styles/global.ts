import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --THEME_COLOR_01:hsl(8, 67.6%, 63.7%);
        --THEME_COLOR_02:hsl(352, 59%, 46.9%);
        --THEME_COLOR_03:hsl(342, 58.8%, 33.3%)
        --THEME_COLOR_04:hsl(225, 66%, 10.4%);

        --COLOR_GRAY-100: hsl(0, 0%, 10%);
        --COLOR_GRAY-300: hsl(0, 0%, 25%);
        --COLOR_GRAY-500: hsl(0, 0%, 50%);
        --COLOR_GRAY-700: hsl(0, 0%, 75%);
        --COLOR_GRAY-900: hsl(0, 0%, 90%);
        
        --COLOR_DANGER: hsl(0, 79.1%, 51.2%);
        --COLOR_WARNING: hsl(45, 93.8%, 62%);
        --COLOR_SUCCESS: hsl(54, 60.8%, 41%);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html,
    body {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    #root {
        isolation: isolate;
    }

    @media print {
        @page {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
`;
