module.exports = {
    options: {
        sourceMap: false
    },
    app: {
        files: [
            {
                expand: true,
                cwd: 'www/css',
                src: ['*.scss'],
                dest: 'www/css',
                ext: '.css'
            }
        ]
    }
};