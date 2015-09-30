module.exports = {
    sass: {
        files: ['www/css/**/*.scss'], tasks: ['sass'],
        options: {
            interrupt: true,
            atBegin: true 
        }
    },
    js: {
        files: ['www/app/**/*.js'], tasks: ['jshint']
    }
};