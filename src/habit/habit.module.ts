import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * 引入组件HabitComponent父组件,NavData左侧菜单栏组件,ListData中间列表组件
 */
import { HabitComponent } from './habit.component';
import { NavData } from "./habit.navs.component";

/**
 * 模块入口 bootstrap类似react里面的ReactDOM.render
 * declarations 是为模块内需要用的组件,指令,管道注册 不然无法嵌套
 * imports 是导入其他模块
 */
@NgModule({
   bootstrap: [ HabitComponent ],
   declarations: [
    HabitComponent, 
    NavData
    ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule
  ],
})
export class HabitModule {

}

