# vue-ts

> 使用 `vue-cli` 创建

- Typescript
- Vue
- Vuex
- Vue-Router
- Less
- Eslint
- Jest

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


### [Typescript 参考手册](https://www.tslang.cn/docs/handbook/basic-types.html)

### @Component 修饰器 
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
- [vue-class-component](https://github.com/vuejs/vue-class-component) 提供类型 react 的 class 写法 , 用于声明组件,props等

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

### @Prop 修饰器

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


