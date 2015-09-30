module.exports = {
    app: {
        //'dist/www/app/**/*.js'
        files: [
        {
            expand: true,
            cwd: '.tmp/concat/gen',
            src: ['*.js'],
            dest: '.tmp/concat/gen'
        }]
    }
};