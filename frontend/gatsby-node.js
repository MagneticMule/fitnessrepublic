const path = require('path');
const isFuture = require('date-fns');


const turnPostsIntoPages = async ({ graphql, actions }) => {
 // grab the page template for the blog posts
  const blogPostTemplate = path.resolve('./src/templates/blog/post-template.js');

 // query all the posts
const {data} = await graphql(`
  query {
    posts: allSanityPost {
      nodes {
        id
        title
        slug {
          current
        }
        excerpt
      }
    }
  }
  `);
  // loop over blog posts
  data.posts.nodes.forEach(post=> {
    console.log('Creating a page for the blog post: ', post.title);
    actions.createPage({
      // create the url of the individual page
      path: `/blog/post/${post.slug.current}`,
      component: blogPostTemplate,
      context: {
        title: post.title,
        slug: post.slug.current,
      }
    });
  });
}

const turnWorkoutsIntoPages = async ({ graphql, actions }) => {
 // grab the page template for the blog posts
  const workoutTemplate = path.resolve('./src/templates/workout/workout-template.js');

  const {data} = await graphql(`
  query{
    workouts: allSanityWorkout {
			nodes {
        id
				name
        slug {
          current
        }
      }
    }
  }`);

    data.workouts.nodes.forEach(workout=> {
    console.log('Creating a page for the workout: ', workout.name);
    actions.createPage({
      // create the url of the individual page
      path: `/workout/${workout.slug.current}`,
      component: workoutTemplate,
      context: {
        title: workout.name,
        slug: workout.slug.current,
      }
    });
  });
}

exports.createPages = async (params) => {
  console.log('--- Creating Pages ---');
  await turnPostsIntoPages(params);
  // await turnWorkoutsIntoPages(params);
}
