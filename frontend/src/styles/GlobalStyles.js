import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --deep-wine: #240519;
    --yellow: #ffc600;
    --orange: #FF7121;
    --dark-orange: ;
    --maroon: #ff6b00;
    --white: #fff;
    --grey: #F0E1E1;
    --dark-grey: #797676;
    --deep-purple: #770264;
    --deeper-purple: #86259e;

    --semi-transparent-orange: rgba(255, 166, 26,.5);

      --lin-grad-smooth-orange: linear-gradient(180.14deg,#FF7121  -1.96%, #FF2E00 96.02%);

    --background-gradient: linear-gradient(107.69deg, #2A292E 0.39%, #312746 100%);

    --light-grad: linear-gradient(
      262.16deg,
      rgba(255, 107, 0, 0.3) 0.74%,
      rgba(255, 255, 255, 0) 99.73%
    ),
    linear-gradient(
      98deg,
      rgba(0, 13, 129, 0.3) 0%,
      rgba(255, 255, 255, 0) 99.66%
    ),
    #f0e1e1;


    --dark-grad: linear-gradient(262.16deg, rgba(255, 107, 0, 0.2) 0.74%, rgba(255, 255, 255, 0) 99.73%), linear-gradient(98deg, rgba(0, 13, 129, 0.2) 0%, rgba(255, 255, 255, 0) 99.66%), #410E23;


    --lightsripe-grad: linear-gradient(262.04deg, rgba(255, 107, 0, 0.2) 48.53%, rgba(255, 255, 255, 0) 99.73%), linear-gradient(97.96deg, rgba(219, 0, 255, 0.3) 0.9%, rgba(255, 247, 248, 0) 100%);

    --rainbow-overlay: linear-gradient(89.95deg, rgba(255, 168, 0, 0.7) 0.91%, rgba(134, 37, 158, 0.7) 99.01%);


    /* shadows */
    --close-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); //refactor this
    --shadow-low: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    --shadow-high: 1px 92px 70px 0px rgba(0, 0, 0, 0.2);

}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--black);
  }

  a {
    color: var(--orange);
    text-decoration: none;
    transition: .2s color;

    :hover {
      color:var(--deep-purple);
    }
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--orange);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  ul {
    padding:0;
  }

/* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
*/
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 28px;
  }

  html {
    scrollbar-width: thick;
    scrollbar-color: var(--orange) var(--white);
    scroll-behavior: smooth;
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--orange) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 1px;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  li {
    list-style-type: none;
  }


p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}


/* tables */
table {
  margin-top:.8em;
  text-align:left;
}

td {
  text-transform:capitalize;
  padding-bottom:.33em;
  padding-left: 3em;
}

th {
    padding-bottom:.33em;
}

.intro-video{
  grid-column:1/-1;
  overflow:hidden;
  border-radius:8px;
}

#___gatsby {
    width: 100%;
    height:100%;
}

#gatsby-focus-wrapper {
  width: 100%;
  height:100%;
}

`;

export default GlobalStyles;
