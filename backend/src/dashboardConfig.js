export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          // {
          //   title: 'Sanity Studio',
          //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
          //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
          //   name: 'sanity-gatsby-blog-20-studio',
          // },
          {
            title: 'Website',
            apiId: process.env.NETLIFY_API_ID,
            buildHookId: process.env.BUILDHOOKID,
            name: 'fitnessrepublic',
          },
        ],
      },
    },
    {
      name: 'project-info',
      layout: {
        width: 'large',
        height: 'small',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'medium',
        height: 'small',
      },
    },
  ],
};