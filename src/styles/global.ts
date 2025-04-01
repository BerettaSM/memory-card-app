import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --THEME_COLOR_01:#e17564;
        --THEME_COLOR_02:hsl(352, 59%, 46.9%);
        --THEME_COLOR_03:hsl(342, 58.8%, 33.3%);
        --THEME_COLOR_04:hsl(225, 66%, 10.4%);

        --COLOR_GRAY-100: hsl(0, 0%, 10%);
        --COLOR_GRAY-300: hsl(0, 0%, 25%);
        --COLOR_GRAY-500: hsl(0, 0%, 50%);
        --COLOR_GRAY-700: hsl(0, 0%, 75%);
        --COLOR_GRAY-900: hsl(0, 0%, 90%);
        
        --COLOR_DANGER: hsl(0, 79.1%, 51.2%);
        --COLOR_WARNING: hsl(45, 93.8%, 62%);
        --COLOR_SUCCESS: hsl(54, 60.8%, 41%);

        --SHADOW_COLOR: 9deg 54% 38%;
        --SHADOW_ELEVATION_LOW:
            0.3px 0.5px 0.7px hsl(var(--SHADOW_COLOR) / 0.34),
            0.4px 0.8px 1px -1.2px hsl(var(--SHADOW_COLOR) / 0.34),
            1px 2px 2.5px -2.5px hsl(var(--SHADOW_COLOR) / 0.34);
        --SHADOW_ELEVATION_MEDIUM:
            0.3px 0.5px 0.7px hsl(var(--SHADOW_COLOR) / 0.36),
            0.8px 1.6px 2px -0.8px hsl(var(--SHADOW_COLOR) / 0.36),
            2.1px 4.1px 5.2px -1.7px hsl(var(--SHADOW_COLOR) / 0.36),
            5px 10px 12.6px -2.5px hsl(var(--SHADOW_COLOR) / 0.36);
        --SHADOW_ELEVATION_HIGH:
            0.3px 0.5px 0.7px hsl(var(--SHADOW_COLOR) / 0.34),
            1.5px 2.9px 3.7px -0.4px hsl(var(--SHADOW_COLOR) / 0.34),
            2.7px 5.4px 6.8px -0.7px hsl(var(--SHADOW_COLOR) / 0.34),
            4.5px 8.9px 11.2px -1.1px hsl(var(--SHADOW_COLOR) / 0.34),
            7.1px 14.3px 18px -1.4px hsl(var(--SHADOW_COLOR) / 0.34),
            11.2px 22.3px 28.1px -1.8px hsl(var(--SHADOW_COLOR) / 0.34),
            17px 33.9px 42.7px -2.1px hsl(var(--SHADOW_COLOR) / 0.34),
            25px 50px 62.9px -2.5px hsl(var(--SHADOW_COLOR) / 0.34);
        --SHADOW_INSET_ELEVATION_LOW:
            inset 0.3px 0.5px 0.7px hsl(var(--SHADOW_COLOR) / 0.34),
            inset 0.4px 0.8px 1px -1.2px hsl(var(--SHADOW_COLOR) / 0.34),
            inset 1px 2px 2.5px -2.5px hsl(var(--SHADOW_COLOR) / 0.34);
        --SHADOW_INSET_ELEVATION_MEDIUM:
            inset 0.3px 0.5px 0.7px hsl(var(--SHADOW_COLOR) / 0.36),
            inset 0.8px 1.6px 2px -0.8px hsl(var(--SHADOW_COLOR) / 0.36),
            inset 2.1px 4.1px 5.2px -1.7px hsl(var(--SHADOW_COLOR) / 0.36),
            inset 5px 10px 12.6px -2.5px hsl(var(--SHADOW_COLOR) / 0.36);
        --SHADOW_INSET_ELEVATION_HIGH:
            inset 0.3px 0.5px 0.7px hsl(var(--SHADOW_COLOR) / 0.34),
            inset 1.5px 2.9px 3.7px -0.4px hsl(var(--SHADOW_COLOR) / 0.34),
            inset 2.7px 5.4px 6.8px -0.7px hsl(var(--SHADOW_COLOR) / 0.34),
            inset 4.5px 8.9px 11.2px -1.1px hsl(var(--SHADOW_COLOR) / 0.34),
            inset 7.1px 14.3px 18px -1.4px hsl(var(--SHADOW_COLOR) / 0.34),
            inset 11.2px 22.3px 28.1px -1.8px hsl(var(--SHADOW_COLOR) / 0.34),
            inset 17px 33.9px 42.7px -2.1px hsl(var(--SHADOW_COLOR) / 0.34),
            inset 25px 50px 62.9px -2.5px hsl(var(--SHADOW_COLOR) / 0.34);
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
        font-family: Verdana, Geneva, Tahoma, sans-serif;
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

    @keyframes blink {
        0%, 100% {
            color: currentColor;
            border-color: currentColor;
        }
        80% {
            color: var(--color);
            border-color: var(--color);
        }
    }
`;
