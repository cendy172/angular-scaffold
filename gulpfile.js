var gulp = require('gulp');
var plugins = require("gulp-load-plugins")();
var karma = require('karma').Server;

var MAP_DEST = './maps';

gulp.task('scripts', function(){
    //combine all js files of the app
    gulp.src(['./app/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write(MAP_DEST))
        .pipe(gulp.dest('./build'));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src(['!./app/index.html',
        './app/**/*.html'])
        .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('css', function(){
    gulp.src('./app/**/*.css')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.css'))
        .pipe(plugins.minifyCss({compatibility: 'ie8'}))
        .pipe(plugins.sourcemaps.write(MAP_DEST))
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorJS', function(){
    //concatenate vendor JS files
    gulp.src(['!./bower_components/**/*.min.js',
        './bower_components/**/*.js'])
    .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('lib.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write(MAP_DEST))
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    gulp.src(['!./bower_components/**/*.min.css',
        './bower_components/**/*.css'])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('lib.css'))
        .pipe(plugins.minifyCss({compatibility: 'ie8'}))
        .pipe(plugins.sourcemaps.write(MAP_DEST))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-index', function() {
    gulp.src('./app/index.html')    
        .pipe(gulp.dest('./build'));
});

gulp.task('watch',function(){
    gulp.watch([
        'build/**/*.html',        
        'build/**/*.js',
        'build/**/*.css'        
    ], function(event) {
        return gulp.src(event.path)
            .pipe(plugins.connect.reload());
    });
    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/**/*.css',['css']);
    gulp.watch('./app/index.html',['copy-index']);
});

gulp.task('karma', function(done){
    new karma({
    configFile: __dirname + '/test/config/karma-unit.js',
    singleRun: true
  }, done).start();
});

gulp.task('connect', function() {
    plugins.connect.server({
        root: ['build'],
        port: 9000,
        livereload: true
    });
});

gulp.task('default',['connect','scripts','templates','css','copy-index','vendorJS','vendorCSS','watch']);