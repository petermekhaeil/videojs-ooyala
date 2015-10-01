module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',

        connect: {
            dev: {
                options: {
                    port: 3000,
                    keepalive: true
                }
            }
        },

        jshint: {
            all: ['gruntfile.js', 'src/**/*.js'],
            options : {
                jshintrc: true
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            build: {
                files: {
                    'dist/videojs.ooyala.js': ['src/videojs.ooyala.js']
                }
            }
        },

        jscs: {
            src: 'src/**/*.js',
            options: {
                config: '.jscsrc'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.registerTask('default', ['jshint', 'uglify', 'jscs', 'connect']);
};
