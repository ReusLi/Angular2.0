import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ViewChild, ViewChildren} from '@angular/core';

import { HabitService } from './service/HabitService';

//声明jQuery全局变量,引入mmenu.js的侧边栏插件
declare var $:any;
require("./plugin/jquery.mmenu.min.js");

//父组件
@Component({
	selector : 'app',

	encapsulation: ViewEncapsulation.None,	

	templateUrl : './template/habit.html',

	styleUrls: [
	'./mmenu-css/jquery.mmenu.all.css',
	'./mmenu-css/mmenu.css',
	'./mmenu-css/list.css',
	'./mmenu-css/list-radius.css',
	'./mmenu-css/list-radius.css',
	],
	//服务类
	providers: [HabitService]
})

export class HabitComponent {
	listd = [];
	//构造器 注入HabitService服务类 用于父子间通信
	constructor(private habitService : HabitService){

	}

	//相当于react里面的init?
	ngOnInit(): void {
		$(function () {
			$('#menu').mmenu({
				navbar:{
					title : ''
				}
			});
		});
		//首次加载页面先请求一次数据
		this.listd  = JSON.parse(JSON.stringify(this.habitService.getContentList(1)));
	}

	output($event){
		//nava点击后去service拿数据
		this.listd  = JSON.parse(JSON.stringify(this.habitService.getContentList($event)));
	}	
}