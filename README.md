#Front End Nanodegree Project 6 -- Feed Reader Testing

##Overview
This  project requires the creation of 6 tests to be run on a blog feedreader,  each of which tests a functionality that the program requires.  It runs these tests using Jasmine and Handebars, and the tests are written into feedreader.spec.js so that jasmine will run them. 

##Getting Started
To run this project, fork or download the files from github.io/randyhoffner/FEND-Proj-6, open the folder, and run index.html in a browser.

This will produce a set of blog feeds called UdaciFeeds.  To change feeds, click on the hamburger icon, which will slide out a menu of available feeds.  Select the feed of interest by clicking on its name in the menu.

This code runs a total of 7 tests in 4 test suites on the project, which, when passed, will be listed on the bottom left-hand side of the screen.  To run all tests again, simply refresh the page.  To run any individual test, click on it on the bottom left hand list.  To return to running all tests, click on"all" in the test status block on the bottom left.

##Tests Run by Jasmine
The first test in the RSS Feeds suite, which was provided, ensures that the RSS feeds are defined.  The two tests in this suite that must be written ensure that (a) each object url is defined and is not an empty url, and (b) each object feed has a name defined and the name is not empty.

The second test suite is titled "The menu".  This suite contains two tests, ascertaining that (a) the menu is hidden by default; and (b)the menu appears and disappears each time the hamburger icon is clicked.

The third test suite is titled "Initial Entries", and contains a single test that ensures that the .feed container contains at least a single .entry element.  Because loadFeed is asynchronous, we use Jasmine functions beforeEach and done() to ensure that loadFeed is finished before running test.

The fourth test suite is titled "New Feed Selection", and it contains a single test that ensures that the content changes when a new feed is loaded.  Also uses beforeEach and done() to ensure content is done loading before running tests.

Explanation of the rationale behind each test suite and test can be found in comments in the feedreader.js file. 
	
	
