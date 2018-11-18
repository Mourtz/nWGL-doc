module.exports = function(grunt) {

    grunt.initConfig({
        jsdoc : {
            dist : {
                src: ['nWGL/nWGL.js'],
                options: {
                    destination: 'doc'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.registerTask('default', ['jsdoc']);
};
