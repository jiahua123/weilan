//任务概念

//引入gulp

/*
 task（） 布置任务

	三个参数：

	第一个参数：任务名称  默认任务 default

	第二个参数：该任务依赖的其他任务，是一个数组（可选）

	第三个参数：任务回调函数（任务执行）
 */

var gulp=require('gulp');


//实用的任务：

// 1.编译sass
var sass = require('gulp-sass');
gulp.task('sass',function(){
  return gulp.src('src/sass/*.scss')
  			 .pipe(sass())
  			 .pipe(gulp.dest('dist/sass'));
});


//2.布置任务：压缩css文件
var cssmin=require('gulp-cssmin');
gulp.task('cssmin',function(){
  return gulp.src('src/lib/css.css')
  			 .pipe(cssmin())
  			 .pipe(gulp.dest('dist/css'));
});


//3.重命名
var rename=require('gulp-rename');
gulp.task('rename',function(){
  return gulp.src('src/lib/css.css')
  			 .pipe(cssmin())
  			 .pipe(rename('css.min.css'))
  			 .pipe(gulp.dest('dist/css'));
});

//4.压缩js并重命名
var uglify=require('gulp-uglify');

gulp.task('uglify',function(){
  return gulp.src('src/js/common.js')
  			 .pipe(uglify())
  			 .pipe(rename('common.min.js'))
  			 .pipe(gulp.dest('dist/js'));
});


//5.合并文件
var concat=require('gulp-concat');
gulp.task('concat',function(){
  return gulp.src(['dist/css/aa.css','dist/css/bb.css'])
  			 .pipe(concat('all.css'))
  			 .pipe(gulp.dest('dist/css'));
});

//6.压缩图片

var imagemin=require('gulp-imagemin');

gulp.task('imgmin',function(){
  return gulp.src('src/img/*')
  			 .pipe(imagemin())
  			 .pipe(gulp.dest('dist/img'));
});


