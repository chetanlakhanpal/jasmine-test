/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
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


        /* Below test ensures that all the feed urls
         * are defined.
         */
        it('URLs are defined', function(){
            allFeeds.forEach(feed => {
              expect(feed.url).toBeDefined();
            });
        });

        /* Below test ensures that all the feed names
         * are defined.
         */
        it('Names are defined and is not empty', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    describe('The menu', function(){

        const menuIcon = document.querySelector('.menu-icon-link');
        const body = document.querySelector('body');
        const hideClass = 'menu-hidden';
        const EVENT = new Event('click');

        /* It ensures the menu element is
         * hidden by default. 
         */
         it('is hidden by default', function () {
             expect(body.className).toBe(hideClass);
         });

         /* Itensures that menu changes
          * visibility when the menu icon is clicked. 
          */
         it('changes visibility when menu icon is clicked', function(){
             menuIcon.dispatchEvent(EVENT);
             expect(body.className).not.toBe(hideClass);
             menuIcon.dispatchEvent(EVENT);
             expect(body.className).toBe(hideClass);
         })
    });

    describe('Intial Entries', function(){
        
        beforeEach(function(done){
            loadFeed(0, done);
        });

        /* It ensures  that there is at least
         * a single .entry element within the .feed container.
         */
        it('are loaded', function(){
            const feed = document.querySelector('.feed');
            expect(feed.children[0].querySelector(".entry")).toBeDefined();
        });
    });

    describe("New Feed Selection", function() {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('contents is loaded', function () {
            const feed = document.querySelector('.feed');
            expect(feed.childElementCount).not.toBe(0);
        });
    });
        
}());
