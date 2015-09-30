module.exports = {
    livereload: {
    	bsFiles:  {
    		src: ['www/**/*.html', 'www/**/*.js', 'www/**/*.css']
    	},
		options : {
			watchTask: true,
	    	server: {
	    		baseDir: 'www',
	    		routes: {
	    			'/bower_components' : 'bower_components'
	    		}	    		
	    	}
		}
    }
};