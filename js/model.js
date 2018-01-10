/**
 * Model file for working with data
 */

/**
 * Main Model Object
 *
 */

var model = {};

/**
  * Gets posts from local store
  *
  * @return posts {array} An array of post objects
  */
model.getLoganStore = function() {
 
 return JSON.parse( localStorage.getItem( 'vanillaPress' ) );
 
};

/**
  * Gets content from local store
  *
  * @return store {object} Object or array of objects of site data
  */


/**
  * Saves temporary store to local storage.
  *
  * @param store {string} JSON string of data to store
  */
model.getLocalStore = function() {

  return JSON.parse( localStorage.getItem( 'vanillaPress' ) );

};


/**
  * Deletes data from local storage
  *
  */

