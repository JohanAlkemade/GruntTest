module.exports = {
    dist: {
        files: [
            {
                cwd: 'www',
                src: '**/*',
                dest: 'dist/www',
                expand: true
            }
        ]
    }
};