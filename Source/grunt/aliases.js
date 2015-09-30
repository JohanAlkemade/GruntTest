module.exports = {
    "build": ["wiredep", "sass", "useminPrepare", 'copy:dist', 'concat:generated', 'ngAnnotate:app', 'uglify:generated', 'cssmin:generated', 'usemin'],
    "serve": ["browserSync:livereload", "watch:sass"]
};