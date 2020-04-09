#### Close the loop!

In this assignment, you're going to replace the fake `data0.json`, `data1.json`, etc files from the Critter Map assignment with a web application that serves up the critters and coordinates.



Clone this repo:

* Add your code from the first Critter Map assignment as a starting point.
* Make sure you do not include the .json files



```
https://classroom.github.com/a/Os3QRGmM
```



**Use the critters.sqlite database.**



This way everyone is working with the same data. Set up your web application the same way as the `Music Library` assignment. That is:

- A `models` subdirectory for the generated `sequelize` models.
- A `models/index.js` file for importing all the models into other files.
- Add Express routes to:
  1. Retrieve the critter names and ids for your select box
  2. Retrieve the critter coordinates by id (you can retrieve the image url in step 1 or step 2)
- The `static` subdirectory to serve up the critter map client-side files (html, js)



#### Breaking it down

Here's how I would approach the problem.

1. Check out the database with SQlite Browser and understand how it's set up. Generate your models with `sequelize-auto`, create the `index.js` file to set up importing and establish the associations, and test out your retrievals in a command line test file (don't worry about serving it up via HTTP yet)!

2. Set up the server routes to return all critters (name & id) for the select box, and all coordinates for a given id. As mentioned, you can return the image url in either retrieval, depending on how you want to store that information on the client. Test this stuff in a browser! Don't try to connect it to AJAX until it works.

3. Connect your frontend by using AJAX to populate the select box on load (hint: have an empty `select` in the html file and use code to add `option` objects to it.)

4. Next, make it retrieve the coordinates from your server instead of the fake files. Since we added ids to the coordinates, you'll need to store those somewhere (on the img objects is recommended, you'll need them for the next part).

   