export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Website: Hosted on Netlify',
        sites: [
          // {
          //   title: 'Sanity Studio',
          //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
          //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
          //   name: 'sanity-gatsby-blog-20-studio',
          // },
          {
            title: 'Fitness Republic Website',
            apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID,
            buildHookId: process.env.SANITY_STUDIO_BUILDHOOKID,
            name: 'fitnessrepublic',
          },
        ],
      },
    },
    // {
    //   name: 'project-info',
    //   layout: {
    //     width: 'large',
    //     height: 'small',
    //   },
    // },
    {
      name: 'project-users',
      layout: {
        width: 'medium',
        height: 'small',
      },
    },
  ],
};