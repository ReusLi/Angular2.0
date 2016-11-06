import {Component} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

import { HabitService } from './service/HabitService';


/**
页面左侧菜单栏nav
*/
@Component({

	selector: "NavData",

	templateUrl: './template/habit.nav.html'
})

export class NavData {	
	//引入service,用于父子组件之间关于菜单栏选择项的通信id,name
	constructor(private habitService : HabitService){

	}
	//模拟菜单栏nav数据
	subjectData = [{"schoolId":4420002,"name":"科学","currencyId":1,"value":1,"icoCoinUrl":"/resources/wx/images/accomplishment/science/coin.png","icoLogoUrl":"/resources/wx/images/accomplishment/science/logo.png","icoSignUrl":"/resources/wx/images/accomplishment/science/sign.png"},{"schoolId":4420002,"name":"人文","currencyId":2,"value":1,"icoCoinUrl":"/resources/wx/images/accomplishment/culture/coin.png","icoLogoUrl":"/resources/wx/images/accomplishment/culture/logo.png","icoSignUrl":"/resources/wx/images/accomplishment/culture/sign.png"},{"schoolId":4420002,"name":"健康","currencyId":3,"value":1,"icoCoinUrl":"/resources/wx/images/accomplishment/health/A/coin.png","icoLogoUrl":"/resources/wx/images/accomplishment/health/A/logo.png","icoSignUrl":"/resources/wx/images/accomplishment/health/A/sign.png"},{"schoolId":4420002,"name":"实践","currencyId":4,"value":1,"icoCoinUrl":"/resources/wx/images/accomplishment/practice/coin.png","icoLogoUrl":"/resources/wx/images/accomplishment/practice/logo.png","icoSignUrl":"/resources/wx/images/accomplishment/practice/sign.png"},{"schoolId":4420002,"name":"艺术","currencyId":5,"value":1,"icoCoinUrl":"/resources/wx/images/accomplishment/art/A/coin.png","icoLogoUrl":"/resources/wx/images/accomplishment/art/A/logo.png","icoSignUrl":"/resources/wx/images/accomplishment/art/A/sign.png"}];	

	//子组件向上传递的事件
	@Output() output : EventEmitter<any> = new EventEmitter();

	//点击nav,保存被click项的id和name,通知父组件
	onClickMe(id : number, name : string){
		this.habitService.id = id;
		this.habitService.name = name;
		this.output.emit(id);
	}
}