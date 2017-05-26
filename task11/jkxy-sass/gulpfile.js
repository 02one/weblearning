var gulp = require('gulp');
// var spritesmith = require('gulp-spritesmith');
var compass = require('gulp-compass');
var connect = require('gulp-connect');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); //自动补齐前缀
var browseriy = require('gulp-browserify'); //用来组织js文件(比如有2个js文件，1.jshe和2.js，1在引用2的js只需调用require进行实现)

// var concat = require('gulp-concat');将多个JS文件合并
var mincss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');

var rev = require('gulp-rev'); //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector'); //- 路径替换

//语法检查
gulp.task('jshint', function() {
    return gulp.src('./javascripts/jkxy.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
//压缩css
gulp.task('minifycss', function() {
    return gulp.src('./stylesheets/screen.css') //需要操作的文件
        .pipe(rename({ suffix: '.min' })) //rename压缩后的文件名
        .pipe(mincss()) //执行压缩
});
// //压缩，合并 js
// gulp.task('minifyjs', function() {
//     return gulp.src(['./javascripts/jkxy.js']) //需要操作的文件
//         // .pipe(concat('main.js')) //合并所有js到main.js
//         // .pipe(gulp.dest('./dest')) //输出到文件夹
//         .pipe(rename({ suffix: '.min' })) //rename压缩后的文件名
//         .pipe(uglify()) //压缩
//         .pipe(gulp.dest('./dest')); //输出
// });
gulp.task('concat', function() { //- 创建一个名为 concat 的 task
	//css
    gulp.src(['./stylesheets/screen.css']) //- 需要处理的css文件，放到一个字符串数组里
        // .pipe(concat('main.min.css'))                            //- 合并后的文件名
        .pipe(mincss()) //- 压缩处理成一行
        .pipe(rev()) //- 文件名加MD5后缀
    	.pipe(gulp.dest('./rev/css')) //- 输出文件本地
        .pipe(rev.manifest()) //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/css')) //- 将 rev-manifest.json 保存到 dest 目录内
    // js
    gulp.src(['./javascripts/jkxy.js']) //- 需要处理的css文件，放到一个字符串数组里
        // .pipe(concat('main.min.css'))                            //- 合并后的文件名
        .pipe(uglify()) //- 压缩处理成一行
        .pipe(rev()) //- 文件名加MD5后缀
    	.pipe(gulp.dest('./rev/js')) //- 输出文件本地
        .pipe(rev.manifest()) //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/js')); //- 将 rev-manifest.json 保存到 dest 目录内

});

gulp.task('revCss', function () {
	// css
    return gulp.src(['rev/css/rev-manifest.json', 'src/jkxy.html'])
        .pipe( revCollector({
            replaceReved: true
        }) )
        .pipe( gulp.dest('./') );
});
gulp.task('revJs', function () {
    // js
    return gulp.src(['rev/js/rev-manifest.json', './jkxy.html'])
        .pipe( revCollector({
            replaceReved: true
        }) )
        .pipe( gulp.dest('./') );
});
//自动补齐前缀
gulp.task('autoprefixer', function() {

    return gulp.src('./stylesheets/screen.css')
        .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
        .pipe(gulp.dest('./stylesheets'));
});
// gulp.task('autoprefixer', function () {
//     var plugins = [
//         autoprefixer({browsers: ['last 3 version']}),
//     ];
//     return gulp.src('./stylesheets/screen.css')
//         .pipe(postcss(plugins))
//         .pipe(gulp.dest('./stylesheets'));
// });
// gulp.task('autoprefixer', function () {

//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//     return gulp.src('./stylesheets/screen.css')    
//         .pipe(gulp.dest('dist'));
// });
//开启本地服服务器
gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    });
});
//重新加载html
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
//将scss转化成css
gulp.task('css', function() {
    //编译（通过compass或者gulp-sass把scss转化成css）
    //压缩
    gulp.src('/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'stylesheets',
            sass: 'sass'
        }))
        // .pipe(mincss())
        .pipe(gulp.dest('./stylesheets'))

    .pipe(connect.reload());
});

//监控各个文件变化重新加载刷新页面
gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['css']);
    gulp.watch('./stylesheets/*.css', ['html']); //监控css文件
    gulp.watch('./javascripts/*.js', ['html']); //监控js文件
    gulp.watch(['./*.html'], ['html']); //监控html文件
});

// gulp.task('default', ['minifyjs', 'rev']);
gulp.task('server', ['watch', 'connect', 'jshint', 'concat','revCss','revJs', 'autoprefixer'], function() {
        console.log('test');
    });
// 雪碧图
// gulp.task('default',function(){
// 	return gulp.src('images/*.png')
// 	.pipe(spritesmith({
// 		imgName:'sprite.png',
// 		cssName:'dest/sprite.css',
// 		padding:5,
// 		algorithm:'binary-tree'
// 	}))
// 	.pipe(gulp.dest('images/'));
// });




