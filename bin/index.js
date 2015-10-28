#!/usr/bin/env node

var gulp   = require("gulp");
var eslint = require("gulp-eslint");
var path   = require("path");
var argv   = require("minimist")(process.argv.slice(2), {
    boolean: [ "watch" ],
    alias  : {
        watch: "-w"
    }
});

// if (argv._.length === 0) {
//     // ERROR
// }

gulp.task("lint", function () {

    return gulp.src(argv._)
        .pipe(eslint({
            configFile : __dirname + "/../config/eslint.json",
            reset      : true,
            useEslintrc: false
        }))
        .pipe(eslint.format());
});

gulp.task("watch", [ "lint" ], function () {

    gulp.watch(argv._, [ "lint" ]);
});

gulp.start(
    argv.watch ?
        "watch" :
        "lint"
);
