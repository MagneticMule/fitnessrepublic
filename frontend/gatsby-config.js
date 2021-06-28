require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Fitness Republic UK",
    siteUrl: "https://www.fitnessrepublic.co.uk",
    author: "Thomas Sweeney",
    description:
      "Group Fitness Classes from ZUMBA to Yoga. Personal Training in a well equiped gym hosted in an immaculate, covid safe friendly environment in the heart of Ashby De La Zouch",
    image: "/images/logo-square.jpg",
    twitterUsername: "@ashbyfitness",
  },
  // cache will have to be manually cleared via 'gatsby clean'
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `s1k3b826`,
        dataset: `production`,
        watchMode: `true`,
        token: process.env.SANITY_TOKEN,
      },
    },
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: [`image`, `video`],
    //   },
    // },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.fitnessrepublic.co.uk",
        sitemap: "https://www.fitnessrepublic.co.uk/sitemap.xml",
        exclude: ["/404", "/privacy", "/terms", "/order-complete", "/thanks"],
        createLinkInHead: true,
        // env: {
        //   production: {
        //     policy: [
        //       {
        //         userAgent: "*",
        //         allow: "/",
        //         disallow: [
        //           "/404",
        //           "/privacy",
        //           "/terms",
        //           "/thank-you",
        //           "/thanks",
        //         ],
        //       },
        //     ],
        //   },
        // },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Fitness Republic Ashby",
        short_name: "Fitness Republic",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#000",
        display: "minimal-ui",
        icon: "src/assets/images/website-icon.png", // This path is relative to the root of the site.
        crossOrigin: `anonymous`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "UA-45461666-1",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-45461666-1",
          // Setting this parameter is optional
          anonymize: true,
        },
        googleTagManager: {
          trackingId: "GTM-WH7NK66", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          defaultDataLayer: { platform: "gatsby" },
        },
        environments: ["production"],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/public/**/*.html": [
            "cache-control: public",
            "cache-control:  max-age=0",
            "cache-control: must-revalidate",
          ],
          "/sw.js": [
            "cache-control: public",
            "cache-control:  max-age=0",
            "cache-control: must-revalidate",
          ],
          "/public/page-data/*": [
            "cache-control: public",
            "cache-control:  max-age=0",
            "cache-control: must-revalidate",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // type: `user-profile`,
        username: `8556131572`,
      },
    },
  ],
};
