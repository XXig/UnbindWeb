module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
      grunt: {expand: true, cwd: '../build/', src: '*.js', dest: '../src/config/'},
      package: {expand: true, cwd: '../build/', src: '*.json', dest: '../src/config/'},
			img: {expand: true, cwd: '../src/images/', src: '*', dest: '../dist/images/'},
			fonts: {expand: true, cwd: '../src/font/', src: '*', dest: '../dist/font/'},
			media: {expand: true, cwd: '../src/media/', src: '*', dest: '../dist/media/'},
     html: {expand: true, cwd: '../src/html/', src: '*', dest: '../dist/html/'}
   },
   jshint:{
    build:['Gruntfile.js','../src/js/style.js'],
    options:{
      jshintrc:'.jshintrc'
    }
  },
  sass: {                              
    build: {
      options: {                      
        style: 'expanded'
      },
      files: {                        
        '../src/css/base.css': '../src/css/base.scss'
      }
    }
  },
  autoprefixer:{
    options:{
      browserslist:['last 2 versions','chrome','ie'],
      map:false
    },
    mutiple_files: {
      expand: true,
      flatten: true,
      src: '../src/css/*.css',
      dest: '../dist/css/'
    }
  },
  concat: {
    build: {
      src: ['../src/js/zepto.min.js','../src/js/resLoader.min.js','../src/js/style.js'],
      dest: '../src/js/main.js'
    }
  },
  uglify: {
    options: {
      stripBanners: true,
      banner: '/*! <%=pkg.name %>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      src: ['../src/js/main.js'],
      dest: '../dist/js/main.js'
    }
  },
  cssmin: {
    options: {
      stripBanners: true,
      banner: '/*! <%=pkg.name %>-<%=pkg.version%>.css <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      src: '../dist/css/base.css',
      dest: '../dist/css/base.css'
    }
  },
  watch:{
    build:{
      files:['Gruntfile.js','package.json','../src/images/*','../src/html/*.html','../src/js/*.js','../src/css/*'],
      tasks:['sass','autoprefixer','concat','uglify','cssmin','copy'],
      options:{ spawn:false}
    }
  }
});
	grunt.registerTask('default',[]);
};
// npm-check -u -g
// npm install -g browser-sync(全局)
// npm install browser-sync --save-dev
// E:/XX/目录下
// browser-sync start --server --files "E:/XX/dist/css/*.css,E:/XX/src/images/*, E:/XX/dist/html/*.html, E:/XX/dist/js/*.js"
// http://localhost:3000/dist/html/index.html=>E:/XX/dist/html/index.html
// npm install spy-debugger -g(全局)
// spy-debugger 192.168.1.7（本机ip） 9888