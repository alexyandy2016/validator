module.exports = function (grunt) {

  'use strict';

  var fileList = [
        'src/intro.js',
        'src/variables.js',
        'src/utilities.js',
        'src/defaults.js',
        'src/init.js',
        'src/methods.js',
        'src/validators.js',
        'src/plugin.js',
        'src/outro.js'
      ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    today: grunt.template.today('yyyymmdd'),

    clean: {
      dist: ['dist'],
      cache: ['_caches/<%= pkg.version %>+<%= today %>'],
      release: ['_releases/<%= pkg.version %>'],
      docs: ['_gh_pages']
    },

    concat: {
      dist: {
        src: fileList,
        dest: 'dist/<%= pkg.name %>.js'
      },
      build: {
        options: {
          sourceMap: true,
          sourceMapName: 'dist/<%= pkg.name %>.js.map'
        },
        src: fileList,
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    jshint: {
      options: {
        jshintrc: 'src/.jshintrc'
      },
      main: [
        'Gruntfile.js',
        'dist/<%= pkg.name %>.js'
      ],
      test: ['test/**/*.js']
    },

    jscs: {
      options: {
        config: 'src/.jscsrc'
      },
      main: [
        'Gruntfile.js',
        'dist/<%= pkg.name %>.js'
      ],
      test: ['test/**/*.js']
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      dist: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    replace: {
      options: {
        prefix: '@',
        patterns: [{
          match: 'VERSION',
          replacement: '<%= pkg.version %>'
        }, {
          match: 'YEAR',
          replacement: (new Date()).getFullYear()
        }, {
          match: 'DATE',
          replacement: (new Date()).toISOString()
        }]
      },
      dist: {
        expand: true,
        flatten: true,
        src: ['dist/*.js'],
        dest: 'dist'
      }
    },

    csslint: {
      main: [
        'docs/css/main.css'
      ]
    },

    htmlmin: {
      options: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        collapseWhitespace: true
      },
      docs: {
        expand: true,
        flatten: true,
        src: 'docs/index.html',
        dest: '_gh_pages'
      }
    },

    validation: {
      all: ['docs/*.html', 'demo/*.html', 'examples/**/*.html']
    },

    qunit: {
      test: ['test/*.html']
    },

    copy: {
      cache: {
        expand: true,
        flatten: true,
        src: 'dist/*',
        dest: '_caches/<%= pkg.version %>+<%= today %>'
      },
      release: {
        expand: true,
        flatten: true,
        src: 'dist/*',
        dest: '_releases/<%= pkg.version %>'
      },
      docs: {
        expand: true,
        cwd: 'docs',
        src: '**',
        dest: '_gh_pages'
      },
      sync: {
        expand: true,
        flatten: true,
        src: 'dist/*.js',
        dest: '_gh_pages/js'
      },
      update: {
        files: [{
          expand: true,
          flatten: true,
          cwd: 'bower_components',
          src: [
            'jquery/dist/jquery.min.js',
            'bootstrap/dist/js/bootstrap.min.js',
            'qunit/qunit/qunit.js'
          ],
          dest: 'assets/js'
        }, {
          expand: true,
          flatten: true,
          cwd: 'bower_components',
          src: [
            'bootstrap/dist/css/bootstrap.min.css',
            'qunit/qunit/qunit.css'
          ],
          dest: 'assets/css'
        }, {
          expand: true,
          flatten: true,
          cwd: 'bower_components',
          src: [
            'bootstrap/dist/fonts/*'
          ],
          dest: 'assets/fonts'
        }]
      }
    },

    watch: {
      js: {
        files: ['src/*.js'],
        tasks: 'concat:build'
      },
      docs: {
        files: ['docs/**'],
        tasks: 'newer:copy:docs'
      }
    }
  });

  require('load-grunt-tasks')(grunt); // Loading dependencies

  grunt.registerTask('js', ['concat:dist', 'jshint', 'jscs', 'uglify:dist']);
  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('cache', ['clean:cache', 'copy:cache']);
  grunt.registerTask('release', ['clean:release', 'copy:release']);
  grunt.registerTask('docs', ['clean:docs', 'copy:docs', 'copy:sync', 'htmlmin']);
  grunt.registerTask('default', ['clean:dist', 'js', 'test', 'replace', 'cache', 'release', 'docs']);
};
