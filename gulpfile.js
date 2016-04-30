'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var pkg = require('./package');
var now = new Date();
var scripts = {
  name: 'validator.js',
  min: 'validator.min.js',
  all: [
    'gulpfile.js',
    'dist/validator.js',
    'demo/js/main.js',
    'docs/js/main.js',
    'test/*.js'
  ],
  list: [
    'src/intro.js',
    'src/variables.js',
    'src/utilities.js',
    'src/validator.js',
    'src/defaults.js',
    'src/messages.js',
    'src/init.js',
    'src/validators.js',
    'src/methods.js',
    'src/plugin.js',
    'src/outro.js'
  ],
  main: 'dist/validator.js',
  docs: 'docs/js',
  site: '_gh_pages/js',
  src: 'src/*.js',
  dest: 'dist'
};
var replacement = {
  regexp: /@\w+/g,
  filter: function (placeholder) {
    switch (placeholder) {
      case '@VERSION':
        placeholder = pkg.version;
        break;

      case '@YEAR':
        placeholder = now.getFullYear();
        break;

      case '@DATE':
        placeholder = now.toISOString();
        break;
    }

    return placeholder;
  }
};

gulp.task('js+', function () {
  return gulp.src(scripts.list)
    .pipe(plugins.concat(scripts.name))
    .pipe(gulp.dest(scripts.dest));
});

gulp.task('jshint', ['js+'], function () {
  return gulp.src(scripts.all)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'));
});

gulp.task('jscs', ['js+'], function () {
  return gulp.src(scripts.all)
    .pipe(plugins.jscs())
    .pipe(plugins.jscs.reporter());
});

gulp.task('js', ['jshint', 'jscs'], function () {
  return gulp.src(scripts.main)
    .pipe(plugins.replace(replacement.regexp, replacement.filter))
    .pipe(gulp.dest(scripts.dest))
    .pipe(gulp.dest(scripts.site))
    .pipe(plugins.rename(scripts.min))
    .pipe(plugins.uglify({
      preserveComments: 'license'
    }))
    .pipe(gulp.dest(scripts.dest))
    .pipe(gulp.dest(scripts.site));
});

gulp.task('htmlcomb:demo', function () {
  return gulp.src('demo/*.html')
    .pipe(plugins.htmlcomb())
    .pipe(gulp.dest('demo'));
});

gulp.task('htmlcomb:docs', function () {
  return gulp.src('docs/*.html')
    .pipe(plugins.htmlcomb())
    .pipe(gulp.dest('docs'));
});

gulp.task('htmlcomb', ['htmlcomb:demo', 'htmlcomb:docs']);

gulp.task('assets:js', function () {
  return gulp.src([
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/qunit/qunit/qunit.js'
    ])
    .pipe(gulp.dest('assets/js'));
});

gulp.task('assets:fonts', function () {
  return gulp.src([
      'bower_components/bootstrap/fonts/*'
    ])
    .pipe(gulp.dest('assets/fonts'));
});

gulp.task('assets:css', ['assets:fonts'], function () {
  return gulp.src([
      'bower_components/bootstrap/dist/css/bootstrap.min.css',
      'bower_components/qunit/qunit/qunit.css'
    ])
    .pipe(gulp.dest('assets/css'));
});

gulp.task('assets', ['assets:js', 'assets:css']);

gulp.task('docs:i18n', function () {
  return gulp.src(['i18n/*.js'])
    .pipe(gulp.dest('_gh_pages/js'));
});

gulp.task('docs:all', function () {
  return gulp.src('docs/**')
    .pipe(gulp.dest('_gh_pages'));
});

gulp.task('docs', ['docs:i18n', 'docs:all']);

gulp.task('test', ['js'], function () {
  return gulp.src('test/*.html')
    .pipe(plugins.qunit());
});

gulp.task('release', ['test', 'docs'], function () {
  return gulp.src('dist/*.{js,css}')
    .pipe(gulp.dest('_releases/' + pkg.version));
});

gulp.task('watch', function () {
  gulp.watch(scripts.src, ['js+']);
  gulp.watch('docs/**', ['docs:all']);
});

gulp.task('default', ['watch']);
