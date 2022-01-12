const gulp = require("gulp");

//Создаем первый Gulp Task
gulp.task("hello", function(cb) {
    console.log("Hello. from Gulp!");
    cb();
});