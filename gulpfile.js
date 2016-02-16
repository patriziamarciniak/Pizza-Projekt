var gulp = require('gulp');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var concat = require('gulp-concat');

gulp.task('build:dev', ['css', 'js', 'img', 'index', 'lib','views']);
gulp.task('index',['index_inject','index_build']);
          
gulp.task('js', function() {       
    
	gulp.src('scripts/*.js')
		.pipe(gulp.dest('build/scripts'));
    
});

//gulp.task('js_concat', function() {
//
//	gulp.src('scripts/*.js')
//        .pipe(concat('scripts.js'))
//		.pipe(uglify())
//		.pipe(gulp.dest('build/scripts'));
//
//});

gulp.task('css', function() {
    
	return gulp.src('css/*.css')
		.pipe(gulp.dest('build/css'));
});

gulp.task('views', function() {
    
	return gulp.src('views/*.html')
		.pipe(gulp.dest('build/views'));
});

gulp.task('img', function() {
    
	return gulp.src('css/images/*')
		.pipe(gulp.dest('build/css/images'));
});

gulp.task('lib', function() {
    
	return gulp.src('lib/*')
		.pipe(gulp.dest('build/lib'));
});

gulp.task('index_inject', function() {
    
 var target = gulp.src('index.html');
  var sources = gulp.src(['scripts/*.js', 'css/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('build'));
});

gulp.task('index_build', function() {
    
	return gulp.src('index.html')
		.pipe(gulp.dest('build'));
});