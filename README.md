
使用 `vue-cli` 创建

[Typescript 参考手册](https://www.tslang.cn/docs/handbook/basic-types.html)

- [框架](#%E6%A1%86%E6%9E%B6)
- [目录结构](#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
- [@Component 修饰器](#component-%E4%BF%AE%E9%A5%B0%E5%99%A8)
- [@Prop 修饰器](#prop-%E4%BF%AE%E9%A5%B0%E5%99%A8)
- [Project setup](#project-setup)
  - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
  - [Compiles and minifies for production](#compiles-and-minifies-for-production)
  - [Run your tests](#run-your-tests)
  - [Lints and fixes files](#lints-and-fixes-files)
  - [Run your unit tests](#run-your-unit-tests)
  - [Customize configuration](#customize-configuration)

## 框架

-   Typescript
-   Vue
-   Vuex
-   Vue-Router
-   Less
-   Eslint
-   Jest

## 目录结构

    ├─ src (业务目录)
    │  ├─ assets (资源文件)
    │  ├─ components (公共组件)
    │  ├─ styles (公共样式)
    │  ├─ utils (工具函数)
    │  ├─ views (页面文件)
    │  ├─ store (vuex store)
    │  ├─ main.ts (入口文件)
    │  ├─ router.ts (路由)
    │  └─ app.vue
    ├─ public (静态资源)
    ├─ tests (单元测试相关)
    ├─ dist (构建目录)
    ├─ node_modules (node 依赖)
    ├─ .vscode .vscode (工作区配置)
    ├─ vue.config.js vue-cli (配置文件)
    ├─ babel.config.js  
    ├─ jest.config.js  
    ├─ postcss.config.js  
    ├─ tsconfig.json  
    ├─ .browserslistrc  
    ├─ .eslintignore  
    ├─ .eslintrc  
    ├─ .gitignore  
    ├─ .prettierrc  
    ├─ package.json  
    └─ README.md  


## @Component 修饰器

-   [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
-   [vue-class-component](https://github.com/vuejs/vue-class-component) 提供类型 react 的 class 写法 , 用于声明组件,props等

```typescript
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    props:{
      propMessage: String,
    }
  },
})
export default class Home extends Vue {
  // 构造函数
  constructor() {
    super(...arguments)
  }

  // initial data
  msg = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // 生命周期
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
  }
}
```

## @Prop 修饰器

> @Prop(options: (PropOptions | Constructor[] | Constructor) = {}) decorator

在 typescript 中 使用 @Prop 可以更好声明 props

```typescript
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Prop(Number) readonly propA!: number
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC!: string | boolean
}
```

---

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run dev
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Run your unit tests

```
yarn run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).