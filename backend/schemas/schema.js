// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// => object schemas
import businessDetails from './objects/businessDetails';
import hero from './objects/hero';
import cta from './objects/cta';
import heroTitle from './objects/heroTitle';
import news from './objects/news';
import excercise from './objects/excercise';
import set from './objects/set';
import social from './objects/social';
import staffMember from './objects/staffMember';
import video from './objects/video';
import target from './objects/target';
import client from './objects/client';
import membership from './objects/membership';
import instagram from './objects/instagram';
import alert from './objects/alert';
import fitnessClass from './objects/fitnessClass';

// => blog
import bodyPortableText from './objects/blog/bodyPortableText';
import bioPortableText from './objects/blog/bioPortableText';
import excerptPortableText from './objects/blog/excerptPortableText';
import mainImage from './objects/blog/mainImage';
import authorReference from './objects/blog/authorReference';

// => workput
import muscleGroup from './objects/workout/muscleGroup';

// document schemas
import page from './documents/page';
// import shop from './documents/shop';
import workout from './documents/workout';
// => blog
import post from './documents/blog/post';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    staffMember,
    client,
    page,
    businessDetails,
    hero,
    heroTitle,
    cta,
    news,
    workout,
    membership,
    set,
    excercise,
    video,
    social,
    target,
    instagram,
    alert,
    fitnessClass,
    // blog
    post,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    // workout
    muscleGroup,
  ]),
});
