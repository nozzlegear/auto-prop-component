"use strict";

const ts      = require("gulp-typescript");
const gulp    = require("gulp");
const path    = require("path");
const merge   = require("merge2");
const replace = require("gulp-string-replace");

gulp.task("build", () =>
{
    const project = ts.createProject(path.resolve(__dirname, "tsconfig.json"));
    const build = gulp.src(["index.ts", "components/**/*.{ts,tsx}"])
        .pipe(ts(project))

    const js = build
        .js
        .pipe(gulp.dest("dist"));

    const dts = build
        .dts
        .pipe(replace(/\/\/\/ *<reference.*\/>/ig, ""))
        .pipe(gulp.dest("dist"));

    return merge([js, dts]);
})