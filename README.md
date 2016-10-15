# vue-demos

基于Vue2.0官方教程的示例集合。用Webpack + vue-router把一堆示例整成了一个SPA。同时也尝试了下element-ui，用来做了个侧边导航栏。一只后端狗在Vue上的初试水，还有一堆坑没解决，先记下这些坑再慢慢填= =

1.element-ui 报错：Cannot read property 'indexPath' ofundefined（App.vue:6-16行）该问题貌似对路由、功能没有什么影响，而且部分index的值改成数字又不会报错，看起来有点诡异...

2.[Vue warn]: Duplicate presence of slot "default" found in the same render tree - this will likely cause render errors. (found in component
<ElCol>)
类似警告还有几处，应该是使用姿势不对= = 留坑待填

3.[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value.
同上 留坑待填

4.在组件里使用Vue报错undefined，不知道是不是姿势不对，采用在组件里重新import Vue的方法暂时填掉。。。

5.感觉在项目结构上不是很科学...

6.为什么build出来的js有1M大小...可怕

以上问题欢迎指点、共同探讨。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

