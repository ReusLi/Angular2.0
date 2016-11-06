/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './habit/environment';
import { bootloader } from '@angularclass/hmr';
/*
 * App Module
 * 引入habit组件
 */
import { HabitModule } from './habit';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(HabitModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));
}

// 渲染组件
bootloader(main);
