# 快速开始
#### 安装组件库
```
npm install @willes/wui
```
#### 引用组件库
``` javascript
 //全部引入
import '@willes/wui/dist/theme-chalk/index.css'
import wui from '@willes/wui'
Vue.use(wui)

// 按需引入

import '@willes/wui/dist/theme-chalk/card.css'
import {Card} from '@willes/wui'
Vue.use(Card)
```