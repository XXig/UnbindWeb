var gulp = require('gulp'), 
$ = require('gulp-load-plugins')(),
rev = require('gulp-rev-append'),
cssver = require('gulp-make-css-url-version'),
sever = require('browser-sync');

var srclj = '../src',
distlj = '../app';


gulp.task('cssmin',function () {
	return $.rubySass(srclj+'/css/*.scss', { style: 'compact' })
	.pipe($.changed(srclj+'/css')) 
	.on('error', function (err) {console.error(err.message)})
	.pipe($.autoprefixer({
		browsers: ['> 5%','last 2 versions', 'Android >= 4.0'],
		// browsers: ['> 5%','last 2 versions', 'ie 6-11'],
		cascade: false, 
		remove:false 
	}))
	.pipe(gulp.dest(srclj+'/css'))
	.pipe(cssver()) 
	.pipe($.rename({ suffix: '.min' }))
	.pipe($.minifyCss({
		advanced: false,
		compatibility: 'ie8',// 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
		keepBreaks: false,
		keepSpecialComments: '*'
	}))
	.pipe(gulp.dest(distlj+'/css'));
});


gulp.task('jsmin', function () {
	return gulp.src([srclj+'/js/zepto.min.js',srclj+'/js/vue.js','!'+ srclj+'/js/resLoader.min.js',srclj+'/js/style.js','!'+srclj+'/js/{1,3}.js'])//除了1、3 
	.pipe($.changed(distlj+'/js')) 
	.pipe($.concat('main.min.js'))
	.pipe(gulp.dest(srclj+'/js'))
	.pipe($.uglify({
		mangle: true,
		compress: true,
		preserveComments: 'some' 
	}))
	// .pipe($.rename({ suffix: '.min' }))
	.pipe(gulp.dest(distlj+'/js'));
});

gulp.task('imgmin', function(){
	return gulp.src([srclj+'/images/*.{png,jpg}',srclj+'/images/**/*.{png,jpg}']) 
	.pipe($.changed(distlj+'/images'))
	.pipe($.tinypng('vo5bIIOTS-Z3R9hS0yJJbfjO9OHDu_v5'))
	.pipe(gulp.dest(distlj+'/images')); 
});

gulp.task('sever', function () {
	var files = [
	srclj+'/**/*.html',
	srclj+'/css/**/*.css',
	srclj+'/images/**/*.{png,jpg}',
	srclj+'/js/**/*.js'
	];
	sever.init(files, {
		server: {
			baseDir: srclj
		}
	});
});

gulp.task('copy', function() {
	return gulp.src([srclj+'/**/*','!'+srclj+'/css/*','!'+srclj+'/html/*','!'+srclj+'/images/*','!'+srclj+'/js/*'])
	.pipe(gulp.dest(distlj));
});

gulp.task('copyig', function() {
	return gulp.src(['gulpfile.js','package.json'])
	.pipe(gulp.dest(srclj+'/config'));
});

gulp.task('app', function(){
	return gulp.src(srclj+'/html/*.html')
	.pipe($.useref())
	.pipe(gulp.dest(distlj+'/html'))
	.pipe(rev())
	.pipe(gulp.dest(distlj+'/html'));
});

// gulp.task('default', function () {
// 	return gulp.src(distlj+'/**/*', {read: false})
// 	.pipe($.clean());
// });

gulp.task('default',function(){ 
	gulp.start('copyig','copy', 'jsmin', 'cssmin', 'imgmin');
	gulp.watch(srclj+'/**/*', ['jsmin','cssmin','app','imgmin']);
});

// npm install cnpm -g --registry=https://registry.npm.taobao.org 
// 查看其版本号cnpm -v或关闭命令提示符重新打开
// cnpm install 安装所有
// cnpm uninstall gulp-cache --save-dev
// cnpm install gulp-useref --save-dev