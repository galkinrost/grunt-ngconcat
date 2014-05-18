'use strict';
module.exports = function (grunt) {

    var chalk = require('chalk'),
        concat = require('ngconcat');

    grunt.registerMultiTask('concat', 'Concatenate files.', function () {
        var done = this.async();
        this.files.forEach(function (f) {
            concat(f.src, function (err, src) {
                if (err) {
                    return grunt.log.warn(err.message);
                }
                grunt.file.write(f.dest, src);

                grunt.log.writeln('File ' + chalk.cyan(f.dest) + ' created.');

                done();
            });
        });

    });

};