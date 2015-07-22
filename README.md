# angular-scaffold
use AngularJS, Gulp, Uglify, SourceMaps, Karma

# pleaes update dependencies after checkout.

# run tests
sh```
gulp karma
```

# start server
sh```
gulp
```
# open develop tool in browser, you can see the source js file under source folder, which deminified with sourcemaps file. Make sure you enabled the source maps in browser.
You can use those source file to debug the js. do not write sourcemaps file for production by modifying the gulpFile.js file.
