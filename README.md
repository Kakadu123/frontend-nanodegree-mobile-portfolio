##Instructions by Samuel Gaspar

##There are two branches of the project:

1. Master branch (it holds the developement code with comments)
1. gh-pages branch (it holds the production code uglified using gulp)

gh-pages branch contains gulpfile.js that automates minification and uglification. The gh-pages branch was also set up to use Github hosting functionality. The hosted minified version can be reviewed and tested in PageSpeed to comply with requirement to score above 90. 

http://kakadu123.github.io/frontend-nanodegree-mobile-portfolio/

##Main.js optimization details:

   Pizza resize
  optimalization based on using Class selector that is more efficient. Selected DOM objects passed to an array to avoid multiple DOM traversing sizeSwitcher function simplified and returns ratio of pizza elements to be in style.width attribute assignement

   FrameRate optimalization
  getElementsByClassName is a more efficient selector. Math.sin calculations done outside of the for loop to reduce processing time as phase assumes 5 distinct values repeated. Number of sliding pizzas when the page loads is decreased as basicLeft assumes 8 distinct values and top value is based on 256px grid system.

  More details on the optimalizations in resizePizzas and changePizzaSizes in main.js file
