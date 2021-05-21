// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// => object schemas
import businessDetails from './objects/businessDetails.js';
import hero from './objects/hero.js';
import cta from './objects/cta.js';
import heroTitle from './objects/heroTitle.js';
import news from './objects/news.js';
import excercise from './objects/excercise.js';
import set from './objects/set.js';
import social from './objects/social.js';
import staffMember from './objects/staffMember.js';
import video from './objects/video.js';
import target from './objects/target.js';


// => blog
import bodyPortableText from './objects/blog/bodyPortableText.js';
import bioPortableText from './objects/blog/bioPortableText.js';
import excerptPortableText from './objects/blog/excerptPortableText.js';
import mainImage from './objects/blog/mainImage.js';
import authorReference from './objects/blog/authorReference.js';




// document schemas
import page from './documents/page.js';
// import shop from './documents/shop.js';
import workout from './documents/workout.js';
// => blog
import author from './documents/blog/author.js';
import post from './documents/blog/post.js';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    staffMember,
    page,
    businessDetails,
    hero,
    heroTitle,
    cta,
    news,
    workout,
    set,
    excercise,
    video,
    social,
    target,
    // blog
    post,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
  ]),
})
