module.exports = {
    html: 'www/index.html',
    options: {
        dest: 'dist/www/',
        flow: {
            html: {
                steps: {
                    js: ['concat', 'uglify'],
                    css: ['concat', 'cssmin']
                },
                post: {}
            }
        }
     }
};