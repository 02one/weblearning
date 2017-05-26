var gulp =require('gulp');
var spritesmith = require('gulp.spritesmith');
var compass = require('gulp-compass');
// var autoprefixer = require('autoprefixer'); //自动补齐前缀
// var browseriy = require('gulp-browserify'); //用来组织js文件(比如有2个js文件，1.jshe和2.js，1在引用2的js只需调用require进行实现)
var browserSync = require('browser-sync').create();

// var concat = require('gulp-concat');将多个JS文件合并
var mincss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');

var rev = require('gulp-rev'); //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector'); //- 路径替换




//语法检查
gulp.task('jshint', function() {
    return gulp.src('./javascripts/test.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
gulp.task('concat', function() { //- 创建一个名为 concat 的 task
	//css
    gulp.src(['./stylesheets/te.css']) //- 需要处理的css文件，放到一个字符串数组里
        // .pipe(concat('main.min.css'))                            //- 合并后的文件名
        .pipe(mincss()) //- 压缩处理成一行
        .pipe(rev()) //- 文件名加MD5后缀
    	.pipe(gulp.dest('./rev/css')) //- 输出文件本地
        .pipe(rev.manifest()) //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/css')) //- 将 rev-manifest.json 保存到 dest 目录内
    // js
    gulp.src(['./javascripts/test.js']) //- 需要处理的css文件，放到一个字符串数组里
        // .pipe(concat('main.min.css'))                            //- 合并后的文件名
        .pipe(uglify()) //- 压缩处理成一行
        .pipe(rev()) //- 文件名加MD5后缀
    	.pipe(gulp.dest('./rev/js')) //- 输出文件本地
        .pipe(rev.manifest()) //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/js')); //- 将 rev-manifest.json 保存到 dest 目录内

});

gulp.task('revCss', function () {
	// css
    return gulp.src(['rev/css/rev-manifest.json', 'src/test.html'])
        .pipe( revCollector({
            replaceReved: true
        }) )
        .pipe( gulp.dest('./') );
});
gulp.task('revJs', function () {
    // js
    return gulp.src(['rev/js/rev-manifest.json', './test.html'])
        .pipe( revCollector({
            replaceReved: true
        }) )
        .pipe( gulp.dest('./') );
});

gulp.task('spritesmith',function(){
	return gulp.src('img/*.png')
	.pipe(spritesmith({
		imgName:'sprite.png',
		cssName:'dest/sprite.css',
		padding:5,
		algorithm:'binary-tree'
	}))
	.pipe(gulp.dest('img/'));
});
//开启本地服务
gulp.task('server', function() {

    browserSync.init({
        port: 8000,
        server: {
            baseDir: ['./']
        }
    });
// 监听各文件变化
    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./stylesheets/*.css").on('change', browserSync.reload);
    gulp.watch("./javascripts/*.js").on('change', browserSync.reload);
});

gulp.task('server', ['jshint', 'concat','revCss','revJs'], function() {
        console.log('test');
    });

