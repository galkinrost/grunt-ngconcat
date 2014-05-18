NGCONCAT
=========

NGCONCAT is lightweight tool to concat your Angular.js application in one file.

Other plugins
--
<a href="https://github.com/galkinrost/gulp-ngconcat">Gulp</a>

Development
--
<a href="https://github.com/galkinrost/ngconcat">NgConcat</a>

Install
--
```sh
npm install grunt-ngconcat
```

API
--

```javascript
module.exports = function (grunt) {

    grunt.initConfig({

        concat: {
            default_options: {
                files: {
                    'build/app.js': 'test/src/complex/**/*.js'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-ngconcat');
};

```
AND
```sh
grunt concat
```


License
----

MIT

