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
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: ["Price"],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: true,
    //   },
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
    // `gatsby-plugin-preload-fonts`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: ["Lato:100,300,400,700,900", "Nunito:100,200,300,400,700,900"]
    //   }
    // },
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
        env: {
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
                // disallow: ["/404", "/privacy", "/terms"],
              },
            ],
          },
        },
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
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-45461666-1",
          // Setting this parameter is optional
          anonymize: true,
        },
        // googleTagManager: {
        //   trackingId: "GTM-WH7NK66", // leave empty if you want to disable the tracker
        //   cookieName: "gatsby-gdpr-google-tagmanager", // default
        //   dataLayerName: "dataLayer" // default
        // },
        // facebookPixel: {
        //   pixelId: "YOUR_FACEBOOK_PIXEL_ID"
        // },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
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
      resolve: `gatsby-source-instagram`,
      options: {
        // type: `user-profile`,
        username: `8556131572`,
      },
    },
  ],
};
