# Shopping
一个基于vue的商城项目

1.环境配置：
	Node 下载地址：http://nodejs.cn/
		安装文件下有一个绿色的图标node.exe点击运行
		输入node -v 进行检测
		
	使用 vue-cli (脚手架)搭建项目
		vue-cli 是vue官方提供的用于构建基于 vue + webpack + es6 项目的脚手架工具		
		操作：
		npm install -g vue-cli :全局下载工具
		vue init webpack Shopping(项目名称) :下载基于webpack模板项目
		cd Shopping
		npm install : 下载项目依赖的所有模块
		npm run dev
		访问：localhost:8080
		
		
2.技术分析与页面结构：

	页面组件：
		1> 商品列表组件
		2> 商品详情组件
		3> 购物车清单组件
		4> 结算页组件
		5> 订单详情组件
		6> 订单那列表组件
	
	Vue.js
		1> Vue基础组件库
		2> Vue-router(路由)
		3> Vuex(组件集中管理)  [安装Vuex： npm install vuex --save]
		4> 插件使用
		
	工具：
		1> webpack
		2> Vue-cli(脚手架)	

3.项目目录分析：
	主要修改添加src文件夹
		1> assets文件夹： 存放css,js,img
		2> components文件夹：存放组件
		3> lib文件夹：存放模拟数据
		4> router文件夹：路由
		5> store文件夹：Vuex
		6> views文件夹：存放单页