/**
 * Router file for managing url changes
 */

 /**
 * The main router object
 */

var router = {};

 /**
 * Initialize Router
 */

 router.init = function() {

   router.listenPageChange();

 };

 /**
 * Get slug from the url
 * @return slug {string} slug for content
 */

router.getSlug = function() {

  var slug = window.location.hash;

  if( "" === slug ) {

    return null;

  } else {

    return slug.substring( 1 );
  }
}

 /**
 * Listener function for URL changes
 */

router.listenPageChange = function() {

  window-addEventListener( 'hashchange', router.loadContent, false )

};

/**
* Determines what to load in the view
*/

router.loadContent = function() {

  var slug = router.getSlug();

  if( null === slug ) {

    view.loadBlogPosts();

  } else {

    console.log( 'Load post ' + slug );

  }

}
