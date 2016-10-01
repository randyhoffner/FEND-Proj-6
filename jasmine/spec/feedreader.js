/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

/*Test suite: RSS Feeds*/
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*Ans: When allFeeds is changed to be an empty array, above test,
        "RSS Feeds are defined", fails because, "Expected 0 not to be 0".  When
        allFeeds array components are restored, test again shows 0 failures.*/

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it ('each object url is defined and is not an empty url', function() {
             allFeeds.forEach(function(feed) {
                 expect(feed.url).toBeDefined();
                 expect(feed.url.length).not.toBe(0);
             });
         });
         /*Test epects feed urls to be defined and expects their lengths to be
         greater than 0.  Test passes, now 2 specs, 0 failures.  When an object
         url is messed up, this test fails.*/

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('each object feed has a name defined and the name is not empty', function() {
             allFeeds.forEach(function(feed) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBe(0);
             });
         });
    });

        /*Test expects feed name to be defined, and expects feed name length not
        to be 0.  This test passes, now 3 specs, 0 failures. When a feed's
        name is deleted, the test fails until it is restored.*/

    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('is hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /*HTML body initializes with class 'menu-hidden', this
         class is toggled each time the hamburger icon is clicked, by app.js lines 131,132.
         Above test expects class 'menu-hidden' be true by default.  Test passes.
         When HTML body class 'menu-hidden' is altered to 'menu-',
         test fails until 'menu-hidden' is restored.  4 specs 0 failures.*/

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('menu changes visibility when the menu icon is clicked', function() {
              $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
              $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /*Above tests the two expectations:  what happens when 'menu-icon-link'
    is clicked, and what happens when it is clicked again.  Passes, now 5 specs 0 failures.
    When click function, app.js lines 131,132 is disabled, 4 of 5 tests fail
    until click function is restored.*/

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
    });

    /*Test suite for 'Initial Entries', uses beforeEach and done() functions
    recognizing that loadFeed() is asynchronous*/

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    it('.feed container contains at least a single .entry element', function() {
        expect($('.feed .entry').length).not.toBe(0);
    });

    /*Above test ensures that when loadFeed is called and completes, there
    is at least one .entry element within the .feed container.  Now 6 specs 0 failures.
    When loadFeed function is disabled, produces 2 failures.*/

    /* TODO: Write a new test suite named "New Feed Selection"*/
    /*Test suite must discern the difference between old and new content, and
    must run after feed content is done loading.  Requires the use of beforeEach and
    done() functions for old feed (previousContent) and new feed (newContent).*/
    describe('New Feed Selection', function() {
        var $previousContent,
            $newContent;

            beforeEach(function(done) {
                loadFeed(0, function() {
                    $previousContent = $('.feed').html();
                    done();
                    console.log($previousContent);
                });
            });

            beforeEach(function(done) {
                loadFeed(1, function() {
                    $newContent = $('.feed').html();
                    done();
                    console.log($newContent);
                });
            });

            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */

            it('content changes when a new feed is loaded', function() {
                expect($previousContent).not.toEqual($newContent);
            });
    });
            /*This test ensures that when a new feed is loaded, the feed content
            actually changes, by expecting previousContent not to equal newContent.
            Test succedes, yielding 7 specs, 0 failures.  Console logging
            shows previous content and new content.*/

});
}());
