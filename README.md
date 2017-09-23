# jtpl-vue

### use
cd jtpl-vue	
npm install 或者 yarn
### 目录节结构
![目录结构.png](http://imuntil.com/assets/directory.jpg)
build/ 和 config/ 为开发环境的配置目录，test/ 为测试目录，这几个基本不用管
static/ 目录存放不需要打包的静态文件，比如比较大的文件，字体，图片，视音频等
重点是src/ 目录
#### 关于src/ 目录
* assets	
  也是存放各种资源文件，但是在build的时候会被打包。小图片等会被转换成base64，其他会被hash命名
* components	
  存放各种组件（非路由组件）
* pages	
  存放路由组件
* router	
  路由配置文件目录
* service，utils	
  服务，功能性的模块的目录（我认为-。-），比如调用各种网络接口的模块等。
* styles 	
  全局性的样式文件，比如reset.css， 定义变量，mixin的declaration.scss，以及通用的common.scss等
* store	
  vux的目录，应用的状态管理。

### 关于组件
* 组件命名	
驼峰式，大写字母开头。使用时，小写，用短杠‘-’隔开
* 组件基本结构为

	```
	<template>	
		<div class="normal">
	   		// your code 
		</div>
	</template>
	<script>
	  // your code
	</script>
	<style type="text/scss" lang="scss" scoped>
	  //  your code
	</style>
	```
	* html代码必须用template包裹，且template下只能有一个直接子元素，也就是该组件的根元素只能有一个。	
	* style为scss，可以使用less或者css，加上scoped可以避免全局css污染(详见：[模块化的css](https://github.com/vuejs/vue-loader/blob/master/docs/en/features/scoped-css.md))，强烈建议使用。不过当使用第三方的组件时，经常会有修改第三方组件样式的情况，如果遇到样式不起作用，可以新建一个style，不使用scoped属性，专门修改组件的样式， 不过要当心全局污染。
	
  