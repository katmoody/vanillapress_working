/**
 * Model file for working with data
 */

/**
 * Main Model Object
 *
 */

var model = {};

model.init = function() {

  model.updateLocalStore( jsonData );

};

/**
  * Gets posts from local store
  *
  * @return posts {array} An array of post objects
  */

model.getPosts = function() {

  var posts = JSON.parse( model.getLocalStore() );
  return posts;

};

/**
 * Get single post based on url slug
 *
 * @param slug {string} the slug for the post
 * @return post {object} single post
 */

model.getPost = function( slug ) {

  var posts = JSON.parse( model.getLocalStore() );

  for ( i = 0, max = posts.length; i < max; i++ ) {

    if ( slug === posts[i].slug ) {

      return posts[i];

    }

  }

  return null;

}

/**
  * Gets content from local store
  *
  * @return store {object} Object or array of objects of site data
  */

model.getLocalStore = function() {

 var store = JSON.parse( localStorage.getItem( 'vanillaPress' ) );

 return store;

};

/**
  * Saves temporary store to local storage.
  *
  * @param store {string} JSON string of data to store
  */

model.updateLocalStore = function( store ) {

  localStorage.setItem( 'vanillaPress', JSON.stringify(store) );

};

/**
  * Deletes data from local storage
  *
  */

model.removeLocalStore = function() {

  localStorage.removeItem( 'vanillaPress' );

};
