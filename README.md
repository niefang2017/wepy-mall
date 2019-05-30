### 安装使用
小程序组件化开发框架 https://tencent.github.io/wepy/
本项目微信小程序商城,使用redux进行状态管理
#### 安装（更新） wepy 命令行工具。

```console
npm install wepy-cli -g
```

#### 安装依赖

```console
npm install
```

#### 开发实时编译

```console
npm run dev
```
#### 开发打包web

```console
npm run dev:web
```

#### 生产编译

```console
npm run build
```
#### 预览
打开微信开发者工具导入项目

关闭开发者工具上es6转es5压缩等

#### 日历插件使用
```js
import initCalendar from '../../component/calendar/main.js';

const conf = { 
  multi: true, // 是否开启多选,
  disablePastDay: true, // 是否禁选过去的日期
  /**
   * 初始化日历时指定默认选中日期，如：'2018-3-6' 或 '2018-03-06'
   * 注意：若想初始化时不默认选中当天，则将该值配置为除 undefined 以外的其他非值即可，如：空字符串, 0 ,false等。
  */
  defaultDay: '2018-3-6', // 初始化后是否默认选中指定日期
  noDefault: true, // 初始化后是否自动选中当天日期，优先级高于defaultDay配置，两者请勿一起配置
  /**
   * 选择日期后执行的事件
   * @param { object } currentSelect 当前点击的日期
   * @param { array } allSelectedDays 选择的所有日期（当mulit为true时，才有allSelectedDays参数）
   */
  afterTapDay: (currentSelect, allSelectedDays) => {},
  /**
   * 当改变月份时触发
   * @param { object } current 当前年月
   * @param { object } next 切换后的年月
   */
  whenChangeMonth: (current, next) => {},
  /**
   * 日期点击事件（此事件会完全接管点击事件）
   * @param { object } currentSelect 当前点击的日期
   * @param { object } event 日期点击事件对象
   */
  onTapDay(currentSelect, event) {},
  /**
   * 日历初次渲染完成后触发事件，如设置事件标记
   * @param { object } ctx 当前页面实例
   */
  afterCalendarRender(ctx) {},
}

initCalendar(conf);
```