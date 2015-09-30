module.exports = function(grunt) {

    require('load-grunt-config')(grunt, {
        // ...
        jitGrunt: {
            staticMappings: {
                useminPrepare: 'grunt-usemin'
            }
        }
    });

};